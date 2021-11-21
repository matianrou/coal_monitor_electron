<!-- 填写组件 检查地点组件 -->
<template>
  <div style="width: 100%;">
    <!-- 地面 -->
    <div class="check-positon-row">
      <div class="check-positon-row-checkbox">
        <el-checkbox v-model="dataForm.tempValue.isAddress" label="地面"></el-checkbox>
      </div>
      <div class="check-positon-row-content">
        <el-input
          v-if="dataForm.tempValue.isAddress"
          v-model="dataForm.tempValue.addressContent"
          placeholder="请输入"
          size="small"
          style="margin-left: 10px;">
        </el-input>
      </div>
    </div>
    <!-- 井下 -->
    <div>
      <div class="check-positon-row">
        <div class="check-positon-row-checkbox">
          <el-checkbox v-model="dataForm.tempValue.isUnder" label="井下"></el-checkbox>
        </div>
        <div v-if="dataForm.tempValue.isUnder" class="check-positon-row-content">
          <el-tag
            v-for="(item, index) in underTag"
            :key="index"
            closable
            style="margin-right: 7px;"
            @close="handleClose(item)">
            {{item}}
          </el-tag>
        </div>
      </div>
      <div v-if="dataForm.tempValue.isUnder">
        <div class="under-main">
          <div class="under-main-title">
            <span>采煤工作面</span>
          </div>
          <div class="under-main-content">
            <el-checkbox-group v-model="dataForm.tempValue.coalList" size="small">
              <el-checkbox
                v-for="(item, index) in coalOptions"
                :key="index"
                :label="item.workfaceName"
                class="under-main-content-checkbox">
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="under-main">
          <div class="under-main-title">
            <span>掘进工作面</span>
          </div>
          <div class="under-main-content">
            <el-checkbox-group v-model="dataForm.tempValue.tunnellingList" size="small">
              <el-checkbox
                v-for="(item, index) in tunnellingOptions"
                :key="index"
                :label="item.workfaceName"
                class="under-main-content-checkbox">
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="under-main" style="border-bottom: 1px solid #DCDFE6;">
          <div class="under-main-title">
            <span>自定义工作面</span>
          </div>
          <div class="under-main-content">
            <el-input
              v-model="dataForm.tempValue.addwork"
              placeholder="请输入"
              size="small">
            </el-input>
            <el-button type="primary" size="small" style="margin-left: 10px;" @click="addUnder">添加</el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 其他 -->
    <div class="check-positon-row">
      <div class="check-positon-row-checkbox">
        <el-checkbox v-model="dataForm.tempValue.isOther" label="其它"></el-checkbox>
      </div>
      <div class="check-positon-row-content">
        <el-input
          v-if="dataForm.tempValue.isOther"
          v-model="dataForm.tempValue.otherContent"
          placeholder="请输入"
          size="small">
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
import GoDB from '@/utils/godb.min.js'
export default {
  name: "CheckPositionItem",
  props: {
    value: {
      type: Object,
      default: () => {},
    },
    corpData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      dataForm: {
        tempValue: {
          isAddress: false, // 是否选中地面
          addressContent: null, // 地面输入的内容
          isUnder: false, // 是否选中井下
          coalList: [], // 选中的采煤工作面
          tunnellingList: [], // 选中的掘进工作面
          addwork: null, // 自定义工作面输入的内容
          addList: [], // 已添加的自定义工作面
          isOther: false, // 是否选中其他
          otherContent: null, // 其他输入的内容
        },
      },
      coalOptions: [], // 采煤工作面选项列表
      tunnellingOptions: [], // 掘进工作面选项列表
      DBName: this.$store.state.DBName
    };
  },
  computed: {
    underTag () {
      // 展示的井下工作面
      let {coalList, tunnellingList, addList} = this.dataForm.tempValue
      return [...coalList, ...tunnellingList, ...addList]
    }
  },
  created() {
    Object.assign(this.dataForm.tempValue, this.value)
    this.getdbserve()
  },
  methods: {
    async getdbserve () {
      // 获取采煤和掘进工作面
      let db = new GoDB(this.DBName);
      let zfCserve = db.table("zfCmgzmInfo");
      let zfJserve = db.table("zfJjgzmInfo");
      let caimei = await zfCserve.findAll((item) => {
        item.select = false;
        return item.corpId == this.corpData.corpId;
      });
      let juejin = await zfJserve.findAll((item) => {
        item.select = false;
        return item.corpId == this.corpData.corpId;
      });
      this.coalOptions = caimei;
      this.tunnellingOptions = juejin;
      await db.close()
    },
    addUnder () {
      // 添加自定义工作面
      this.dataForm.tempValue.addList.push(this.dataForm.tempValue.addwork)
      this.dataForm.tempValue.addwork = null
    },
    handleClose (item) {
      // 删除井下工作面
      let {coalList, tunnellingList, addList} = this.dataForm.tempValue
      let coalIndex = coalList.findIndex(coal => item === coal)
      if (coalIndex !== -1) coalList.splice(coalIndex, 1)
      let tunnellingIndex = tunnellingList.findIndex(tunnelling => item === tunnelling)
      if (tunnellingIndex !== -1) tunnellingList.splice(tunnellingIndex, 1)
      let addIndex = addList.findIndex(add => item === add)
      if (addIndex !== -1) addList.splice(addIndex, 1)
    }
  },
};
</script>

<style lang="scss" scoped>
.check-positon-row {
  min-height: 40px;
  display: flex;
  align-items: center;
  .check-positon-row-checkbox {
    width: 70px;
  }
  .check-positon-row-content {
    flex: 1;
    margin-left: 10px;
  }
}
.under-main {
  display: flex;
  flex-direction: column;
  border: 1px solid #DCDFE6;
  border-bottom: none;
  .under-main-title {
    height: 30px;
    background: #4F83E9;
    color: #fff;
    padding: 2px 10px;
    display: flex;
    align-items: center;
  }
  .under-main-content {
    padding: 10px;
    .under-main-content-checkbox {
      display: block;
      height: 30px;
    }
  }
}
/deep/ .el-checkbox__label {
  font-size: 16px;
}
/deep/ .el-input {
  width: 236px;
}
</style>
<!-- 弹窗确认行政处罚信息 一般类文书，行政处罚决定书保存时弹出  -->
<template>
  <el-dialog
    title="信息确认"
    :close-on-click-modal="false"
    append-to-body
    :visible="visible"
    width="900px"
    top="5vh"
    @close="close"
  >
    <div v-loading="loading" class="punishment-info-confirm-main">
      <div class="title" style="justify-content: center; background: #F56C6C;">
        重要信息确认
      </div>
      <div class="title">
        一、每条隐患确认
      </div>
      <div>
        <!-- 每条隐患表格 -->
        <el-table
          ref="table"
          :data="dangerList"
          style="width: 100%;"
          height="400px"
          row-key="order"
          border
          :header-cell-style="{background: '#f5f7fa'}">
          <el-table-column
            prop="selectedType"
            label="罚款类型"
            header-align="center"
            align="center"
            width="80">
          </el-table-column>
          <el-table-column
            prop="fine"
            header-align="center"
            align="right"
            label="罚款金额（万元）"
            width="140">
          </el-table-column>
          <el-table-column
            prop="penaltyDescType"
            header-align="center"
            align="left"
            label="行政处罚类型"
            width="220">
          </el-table-column>
          <el-table-column
            prop="itemContent"
            header-align="center"
            align="left"
            label="隐患描述">
          </el-table-column>
        </el-table>
      </div>
      <div class="title">
        二、其他确认
      </div>
      <div style="height: 130px; padding: 20px; border: 1px solid #E4E7ED;">
        <span class="content">{{confirmInfo}}</span>
      </div>
      <div style="padding: 20px; text-align: center;">
        <div class="content" style="font-size: 18px; color: #F56C6C;">
          <el-checkbox v-model="isChecked"></el-checkbox>
          我已仔细查验上述信息，与实际相符，可作为统计的最终上传数据。
        </div>
        <div class="content" style="font-size: 14px; color: #E6A23C;">
          如果您不了解以上信息的正确录入方式，请学习执法系统教学视频，仍有疑问，可通过QQ群或电话向系统运维人员寻求帮助。
        </div>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">返回</el-button>
      <el-button type="primary" @click="confirm">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { sortbyAsc } from "@/utils/index";
export default {
  name: "PunishmentInfoConfirm",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    letData: {
      type: Object,
      default: () => {}
    },
  },
  data() {
    return {
      loading: false,
      subitemTypeOptions: [], // 行政处罚类型码表
      dangerList: [], // 确认处罚的列表
      confirmInfo: '', // 其他确认信息
      isChecked: false, // 是否确认
    };
  },
  async created() {
    await this.getDictionary()
    this.init()
  },
  methods: {
    async getDictionary () {
      let dictionaryList = await this.getDatabase('dictionary')
      let subitemType = dictionaryList.find(item => item.type === 'subitemType')
      let subitemTypeList = JSON.parse(subitemType.list)
      subitemTypeList.sort(sortbyAsc('sort'))
      this.subitemTypeOptions = subitemTypeList
    },
    async init() {
      this.getData()
    },
    getData () {
      // 获取每条隐患确认信息
      if (this.letData.DangerTable && this.letData.DangerTable.selectedDangerList) {
        this.dangerList = []
        let dangerList = []
        let totalFine = 0
        for (let i = 0; i < this.letData.DangerTable.selectedDangerList.length; i++) {
          let item = this.letData.DangerTable.selectedDangerList[i]
          let danger = {
            selectedType: this.letData.selectedType,
            fine: item.penaltyDescFine / 10000,
            penaltyDescType: item.penaltyDescType,
            itemContent: item.itemContent,
          }
          if (item.penaltyDescFine) {
            totalFine += item.penaltyDescFine / 10000
          }
          dangerList.push(danger)
        }
        let confirmInfo = ''
        if (totalFine) {
          confirmInfo = `处罚合计${totalFine}万元，${this.letData.selectedType}${totalFine}万元。`
        }
        this.confirmInfo = confirmInfo
        this.dangerList = dangerList
      }
    },
    close(refresh) { 
      this.$emit("close", { page: "punishmentInfoConfirm", refresh });
    },
    confirm() {
      // 关闭弹窗，并赋值
      if (this.isChecked) {
        this.$emit('confirm')
      } else {
        this.$message.error('请仔细阅读并确认处罚信息！')
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.punishment-info-confirm-main {
  .title {
    height: 30px;
    background: #4F83E9;
    color: #fff;
    padding: 2px 10px;
    display: flex;
    align-items: center;
  }
  .content {
    font-size: 16px;
    line-height: 1.5em;
  }
}
</style>
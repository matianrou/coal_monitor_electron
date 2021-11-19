<!-- 弹窗选择人员 -->
<template>
  <el-dialog
    :title="title ? title : '选择人员'"
    :close-on-click-modal="false"
    append-to-body
    :visible="visible"
    width="700px"
    top="10vh"
    @close="close"
  >
    <div v-loading="loading">
      <div class="dialog-filter">
        <div class="filter-name">
          <el-input
            v-model="dataForm.name"
            placeholder="请输入姓名检索"
            style="width: 150px;"
            size="small"
            clearable
            @change="getPersonList"
          ></el-input>
        </div>
        <div class="filter-province">
          <el-select
            v-model="dataForm.provinceId"
            style="width: 180px;"
            size="small"
            clearable
            @change="getPersonList">
            <el-option
              v-for="(item, index) in allProvinceList"
              :key="index"
              :label="item.name"
              :value="item.no">
            </el-option>
          </el-select>
          <el-checkbox v-model="dataForm.allPerson" @change="getPersonList">是否显示全省用户</el-checkbox>
        </div>
        <div v-if="hasAdd" class="filter-operation">
          <el-button
            type="primary"
            size="small"
            @click="addPerson"
          >添加人员</el-button>
        </div>
      </div>
      <div class="dialog-max">
        <el-table
          ref="personList"
          :data="personList"
          stripe
          border
          style="width: 100%;"
          height="100%"
          :header-cell-style="{background: '#f5f7fa'}"
          :highlight-current-row="!multiSelect"
          @current-change="handleCurrentChange"
          @selection-change="handleSelectionChange"
        >
          <el-table-column v-if="multiSelect" type="selection" width="55"></el-table-column>
          <el-table-column type="index" width="50" align="center"></el-table-column>
          <el-table-column prop="name" label="姓名" header-align="center" align="center"></el-table-column>
          <el-table-column prop="officeName" label="所属机构" header-align="center" align="center"></el-table-column>
        </el-table>
      </div>
    </div>
    <el-dialog
      title="添加人员"
      :close-on-click-modal="false"
      append-to-body
      :visible="addPersonVisible"
      width="400px"
      :show-close="false"
    >
      <div>
        <el-form
          ref="addDataForm"
          label-position="right"
          label-width="100px"
          :model="addDataForm"
          :rules="addRules"
          size="small">
          <el-form-item label="人员姓名：" prop="name">
            <el-input v-model="addDataForm.name" placeholder="请输入人员姓名" style="width: 200px;"></el-input>
          </el-form-item>
          <el-form-item label="工作单位：" prop="officeName">
            <el-input v-model="addDataForm.officeName" placeholder="请输入工作单位" style="width: 200px;"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addClose">取消</el-button>
        <el-button type="primary" @click="saveAddPerson">确定</el-button>
      </span>
    </el-dialog>
    <span slot="footer" class="dialog-footer">
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="confirm">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import GoDB from "@/utils/godb.min.js";
import { getAllProvinceOrg, sortbyAsc, randomString } from '@/utils/index'
import { getNowTime, getNowFormatTime } from '@/utils/date'
export default {
  name: "selectPersonDialog",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      // 弹窗标题
      type: String,
      default: null,
    },
    multiSelect: {
      // 是否多选
      type: Boolean,
      default: false,
    },
    selectedDataList: {
      // 多选时回显数据
      type: Array,
      default: () => [],
    },
    hasAdd: {
      // 是否可以新增人员
      type: Boolean,
      default: false
    },
    corpData: {
      // 煤矿及检查活动信息
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      loading: false,
      DBName: this.$store.state.DBName,
      personList: [], // 人员列表
      currentRow: {}, // 单选时使用选中人员
      currentRows: [], // 多选时选中人员
      dataForm: {
        name: null,
        provinceId: null,
        allPerson: false,
      },
      allProvinceList: [],
      addPersonVisible: false, // 添加人员
      addDataForm: {
        name: null,
        officeName: null
      },
      addRules: {
        name: [
          { required: true, message: '请输入人员姓名', trigger: 'blur' }
        ],
        officeName: [
          { required: true, message: '请输入工作单位', trigger: 'blur' }
        ],
      }
    };
  },
  async created() {
    await this.getOrgList()
    await this.init();
  },
  watch: {
    selectedDataList: {
      // 回显数据，勾选上已选数据
      handler(val) {
        this.currentRows = val;
        if (this.$refs.personList) {}
        this.$nextTick(() => {
          this.$refs.personList && this.$refs.personList.clearSelection();
          if (this.$refs.personList && val.length > 0) {
            val.map((row) => {
              this.$refs.personList.toggleRowSelection(
                this.personList.find((item) => item.no === row.no),
                true
              );
            });
          }
        });
      },
      immediate: true,
    },
  },
  methods: {
    async init() {
      // 初始化选择列表
      this.getPersonList()
    },
    async getOrgList() {
      let db = new GoDB(this.DBName);
      let orgInfo = db.table("orgInfo"); // 机构
      // 查询全省机构
      let groupList = await orgInfo.findAll(item => {
        return item.delFlag === "0" && item.grade === '2'
      })
      groupList.sort(sortbyAsc('createDate'))
      this.allProvinceList = groupList
      await db.close();
    },
    async getPersonList () {
      // 获取用户数据
      this.loading = true;
      let db = new GoDB(this.DBName);
      let person = db.table("person");
      let addPerson = db.table("addPerson");
      let personList = await person.findAll(item => item);
      let addPersonList = await addPerson.findAll(item => item.caseId === this.corpData.caseId && item.delFlag === '0')
      // let curPerson = await person.find(item => item.no === this.$store.state.user.userId)
      await db.close();
      if (this.dataForm.name) {
        personList = personList.filter(item => item.name === this.dataForm.name)
      }
      if (this.dataForm.allPerson) {
        // 显示全省用户
        // 获取全省的机构id
        let provinceIds = []
        let provinceId = this.dataForm.provinceId ? this.dataForm.provinceId : this.$store.state.user.userGroupId
        let orgList = await getAllProvinceOrg(provinceId)
        if (orgList.length > 0) {
          orgList.map(item => {
            provinceIds.push(item.no)
          })
        }
        personList = personList.filter(item => provinceIds.includes(item.officeId)) 
        personList.sort(sortbyAsc('officeId'))
      } else {
        // 不显示全省用户
        let provinceId = this.dataForm.provinceId ? this.dataForm.provinceId : this.$store.state.user.userGroupId
        personList = personList.filter(item => item.officeId === provinceId)
        personList.sort(sortbyAsc('officeId'))
      }
      // 获取当前检查活动中已添加的人员
      this.personList = [...personList, ...addPersonList]
      this.loading = false;
    },
    close(refresh) {
      if (this.multiSelect) {
        this.currentRows = [];
      } else {
        this.currentRow = {};
      }
      this.$emit("close", { page: "selectPerson", refresh });
    },
    confirm() {
      // 关闭弹窗，并赋值
      // 将临时保存数据结果赋值到数据中
      if (!this.multiSelect) {
        // 单选时传出
        this.$emit("confirm-person", this.currentRow);
      } else {
        // 多选时传出
        this.$emit("confirm-person", this.currentRows);
      }
      this.close();
    },
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      // 单选时使用
      if (!this.multiSelect) {
        this.currentRow = val;
      }
    },
    handleSelectionChange(val) {
      // 多选时使用
      if (this.multiSelect) {
        this.currentRows = val;
      }
    },
    addPerson () {
      // 添加人员
      this.addPersonVisible = true
    },
    addClose () {
      // 关闭添加人员弹窗
      this.$refs.addDataForm.resetFields()
      this.addPersonVisible = false
    },
    saveAddPerson () {
      // 保存添加人员
      this.$refs.addDataForm.validate(async (validate) => {
        if (validate) {
          let db = new GoDB(this.DBName);
          let addPerson = db.table("addPerson"); // 添加人员的表
          let person = {
            no: getNowTime() + randomString(18),
            name: this.addDataForm.name,
            officeName: this.addDataForm.officeName,
            caseId: this.corpData.caseId,
            corpId: this.corpData.corpId,
            delFlag: '0',
            createBy: this.$store.state.user.userId,
            createDate: getNowFormatTime(),
          }
          await addPerson.add(person);
          await db.close();
          this.addClose()
          this.getPersonList()
        }
      })
    }
  },
};
</script>

<style lang="scss" scoped>
/deep/ .current-row {
  td {
    background: rgb(83, 168, 255) !important;
    color: #fff;
  }
}
/deep/ .el-dialog__body {
  padding: 10px 30px;
  border-top: 1px solid #DCDFE6;
}
.dialog-filter {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  .filter-name {
  }
  .filter-province {
    text-align: right;
  }
}
.dialog-max {
  height: calc(100vh - 10vh - 250px);
}
</style>
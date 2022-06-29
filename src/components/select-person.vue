<!-- 弹窗选择人员 -->
<template>
  <el-dialog
    :title="title ? title : '选择人员'"
    :close-on-click-modal="false"
    append-to-body
    :visible="visible"
    width="900px"
    top="5vh"
    @close="close"
  >
    <div v-loading="loading" ref="dragDiv">
      <div class="dialog-filter">
        <div class="filter-name">
          <el-input
            v-model="dataForm.name"
            placeholder="请输入姓名检索，多个人名按逗号分割"
            size="small"
            clearable
            @change="getPersonList"
          ></el-input>
        </div>
        <!-- 切换为机构树状结构展示，此处就不再使用下拉选项方式 -->
        <!-- <div class="filter-province">
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
        </div> -->
      </div>
      <!-- 按机构查找 -->
      <div v-if="searchFormal === 'org'" class="show-person-main">
        <div :class="multiSelect ? 'dialog-max-multi org-tree-main' : 'dialog-max org-tree-main'">
          <el-tree
            ref="orgListTree"
            :data="orgListTree"
            :props="{
              label: 'name',
              children: 'children',
            }"
            node-key="no"
            highlight-current
            :current-node-key="selectedOrgId"
            :default-expanded-keys="[selectedOrgId]"
            @node-click="changeSelectOrg">
            <span class="span-ellipsis" slot-scope="{ node }">
              <span :title="node.label">{{ node.label }}</span>
            </span>
          </el-tree>
        </div>
        <div :class="multiSelect ? 'dialog-max-multi org-table-main' : 'dialog-max org-table-main'">
          <el-table
            ref="personList"
            :data="personList"
            stripe
            border
            height="100%"
            :row-key="getRowKey"
            :header-cell-style="{background: '#f5f7fa'}"
            :highlight-current-row="!multiSelect"
            @current-change="handleCurrentChange"
            @select="selectPerson"
            @selection-change="handleSelectionChange"
          >
            <el-table-column v-if="multiSelect" type="selection" header-align="center" align="center" width="55" :reserve-selection="true"></el-table-column>
            <el-table-column type="index" width="50" align="center"></el-table-column>
            <el-table-column prop="name" label="姓名" header-align="center" align="center"></el-table-column>
            <el-table-column prop="officeName" label="所属机构" header-align="center" align="center"></el-table-column>
          </el-table>
        </div>
      </div>
      <!-- 按姓名查找 -->
      <div v-else>
        <div :class="multiSelect ? 'dialog-max-multi' : 'dialog-max'" style="flex: 1;">
          <el-table
            ref="personList"
            :data="personList"
            stripe
            border
            style="width: 100%;"
            height="100%"
            :row-key="getRowKey"
            :header-cell-style="{background: '#f5f7fa'}"
            :highlight-current-row="!multiSelect"
            @current-change="handleCurrentChange"
            @select="selectPerson"
            @selection-change="handleSelectionChange"
          >
            <el-table-column v-if="multiSelect" type="selection" header-align="center" align="center" width="55" :reserve-selection="true"></el-table-column>
            <el-table-column type="index" width="50" align="center"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180" header-align="center" align="center"></el-table-column>
            <el-table-column prop="allOrgName" label="所属机构" header-align="center" align="center"></el-table-column>
          </el-table>
        </div>
      </div>
      <div v-if="multiSelect" class="list-order">
        <!-- 拖拽排序 -->
        <div class="list-order-title">
          <span>已选人员（拖拽排序）：</span>
        </div>
        <div class="list-order-tags">
          <el-tag
            v-for="(person, index) in allSelectedPerson"
            :key="person.no"
            closable
            class="dragtag"
            @close="deletePerson(person, index)">
            {{person.name}}
          </el-tag>
        </div>
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
      <el-button
        v-if="hasAdd"
        type="primary"
        @click="addPerson"
      >添加人员</el-button>
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="confirm">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { getAllProvinceOrg, sortbyAsc, randomString } from '@/utils/index'
import { getNowTime, getNowFormatTime } from '@/utils/date'
import Sortable from 'sortablejs'
import { getOrgTreeList } from '@/utils/setInitPaperData'
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
    selectedData: {
      // 单选时回显数据
      type: Object,
      default: () => {}
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
      personList: [], // 人员列表
      currentRow: {}, // 单选时使用选中人员
      currentRows: [], // 多选时当前选中人员
      dataForm: {
        name: null,
        provinceId: null,
        allPerson: false,
      },
      // allProvinceList: [],
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
      },
      sortableItem: null,
      orgListTree: [], // 树状展示机构列表
      orgList: [], // 所有机构列表
      selectedOrgId: '', // 选中的机构no
      allSelectedPerson: [], // 已选中的所有人员
      allPersonList: [], // 所有人员
      searchFormal: 'org', // 查询人员方式，'org'为按机构查找，'name'按姓名查找
    };
  },
  async created() {
    await this.getAllPerson()
    await this.getOrgList()
  },
  methods: {
    async getAllPerson () {
      let person = await this.getDatabase("person");
      let addPerson = await this.getDatabase("addPerson");
      // 获取所有用户
      // 获取当前检查活动添加人员
      let addPersonList = []
      if (this.corpData) {
        addPersonList = JSON.parse(JSON.stringify(addPerson.filter(item => 
          item.caseId === this.corpData.caseId && 
          item.delFlag !== '1') || []))
      }
      let allPersonList = []
      if (this.$store.state.user.userType === 'supervision') {
        // 监管获取所有用户
        allPersonList = JSON.parse(JSON.stringify(person.filter(item => item.delFlag !== '1' && item.officeId !== '000000310001') || []))
      } else {
        // 监察获取所有用户，去掉国家级用户
        allPersonList = JSON.parse(JSON.stringify(person.filter(item => item.delFlag !== '1' && item.officeId !== '000000110001') || []))
      }
      this.allPersonList = [...allPersonList, ...addPersonList]
    },
    async getOrgList() {
      // 组织机构树状结构
      // let orgInfo = await this.getDatabase("org"); // 机构
      // // 查询全省机构
      // let groupList = []
      // if (this.$store.state.user.userType === 'supervision') {
      //   // 监管不筛选type类型
      //   groupList = JSON.parse(JSON.stringify(orgInfo.filter(item => {
      //     return item.delFlag !== "1" 
      //     && (item.grade === '2' || item.grade === '1')
      //   }) || []))
      // } else {
      //   // 监察筛选type类型
      //   groupList = JSON.parse(JSON.stringify(orgInfo.filter(item => {
      //     return item.delFlag !== "1" 
      //     && (item.grade === '2' || item.grade === '1')
      //     && (item.type === '3' || item.type === '4' || item.type === '11')
      //   }) || []))
      // }
      // this.allProvinceList = groupList
      let orgData = await getOrgTreeList()
      this.orgListTree = orgData.orgListTree
      this.orgList = orgData.orgList
      // 默认选中当前用户的机构
      this.$nextTick(async () => {
        if (this.multiSelect) {
          this.selectedOrgId = this.$store.state.user.userGroupId
          this.$refs.orgListTree.setCurrentKey(this.$store.state.user.userGroupId)
          await this.getPersonList()
          let selectedDataList = this.selectedDataList
          for (let i = 0; i < selectedDataList.length; i++) {
            // 如果没有name字段则补充
            let item = selectedDataList[i]
            if (!item.name) {
              let personData = this.allPersonList.find(person => person.no === item.no)
              item.name = personData.name
            }
          }
          this.allSelectedPerson = selectedDataList;
          this.setSelectionRows()
          this.rowDrop()
        } else {
          // 单选时，判断是否已选人员，如果已选则默认进入已选人员的机构
          let officeId = null
          if (this.selectedData && this.selectedData.no) {
            let curPerson = this.allPersonList.filter(item => item.no === this.selectedData.no)[0]
            officeId = curPerson.officeId
          }
          this.selectedOrgId = officeId ? officeId : this.$store.state.user.userGroupId
          this.$refs.orgListTree.setCurrentKey(this.selectedOrgId)
          await this.getPersonList()
          this.setSelectionRow()
        }
      })
    },
    async changeSelectOrg (data) {
      this.selectedOrgId = data.no
      await this.getPersonList()
    },
    async getPersonList () {
      // 获取用户数据
      this.loading = true;
      this.personList = []
      let personList = []
      // 按机构查找时
      if (!this.dataForm.name) {
        // 当前选中的机构信息
        let selectedOrgData = this.orgList.filter(item => item.no === this.selectedOrgId)[0]
        // 递归获取当前选中机构的id及子id
        let officeIdList = [selectedOrgData.no]
        if (selectedOrgData.children) {
          this.getOfficeChildrenId(selectedOrgData.children, officeIdList)
        } 
        // 根据选中的机构及子集获取用户信息
        for (let i = 0; i < officeIdList.length; i++) {
          let officePersonList = this.allPersonList.filter(item => item.officeId === officeIdList[i])
          for (let j = 0; j < officePersonList.length; j ++) {
            personList.push(officePersonList[j])
          }
        }
        this.searchFormal = 'org'
      } else {
        // 按姓名查找时
        // 判断是否有逗号，如果有则按逗号分割，如果没有则直接查找
        if (this.dataForm.name.includes(',') || this.dataForm.name.includes('，')) {
          let searchStringList = this.dataForm.name.split(/[,，]/)
          for (let i = 0; i < searchStringList.length; i++) {
            let searchList = this.getPersonListByName(searchStringList[i])
            for (let j = 0; j < searchList.length; j++) {
              personList.push(searchList[j])
            }
          }
        } else {
          personList = this.getPersonListByName(this.dataForm.name)
        }
        this.searchFormal = 'name'
      }
      // if (this.dataForm.allPerson) {
      //   // 显示全省用户
      //   // 获取全省的机构id
      //   let provinceIds = []
      //   let provinceId = this.dataForm.provinceId ? this.dataForm.provinceId : this.$store.state.user.userGroupId
      //   let orgList = await getAllProvinceOrg(provinceId)
      //   if (orgList.length > 0) {
      //     orgList.map(item => {
      //       provinceIds.push(item.no)
      //     })
      //   }
      //   personList = personList.filter(item => provinceIds.includes(item.officeId)) 
      //   personList.sort(sortbyAsc('officeId'))
      // } else {
      //   // 不显示全省用户
      //   let provinceId = this.dataForm.provinceId ? this.dataForm.provinceId : this.$store.state.user.userGroupId
      //   personList = personList.filter(item => item.officeId === provinceId)
      //   personList.sort(sortbyAsc('officeId'))
      // }
      // 获取当前检查活动中已添加的人员
      this.personList = personList
      if (this.multiSelect) {
        // 多选时直接设置当前机构选中人员
        this.setSelectionRows() 
      }
      this.loading = false;
    },
    getPersonListByName (name) {
      let personList = this.allPersonList.filter(item => item.name && item.name.includes(name))
      // 整理人员所在机构及父级机构名称
      for (let i = 0; i < personList.length; i++) {
        let item = personList[i]
        let allOrgName = ''
        if (item.company) {
          let company = JSON.parse(item.company)
          if (company.grade === '2') {
            allOrgName = item.officeName
          } else if (company.grade === '3') {
            let orgData = this.orgList.find(item => item.no === company.parentId)
            allOrgName = `${orgData.name}-${item.officeName}`
          } else if (company.grade === '4') {
            let upOrg = this.orgList.find(item => item.no === company.parentId)
            let provinceOrg = this.orgList.find(item => item.no === upOrg.parentId)
            allOrgName = `${provinceOrg.name}-${upOrg.name}-${item.officeName}`
          }
        }
        item.allOrgName = allOrgName
      }
      return personList
    },
    getOfficeChildrenId (data, officeIdList) {
      for (let i = 0; i < data.length; i++) {
        let item = data[i]
        officeIdList.push(item.no)
        if (item.children) {
          this.getOfficeChildrenId(item.children, officeIdList)
        }
      }
    },
    setSelectionRow() {
      // 设置单选
      this.currentRow = this.selectedData
      this.$nextTick(() => {
        if (this.selectedData && this.selectedData.no) {
          this.$refs.personList.setCurrentRow(
            this.personList.find((item) => item.no === this.selectedData.no),
            true
          );
        }
      })
    },
    setSelectionRows() {
      // 设置多选
      this.$nextTick(() => {
        this.$refs.personList && this.$refs.personList.clearSelection();
        // 设置当前选中机构已有人员
        let curOrgPersonSelectedList = []
        for (let i = 0; i < this.allSelectedPerson.length; i++) {
          let selectedItem = this.allSelectedPerson[i]
          for (let j = 0; j < this.personList.length; j++) {
            let personItem = this.personList[j]
            if (selectedItem.no === personItem.no) {
              curOrgPersonSelectedList.push(selectedItem)
            }
          }
        }
        if (this.$refs.personList && curOrgPersonSelectedList.length > 0) {
          curOrgPersonSelectedList.map((row) => {
            this.$refs.personList.toggleRowSelection(
              this.personList.find((item) => item.no === row.no),
              true
            );
          });
        }
      });
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
        this.$emit("confirm-person", this.allSelectedPerson);
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
    selectPerson (selection, row) {
      // 判断row是否在selection中，如果在则代表新增，如果不在则代表删除
      if (selection.length > 0 && selection.filter(item => item.no === row.no).length > 0) {
        this.allSelectedPerson.push(row)
      } else {
        let index = this.allSelectedPerson.findIndex(item => item.no === row.no)
        this.allSelectedPerson.splice(index, 1)
      }
    },
    handleSelectionChange(val) {
      // 多选时使用
      if (this.multiSelect) {
        this.currentRows = val;
      }
    },
    deletePerson (person, index) {
      // 删除当前选中
      let curIndex = this.currentRows.findIndex(item => item.no === person.no)
      if (curIndex !== -1) this.currentRows.splice(curIndex, 1)
      // 同时删除已选所有人员
      this.allSelectedPerson.splice(index, 1)
      this.$refs.personList.toggleRowSelection(
        this.personList.find((item) => item.no === person.no),
        false
      );
    },
    rowDrop () {
      this.$nextTick(() => {
        // 此时找到的元素是要拖拽元素的父容器
        const dagEl = this.$refs.dragDiv.querySelectorAll('.list-order-tags')[0]
        const that = this;
        this.sortableItem = new Sortable(dagEl, {
          //  指定父元素下可被拖拽的子元素
          draggable: ".dragtag",
          direction: 'horizontal',
          onEnd ({ newIndex, oldIndex }) {
            let value = JSON.parse(JSON.stringify(that.allSelectedPerson))
            let currRow = value.splice(oldIndex, 1)[0];
            value.splice(newIndex, 0, currRow);
            that.allSelectedPerson = value
          }
        });
      })
    },
    getRowKey (row) {
      return row.no
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
          let selectedOrgData = this.orgList.filter(item => item.no === this.selectedOrgId)[0]
          await this.$confirm(`是否确定在“${selectedOrgData.name}”中添加“${this.addDataForm.name}”？`, '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              dangerouslyUseHTMLString: true,
              type: 'warning'
            }).then(async () => {
              let person = {
                no: getNowTime() + randomString(28),
                name: this.addDataForm.name,
                officeName: this.addDataForm.officeName,
                caseId: this.corpData.caseId,
                corpId: this.corpData.corpId,
                delFlag: '0',
                createBy: this.$store.state.user.userId,
                createDate: getNowFormatTime(),
                company: JSON.stringify(selectedOrgData),
                email: '',
                mobile: '',
                office: JSON.stringify(selectedOrgData),
                officeId: this.selectedOrgId,
              }
              await this.updateDatabase('addPerson', [person], 'no')
              this.addClose()
              // 获取所有人员
              await this.getAllPerson()
              // 获取当前人员
              await this.getPersonList()
            }).catch(() => {})
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
.dialog-filter {
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  .filter-name {
    width: 100%;
  }
  .filter-province {
    text-align: right;
  }
}
.show-person-main {
  display: flex;
  flex-direction: row;
  border: 1px solid #EBEEF5;
  width: 860px;
  .org-tree-main {
    width: 350px;
    overflow: auto;
    /deep/ .el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content {
      background-color: rgb(121, 187, 255);
      color: #fff;
    }
  }
  .org-table-main {
    width: calc(860px - 350px);
  }
}
.dialog-max-multi {
  height: calc(100vh - 10vh - 330px);
}
.dialog-max {
  height: calc(100vh - 10vh - 250px);
}
.list-order {
  margin-top: 20px;
  border: 1px solid rgb(160, 207, 255);
  padding: 15px;
  position: relative;
  .list-order-title {
    position: absolute;
    top: -10px;
    background: #fff;
    padding: 0 3px;
    color: #303133;
  }
  .dragtag {
    margin-right: 5px;
  }
}
</style>
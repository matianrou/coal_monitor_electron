<!-- 文书 样式总框架组件 -->
<template>
  <div class="let-main">
    <div class="let-main-left">
      <!-- 左侧文书组件 -->
      <slot name="left" ref="letLeft"></slot>
    </div>
    <div class="let-main-right" id="toolContainer">
      <table
        style="width:100%;height:42px;background-color:#093A83;border-top-left-radius: 10px;border-top-right-radius: 10px;"
      >
        <tr>
          <td style="width:80px;text-align:center;">
            <el-button
              :disabled="!canEdit"
              type="text"
              @click="cmdDocSave('2')"
              style="color: #fff;">
              保存
            </el-button>
          </td>
          <td style="width:100px;text-align:center;">
            <el-button type="text" @click="cmdDocView" style="color: #fff;">打印预览</el-button>
            <!-- <a class="btnTool" href="javascript:cmdDocView()">打印预览</a> -->
          </td>
          <td style="width:80px;text-align:center;">
            <el-button
              :disabled="!canEdit"
              type="text"
              @click="cmdDocSave('0')"
              style="color: #fff;">
              归档
            </el-button>
          </td>
          <td style="width:80px;text-align:center;">
            <el-button type="text" @click="cmdDocBack" style="color: #fff;">返回</el-button>
            <!-- <a class="btnTool" href="javascript:cmdDocBack()">返回</a> -->
          </td>
          <td style="width:80px;">&nbsp;</td>
        </tr>
      </table>
      <h3 class="uk-card-title" style="padding:10px;">执法对象</h3>
      <table style="border-collapse:collapse;margin:0 auto;margin:0px 10px;" id="rightSideCorp">
        <tr style="height:32px;">
          <td style="border-bottom: 1px solid #666;" colspan="2">{{ corpData.corpName }}</td>
        </tr>
        <tr style="height:32px;">
          <td style="width:20%;border-bottom:1px solid #666;">企业类型：</td>
          <td style="width:80%;border-bottom: 1px solid #666;">{{ corpData.corpTypeName }}</td>
        </tr>
        <tr style="height:32px;">
          <td style="border-bottom:1px solid #666;">所在区域：</td>
          <td style="border-bottom:1px solid #666;">{{ corpData.corpCountryName }}</td>
        </tr>
        <tr style="height:32px;">
          <td style="border-bottom:1px solid #666;">经营地址：</td>
          <td style="border-bottom:1px solid #666;">{{ corpData.address }}</td>
        </tr>
        <tr style="height:32px;">
          <td style="border-bottom:1px solid #666;">负&nbsp;&nbsp;责&nbsp;&nbsp;人：</td>
          <td style="border-bottom:1px solid #666;">{{ corpData.legalName }}</td>
        </tr>
        <tr style="height:32px;">
          <td style="border-bottom:1px solid #666;">联系电话：</td>
          <td style="border-bottom:1px solid #666;">{{ corpData.tel }}</td>
        </tr>
      </table>
    </div>
    <let-drawer
      ref="letDrawer"
      :visible="visible"
      :selectedData="selectedData"
      @handle-close="handleClose"
      @handle-save="handleSave"
    ></let-drawer>
  </div>
</template>

<script>
import { getNowFormatTime, getNowTime } from "@/utils/date";
import { randomString } from "@/utils/index";
import GoDB from "@/utils/godb.min.js";
import { createHtml } from "@/utils/createHtml";
import letDrawer from "@/components/let-drawer";
import { saveToUpload } from '@/utils/savePaperData'
import {
  setTextItem,
  setCheckItem,
  setDaterangeItem,
  setTextareaItem,
  setCheckPositionItem,
  setCheckTableItem,
  setDateItem,
  setDangerTableItem,
  setDatetimeItem,
  setSelectItem,
  setSelectInputItem,
  setSamplingForensicsTable,
  setVolumesMenuTable
} from "@/utils/handlePaperData";

export default {
  name: "LetMain",
  components: {
    letDrawer,
  },
  props: {
    corpData: {
      // 煤矿信息
      type: Object,
      default: () => {},
    },
    docData: {
      // 文书信息
      type: Object,
      default: () => {},
    },
    editData: {
      // 编辑回显数据
      type: Object,
      default: () => {},
    }
  },
  data() {
    return {
      visible: false, // 展示填写组件
      selectedData: {
        key: null, // 修改的内容key
        type: null, // 填写组件类型
        title: null, // 标题
        value: null, // 值
        options: null, // 选项
      },
      functions: {
        setTextItem,
        setCheckItem,
        setDaterangeItem,
        setTextareaItem,
        setCheckPositionItem,
        setCheckTableItem,
        setDateItem,
        setDangerTableItem,
        setDatetimeItem,
        setSelectItem,
        setSelectInputItem,
        setSamplingForensicsTable,
        setVolumesMenuTable
      },
      DBName: this.$store.state.DBName,
    };
  },
  computed: {
    canEdit() {
      // 是否可编辑或保存归档
      let edit = false
      // 判断当前是否为编辑，如果编辑时则调取paperData中的delFlag字段，如果为归档，则不可编辑
      if (this.$parent.paperData && this.$parent.paperData.paperId && this.$parent.paperData.delFlag === '0') {
        edit = false
      } else {
        edit = true
      }
      return edit
    }
  },
  created() {
  },
  methods: {
    cmdDocBack() {
      this.$emit("go-back", { page: "writFlow" });
    },
    async cmdDocSave(saveFlag = "2") {
      // 保存或归档文书
      let paperId = this.editData.paperId
        ? this.editData.paperId
        : getNowTime() + randomString(18);
      let createDate = this.editData.createDate
        ? this.editData.createDate
        : getNowFormatTime();
      let createTime = this.editData.createTime
        ? this.editData.createTime
        : getNowFormatTime();
      let page = createHtml(this.$slots.left[0].elm.innerHTML);
      let jsonPaper = {
        paperId: paperId,
        remoteId: "",
        delFlag: saveFlag,
        createDate,
        updateDate: getNowFormatTime(),
        createById: this.$store.state.user.userId,
        updateById: this.$store.state.user.userId,
        createTime,
        personId: this.$store.state.user.userId,
        personName: this.$store.state.user.userName,
        p0FloorTime: "",
        groupId: this.$store.state.user.userGroupId, //机构id
        groupName: this.$store.state.user.userGroupName, //机构名称
        paperContent: JSON.stringify(this.$parent.letData),
        paperType: this.docData.docTypeNo,
        paperHtml: page,
        name: this.docData.docTypeName,
        caseId: this.corpData.caseId,
        caseType: "",
        corpId: this.corpData.corpId,
        corpName: this.corpData.corpName,
        planId: this.corpData.planId,
      };
      const db = new GoDB(this.DBName);
      const wkPaper = db.table("wkPaper");
      // 如果保存的是已编辑的 那么保存的同时要把上一条重复的数据删除
      const paperData = await wkPaper.find((item) => {
        return item.paperId === paperId;
      });
      if (paperData == null) {
        await wkPaper.add(jsonPaper);
      } else {
        await wkPaper.delete({ paperId: paperData.paperId });
        await wkPaper.add(jsonPaper);
      }
      // 1.需保存隐患项的文书：现场检查笔录1、现场处理决定书2、立案决定书4、
      // 调查取证笔录5、案件处理呈报书36、行政处罚告知书6、行政处罚决定书8
      let docTypeNo = this.$parent.docData.docTypeNo
      if (docTypeNo === '1' || docTypeNo === '2' || docTypeNo === '4' || docTypeNo === '5'
        || docTypeNo === '36' || docTypeNo === '6' || docTypeNo === '8') {
        // 2.根据paperData.paperId检索wkDanger中的隐患项，如果已存在则删除重新添加，如果未存在则直接添加
        // 删除原隐患项
        let wkDanger = db.table("wkDanger")
        let wkDangerList = await wkDanger.findAll(item => item.paperId === paperId)
        if (wkDangerList.length > 0) {
          wkDangerList.map(item => {
            wkDanger.delete({dangerId: item.dangerId})
          })
        }
        // 添加隐患项
        let companyOrPerson = ''
        if (docTypeNo === '8') {
          companyOrPerson = this.$parent.letData.cellIdx4
        }
        let dangerList = this.$parent.letData.dangerItemObject.tableData
        // 遍历隐患项，
        let arrDocDanger = []
        dangerList.map(item => {
          arrDocDanger.push({
            dangerId: getNowTime() + randomString(18), // 客户端生产的隐患唯一id
            paperId: paperId,
            remoteId: '', //服务器端生成的id
            dangerCate: item.categoryCode,
            dangerItemId: item.itemCode, //"7101000033",
            dangerContent: item.itemContent, // "煤矿建设项目未按规定进行安全预评价和安全验收评价，逾期未改正的。"
            dangerLocation: '', //违法违规及隐患位置
            dangerStatus: item.status, //违法违规及隐患状态
            detectTime: getNowFormatTime(),  //发现时间：2021-06-24 15:48:54
            delFlag: saveFlag,
            isHigh: item.isSerious, //是否重大隐患：[0|1]
            personId: this.$store.state.user.userId, //"7101000033",
            personName: '', //"发现人编号：beba494c4b67435f93e5fdfbe440e18e",
            personIds: '', //"发现人编号多选：以逗号分隔",
            personNames: '', //"隐患发现人多选：以逗号分隔",
            rectifyTerm: '', //"整改期限",
            solveTime: '', //"隐患消解时间",
            solveMethod: '', //"整改落实措施",
            checkTime: '', //"整改核查时间",
            checkPerson: '', //"整改核查人",
            subitemCode: '', //"违法违规自由裁量序号",
            subitemContent: item.itemContent, //"违法违规内容：煤矿建设项目未按规定进行安全预评价和安全验收评价，逾期未改正的。",
            subitemPenalty: item.penaltyDesc, //"违法违规行政处罚决定：逾期未改正的，处五十万元以上一百万元以下的罚款，对其直接负责的主管人员和其他直接责任人员处二万元以上五万元以下的罚款。",
            subitemPenaltyBasis: item.penaltyBasis, //"行政处罚依据：《中华人民共和国安全生产法》第二十九条，第九十五条第一项",
            penaltyDescFine: item.penaltyDescFine, // 罚金
            penaltyOrg: companyOrPerson === '单位', //"对单位的处罚",
            penaltyOrgFine: companyOrPerson === '单位' ? item.penaltyDescFine : null, //"单位罚金",
            penaltyPerson: companyOrPerson === '个人', //"对个人的处罚",
            penaltyPersonFine: companyOrPerson === '个人' ? item.penaltyDescFine : null, //"个人罚金",
            itemOnsiteType: item.onsiteType, //"现场处理类型",
            itemOnsiteBasis: item.onsiteBasis, //"现场决定依据：《中华人民共和国安全生产法》第九十五条第一项",
            onsiteContent: item.onsiteDesc, //"现场处理内容：责令停止建设责令停止作业、限X日内改正",
            verNo: null, //"版本号：null",
            basisContent: item.confirmBasis, //"认定：《中华人民共和国安全生产法》第二十九条；《煤矿建设项目安全设施监察规定》第九条",
            name: null,
            onsiteType: item.onsiteType, //"现场处理类型",
            penaltyType: companyOrPerson, //"行政处罚类型：单位、个人",
            changeDangerType: item.categoryCode, //"更改后隐患类别：710100",
            showIndex: item.order, //"隐患顺序：1",
            isCheck: item.isReview, //"是否需要复查0不需要1需要",
            dangerParentId: null, //"隐患父id：null",
            isCommon: null, //"是否为其他隐患（自定义隐患传1）：null",
            deviceNum: item.deviceNum, //"设备台数：默认为空",
            coalingFace: item.coalingFace, //"采煤工作面：3",
            headingFace: item.headingFace, //"掘进工作面：6",
            dangerCorrected: null, //"隐患整改情况(0未整改，1已整改）：null",
            reviewUnitId: null, //"复查单位id：null",
            reviewUnitName: null, //"复查单位名称：null",
          })
        })
        await wkDanger.addMany(arrDocDanger)
      }
      await db.close();
      let mes = saveFlag === "2" ? "保存" : "归档";
      this.$message.success(
        `“${this.docData.docTypeName}”文书已经${mes}完毕。`
      );
      await saveToUpload(paperId, this.$store.state.user.userSessId);
      // 返回列表并刷新
      this.cmdDocBack();
    },
    cmdDocView() {
      // 打印预览
      // 如果打印为22检查方案，另外打印检查分工明细表
      let printDiv = this.$slots.left[0].elm;
      this.$print(printDiv);
    },
    commandFill(key, dataKey, title, type, value, options) {
      // 文书各个字段点击打开左侧弹出编辑窗口
      // key为文书数据letData中的的键值
      // dataKey为文书数据letData保存回显的键值主要用来特殊保存隐患的
      // title为el-drawer右侧弹出框的title
      // type为编辑窗口let-drawer内打开编辑的组件名
      // value为回显值
      // options为各组件所需的其他内容：比如选择框的选项等
      this.visible = true;
      this.selectedData = {
        type,
        key,
        dataKey,
        title,
        value,
        corpData: this.corpData,
        options,
      };
    },
    handleClose() {
      // 关闭左侧编辑窗口
      this.selectedData = {
        key: null,
        dataKey: null,
        type: null,
        title: null,
        value: null,
        options: null,
      };
      this.visible = false;
    },
    handleSave(params) {
      // 点击确定，保存左侧弹出窗口中的数据至文书数据中
      // params为保存的数据
      let { key, dataKey, type, options } = this.selectedData;
      // 保存反显数据
      this.$parent.letData[dataKey] = params.value;
      // 处理反显数据，保存一份paperContent通用文本数据
      this.$set(
        this.$parent.letData,
        key,
        this.functions[`set${type}`](
          this.$parent.letData[dataKey],
          this.selectedData,
          options
        )
      );
      this.handleClose();
    },
  },
};
</script>

<style lang="scss" scoped>
.let-main {
  display: flex;
  padding: 0px 12px;
  height: 100%;
  .let-main-left {
    flex: 1;
    height: calc(100vh - 102px);
    overflow: auto;
  }
  .let-main-right {
    width: 320px;
    height: calc(100vh - 102px);
    vertical-align: top;
    background-color: #ffffff;
    border: solid 1px #093a83;
    border-radius: 10px;
  }
  .btnTool {
    cursor: pointer;
    color: #fff;
  }
}
/* 应用这个样式的在打印时隐藏 */
.noPrint {
  display: none;
}

/* 应用这个样式的，从那个标签结束开始另算一页，之后在遇到再起一页，以此类推 */
.page-break {
  page-break-after: always;
}
@page {
  margin: 20px 2.6mm 3.5mm 2.8mm;
}

@media print {
  .header-test,.header,
  .footer-test,.footer {
    height:100px;
  }
  .header-test {
    position:fixed;
    top:0;
  }
  .footer-test {
    position:fixed;
    bottom:0;
  }
  thead {
    display: table-header-group;
  }
  tfoot {
    display: table-footer-group;
  }
  // -------分界线(上面就可以实现每页上都有页眉页脚了)-------------
  #printtest {
    display:none;
  }
  .header-test,.footer-test {
    display:block;
  }
}
// 网页上隐藏自定义的页眉页脚，打印时才显示
@media screen {
  #printtest {
    display:block;
  }
  .header-test,.footer-test {
    display:none;
  }
}
</style>


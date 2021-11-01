<!-- 文书 样式总框架组件 -->
<template>
  <div class="let-main">
    <div class="let-main-left">
      <!-- 左侧文书组件 -->
      <slot name="left" ref="letLeft"></slot>
    </div>
    <div class="let-main-right" id="toolContainer">
      <table
        style="width:100%;height:110px;background-color:#CBE6FF;border-top-left-radius: 10px;border-top-right-radius: 10px; "
      >
        <tr>
          <td style="width:100px;text-align:center; cursor: pointer; " @click="cmdDocSave('2')">
            <svg t="1631779691085" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4637" width="40" height="40"><path d="M919.466667 264.533333V832c0 46.933333-38.4 85.333333-85.333334 85.333333h-640c-46.933333 0-85.333333-38.4-85.333333-85.333333V192c0-46.933333 38.4-85.333333 85.333333-85.333333h567.466667c6.4 0 10.666667 2.133333 14.933333 6.4l136.533334 136.533333c4.266667 4.266667 6.4 8.533333 6.4 14.933333z" fill="#1890FF" p-id="4638"></path><path d="M322.133333 106.666667h384v213.333333h-384zM258.133333 640h512v277.333333h-512z" fill="#FFFFFF" p-id="4639"></path><path d="M599.466667 149.333333h64v128h-64zM364.8 725.333333h298.666667v21.333334h-298.666667zM364.8 810.666667h298.666667v21.333333h-298.666667z" fill="#69C0FF" p-id="4640"></path></svg>
            <span style="color: #409EFF; display:block;font-size:14px;font-weight: bold;">保 存</span>
          </td>
          <td style="width:100px;text-align:center;cursor: pointer;" @click="cmdDocView" >
            <svg t="1631780488186" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9060" width="35" height="35"><path d="M639.275142 627.677407c-9.898067-1.399727-19.696153 1.099785-27.694591 7.198594-16.496778 12.497559-19.796134 36.092951-7.398555 52.689709 5.998828 7.998438 14.79711 13.197422 24.695176 14.597149 9.898067 1.399727 19.696153-1.199766 27.694591-7.198594 16.496778-12.497559 19.796134-36.092951 7.398555-52.689709-6.098809-7.998438-14.79711-13.197422-24.695176-14.597149z m15.796914 36.192931c-2.599492 2.599492-6.29877 4.19918-9.998047 4.19918-3.799258 0-7.398555-1.499707-9.998047-4.19918-2.699473-2.699473-4.19918-6.29877-4.19918-9.998047 0-3.799258 1.499707-7.398555 4.19918-9.998048 2.599492-2.699473 6.29877-4.19918 9.998047-4.19918s7.398555 1.499707 9.998047 4.19918c2.699473 2.599492 4.19918 6.29877 4.19918 9.998048s-1.499707 7.398555-4.19918 9.998047z" fill="#1890FF" p-id="9061"></path><path d="M634.076157 597.583285c-68.786565 0-115.177504 47.990627-131.17438 67.386838 15.996876 19.296231 62.587776 67.386839 131.17438 67.386839 68.486624 0 115.077524-48.090607 131.0744-67.386839-15.996876-19.396212-62.587776-67.386839-131.0744-67.386838z m35.293107 114.37766c-10.297989 7.798477-22.495606 11.897676-35.193127 11.897676-2.799453 0-5.498926-0.199961-8.298379-0.599882-15.496973-2.19957-29.294278-10.297989-38.692443-22.895529-19.396212-25.994923-14.197227-62.987698 11.597735-82.48389 12.497559-9.498145 27.994532-13.497364 43.491506-11.297793 15.496973 2.19957 29.294278 10.297989 38.692443 22.895528 19.396212 25.994923 14.197227 62.987698-11.597735 82.48389z" fill="#1890FF" p-id="9062"></path><path d="M883.827377 0.199961H139.972662C62.687756 0.199961 0 62.787737 0 140.172623v743.854715c0 77.284905 62.687756 139.972662 139.972662 139.972662h743.854715c77.284905 0 139.972662-62.687756 139.972662-139.972662v-743.854715c0-77.384886-62.687756-139.972662-139.972662-139.972662z m-309.539543 831.837532H257.649678c-16.796719 0-30.494044-12.297598-30.494044-29.094318V222.656512c0-16.796719 13.597344-30.494044 30.494044-30.494044h432.915446c16.796719 0 31.79379 13.597344 31.79379 30.494044v307.739895c0 16.796719-13.597344 30.494044-30.494044 30.494044s-30.494044-13.597344-30.494044-30.494044V253.150557H288.143722v517.898847h286.144112c16.796719 0 30.494044 13.597344 30.494045 30.494045 0 16.796719-13.697325 30.494044-30.494045 30.494044zM340.933411 501.801992c-8.49834 0-15.396993-6.898653-15.396992-15.396993s6.898653-15.396993 15.396992-15.396993h277.645773c8.49834 0 15.396993 6.898653 15.396993 15.396993s-6.898653 15.396993-15.396993 15.396993H340.933411z m154.069909 66.786955c0 8.49834-6.898653 15.396993-15.396993 15.396993H342.033197c-8.49834 0-15.396993-6.898653-15.396993-15.396993s6.898653-15.396993 15.396993-15.396992h137.57313c8.49834 0 15.396993 6.898653 15.396993 15.396992z m123.575864-148.970904H340.933411c-8.49834 0-15.396993-6.898653-15.396992-15.396992s6.898653-15.396993 15.396992-15.396993h277.645773c8.49834 0 15.396993 6.898653 15.396993 15.396993s-6.898653 15.396993-15.396993 15.396992z m0-82.383909H340.933411c-8.49834 0-15.396993-6.898653-15.396992-15.396993s6.898653-15.396993 15.396992-15.396993h277.645773c8.49834 0 15.396993 6.898653 15.396993 15.396993 0.09998 8.49834-6.898653 15.396993-15.396993 15.396993zM794.844757 672.86858c-2.399531 3.599297-60.088264 87.882835-160.7686 87.882836-100.680336 0-158.369069-84.283538-160.7686-87.882836-3.199375-4.799063-3.199375-10.997852 0-15.796914 2.399531-3.599297 60.088264-87.882835 160.7686-87.882836 100.680336 0 158.369069 84.283538 160.7686 87.882836 3.199375 4.699082 3.199375 10.997852 0 15.796914z" fill="#1890FF" p-id="9063"></path></svg>
            <span style="color: #409EFF; display:block;font-size:14px;margin-top:5px;font-weight: bold;"> 打印预览</span>
            <!-- <a class="btnTool" href="javascript:cmdDocView()">打印预览</a> -->
          </td>
          <td style="width:100px;text-align:center;cursor: pointer;" @click="exportTemplate">
            <svg t="1632967972260" class="icon" viewBox="0 0 1152 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4406" width="38" height="38"><path d="M768 243.8c0-12.6-5-24.8-14-33.8L558.2 14c-9-9-21.2-14-34-14H512v256h256v-12.2zM384 672v-64c0-17.68 14.32-32 32-32h352V320H496c-26.4 0-48-21.6-48-48V0H48C21.4 0 0 21.4 0 48v928c0 26.6 21.4 48 48 48h672c26.6 0 48-21.4 48-48V704H416c-17.68 0-32-14.32-32-32z m758.1-56.04l-191.4-192.86c-20.12-20.28-54.72-6.02-54.72 22.54V576H768v128h127.98v130.36c0 28.56 34.58 42.82 54.72 22.54l191.4-192.84c13.2-13.32 13.2-34.8 0-48.1z" fill="#1890FF" p-id="4407"></path></svg>
            <span style="color: #409EFF; display:block;font-size:14px;font-weight: bold;"> 导 出</span>
          </td>
          <td style="width:100px;text-align:center;cursor: pointer;" @click="cmdDocSave('0')">
            <svg t="1631780752712" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10822" width="40" height="40"><path d="M59.6 513.2h166l44.6 93.8c17.8 37.4 55.6 61.2 97 61.2h300.6c41.6 0 79.4-24 97.2-61.4l44-93.4h162.8c14.2 0 27.8 5.6 38 15.8 10 10 15.8 23.8 15.8 38v268.2c0 28.4-11.4 55.8-31.4 75.8a107.016 107.016 0 0 1-75.8 31.4H113.2c-28.4 0-55.8-11.4-75.8-31.4C17.4 890.8 6 863.6 6 835V566.8c0-29.6 24-53.6 53.6-53.6z m0 0" fill="#1890FF" p-id="10823"></path><path d="M864.4 464h-88.2l-21 77.2c-12.8 46.8-55.2 79.2-103.6 79.2H387.2c-51 0-95-36-105.2-86L267.8 464H167V137.6c0-14.2 5.6-27.8 15.8-38 10-10 23.8-15.8 38-15.8H811c29.6 0 53.6 24 53.6 53.6V464zM442 362.8c-10.6 0-20.2 6.2-24.6 16-4.2 9.8-2.4 21 4.6 28.8l93.4 103 93.4-103c7.2-7.8 9-19.2 4.6-28.8-4.2-9.8-14-16-24.6-16h-40V178.2h-67V363H442z" fill="#1890FF" p-id="10824"></path></svg>
            <span style="color: #409EFF; display:block;font-size:14px;font-weight: bold;"> 归 档</span>
          </td>
          <td style="width:100px;text-align:center;cursor: pointer;" @click="cmdDocBack">
            <svg t="1631780901791" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19598" width="40" height="40"><path d="M512 93.090909a418.443636 418.443636 0 0 0-418.909091 418.909091c0 231.703273 187.205818 418.909091 418.909091 418.909091s418.909091-187.205818 418.909091-418.909091-187.205818-418.909091-418.909091-418.909091z m-32.721455 163.653818h65.44291v209.454546h-65.44291v-209.454546zM512 767.255273c-129.582545 0-235.659636-106.030545-235.659636-235.613091a233.192727 233.192727 0 0 1 137.495272-213.410909v74.658909c-43.194182 31.418182-72.005818 81.128727-72.005818 138.705454A169.844364 169.844364 0 0 0 512 701.858909a169.844364 169.844364 0 0 0 170.170182-170.170182c0-57.623273-28.811636-107.333818-72.005818-138.752V318.277818a234.589091 234.589091 0 0 1 137.495272 213.364364A235.52 235.52 0 0 1 512 767.255273z" fill="#1890FF" p-id="19599"></path></svg>
            <span style="color: #409EFF; display:block;font-size:14px;font-weight: bold;"> 返 回</span>
            <!-- <a class="btnTool" href="javascript:cmdDocBack()">返回</a> -->
          </td>
        </tr>
      </table>
      <h3 v-if="corpData" class="uk-card-title" style="padding:10px;">执法对象</h3>
      <table v-if="corpData" style="border-collapse:collapse;margin:0 auto;margin:0px 10px;width: 90%;" id="rightSideCorp">
        <tr style="height:32px;">
          <td style="border-bottom: 1px solid #666;" colspan="2">{{ corpData.corpName }}</td>
        </tr>
        <tr style="height:32px;">
          <td style="width:80px;border-bottom:1px solid #666;">企业类型：</td>
          <td style="border-bottom: 1px solid #666;">{{ corpData.corpTypeName }}</td>
        </tr>
        <tr style="height:32px;">
          <td style="width:80px;border-bottom:1px solid #666;">所在区域：</td>
          <td style="border-bottom:1px solid #666;">{{ corpData.corpCountryName }}</td>
        </tr>
        <tr style="height:32px;">
          <td style="width:80px;border-bottom:1px solid #666;">经营地址：</td>
          <td style="border-bottom:1px solid #666;">{{ corpData.address }}</td>
        </tr>
        <tr style="height:32px;">
          <td style="width:80px;border-bottom:1px solid #666;">负&nbsp;&nbsp;责&nbsp;&nbsp;人：</td>
          <td style="border-bottom:1px solid #666;">{{ corpData.legalName }}</td>
        </tr>
        <tr style="height:32px;">
          <td style="width:80px;border-bottom:1px solid #666;">联系电话：</td>
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
import docxtemplater from 'docxtemplater'
import JSZipUtils from 'jszip-utils'
import { saveAs } from 'file-saver'
import pizzip from 'pizzip'
import {
  setTextItem,
  setCheckItem,
  setDaterangeItem,
  setTextareaItem,
  setCheckPositionItem,
  setCheckTable,
  setDateItem,
  setDangerTable,
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
        setCheckTable,
        setDateItem,
        setDangerTable,
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
      console.log('curCase', this.$store.state.curCase)
      this.$emit("go-back", { page: "writFlow", data: this.$store.state.curCase });
    },
    async cmdDocSave(saveFlag = "2") {
      // 保存或归档文书
      // 判断当前文书是否已经归档，如已归档则不可保存或归档
      if (this.canEdit) {
        // 如果是归档时增加确认逻辑：
        if (saveFlag === '0') {
          await this.$confirm('是否确认已经完成文书的填写，归档后将不能再次编辑或者保存', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(async () => {
            await this.savePaper(saveFlag)
          }).catch(() => {})
        } else {
          await this.savePaper(saveFlag)
        }
      } else {
        this.$message.error('文书已经完成归档，不能再次保存或回档！')
      }
    },
    async savePaper (saveFlag) {
      let paperId = this.editData && this.editData.paperId
        ? this.editData.paperId
        : getNowTime() + randomString(18);
      let createDate = this.editData && this.editData.createDate
        ? this.editData.createDate
        : getNowFormatTime();
      let createTime = this.editData && this.editData.createTime
        ? this.editData.createTime
        : getNowFormatTime();
      let htmlPage = this.$slots.left[0].elm.innerHTML
      if (this.docData.docTypeNo === '22') {
        // 检查方案时增加分工明细表
        htmlPage = this.$slots.left[0].elm.innerHTML.replace('style="height: 0px; overflow: hidden;"', '')
      }
      let page = createHtml(htmlPage, this.corpData);
      // 处理隐患整改特殊文书逻辑
      if (this.docData.docTypeNo === '44') {
        console.log ('this', this.$parent.letData)
      }
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
        caseId: this.corpData && this.corpData.caseId ? this.corpData.caseId : '',
        caseType: "",
        corpId: this.corpData && this.corpData.corpId ? this.corpData.corpId : '',
        corpName: this.corpData && this.corpData.corpName ? this.corpData.corpName : '',
        planId: this.corpData && this.corpData.planId ? this.corpData.planId : '',
      };
      const db = new GoDB(this.DBName);
      const wkPaper = db.table("wkPaper");
      // 如果保存的是已编辑的 那么保存的同时要把上一条重复的数据删除（修改为直接更新数据库）
      const paperData = await wkPaper.find((item) => {
        return item.paperId === paperId && item.delFlag !== '1';
      });
      if (paperData == null) {
        await wkPaper.add(jsonPaper);
      } else {
        await wkPaper.delete({ paperId: paperData.paperId });
        await wkPaper.add(jsonPaper);
        // Object.assign(paperData, jsonPaper)
        // await wkPaper.put(paperData);
      }
      // 1.需保存隐患项的文书：现场检查笔录1、现场处理决定书2、立案决定书4、
      // 调查取证笔录5、案件处理呈报书36、行政处罚告知书6、行政处罚决定书8、
      // 隐患整改44
      let docTypeNo = this.$parent.docData.docTypeNo
      if (docTypeNo === '1' || docTypeNo === '2' || docTypeNo === '4' || docTypeNo === '5'
        || docTypeNo === '36' || docTypeNo === '6' || docTypeNo === '8' || docTypeNo === '44') {
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
        let dangerList = this.$parent.letData.DangerTable.tableData
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
            dangerCorrected: item.dangerCorrected ? item.dangerCorrected : null, //"隐患整改情况(0未整改，1已整改）：null",
            reviewUnitId: item.reviewUnitId ? item.reviewUnitId : null, //"复查单位id：null",
            reviewUnitName: item.reviewUnitName ? item.reviewUnitName : null, //"复查单位名称：null",
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
      if (options && options.saveDataKey) {
        // 特殊保存（不保存在letData中，而是保存在letData的cellIdx中，比如let219 延期（分期）缴纳罚款决定书）
        let {saveDataKey, saveDataIndex} = options
        this.$set(
          this.$parent.letData[saveDataKey][saveDataIndex],
          dataKey,
          params.value
        );
      } else {
        // 通用保存
        // 保存反显数据
        // 处理反显数据，保存一份paperContent通用文本数据
        this.$parent.letData[dataKey] = params.value;
        this.$set(
          this.$parent.letData,
          key,
          this.functions[`set${type}`](
            this.$parent.letData[dataKey],
            this.selectedData,
            options
          )
        );
      }
      this.handleClose();
    },
    exportTemplate () {
      // 导出模板
      // 遍历导出的数据，处理undefined情况
      let exportData = {}
      for (let key in this.$parent.letData) {
        exportData[key] = this.$parent.letData[key] ? this.$parent.letData[key] : ''
      }
      if (this.docData.docTypeNo === '22' || this.docData.docTypeNo === '42') {
        // 检查方案导出时增加检查人员分工明细表
        if (this.$parent.letData.checkTable && this.$parent.letData.checkTable.tableData) {
          let {tableData} = this.$parent.letData.checkTable
          // 遍历tableData数据，处理undefined情况
          tableData && tableData.forEach(item => {
            for (let key in item) {
              item[key] = item[key] ? item[key] : ''
            }
          })
          Object.assign(exportData, {
            tableData: tableData
          }) 
        }
      } else if (this.docData.docTypeNo === '23' || this.docData.docTypeNo === '25' || this.docData.docTypeNo === '32' || this.docData.docTypeNo === '34') {
        // 抽样取证通知书导出时增加抽样取证清单||先行登记保存证据通知书 || 查封（扣押）决定书 || 解除查封（扣押）决定书
        let {tableData, signature, signDate, otherEvidence, lawSignature, lawSignDate, places} = this.$parent.letData.SamplingForensicsTable
        // 遍历tableData数据，处理undefined情况
        tableData && tableData.forEach(item => {
          for (let key in item) {
            item[key] = item[key] ? item[key] : ''
          }
        })
        Object.assign(exportData, {
          tableData: tableData,
          tabelOtherEvidence: otherEvidence ? otherEvidence : '',
          tabelSignature: signature ? signature : '',
          tabelSignDate: signDate ? signDate : '',
          tabelLawSignature: lawSignature ? lawSignature : '',
          tabelLawSignDate: lawSignDate ? lawSignDate : '',
          tabelPlaces: places ? places : ''
        }) 
      } else if (this.docData.docTypeNo === '55') {
        // 鉴定委托书遍历tableData数据，处理undefined情况
        this.$parent.letData.cellIdx5 && this.$parent.letData.cellIdx5.forEach(item => {
          for (let key in item) {
            item[key] = item[key] ? item[key] : ''
          }
        })
      } else if (this.docData.docTypeNo === '15') {
        // 执法案卷首页导出时增加档案卷内目录
        Object.assign(exportData, {
          tableData: this.$parent.letData.volumesMenuTable.tableData
        }) 
      }
      if (this.docData.docTypeNo === '5' || this.docData.docTypeNo === '13' || this.docData.docTypeNo === '27'
        || this.docData.docTypeNo === '30' || this.docData.docTypeNo === '7' || this.docData.docTypeNo === '14'
        || this.docData.docTypeNo === '55' || this.docData.docTypeNo === '31' || this.docData.docTypeNo === '10'
        || this.docData.docTypeNo === '11' || this.docData.docTypeNo === '12') {
        // 大文本换行问题解决：通过获取大文本中的\n换行符，截取字符串形成数组，将数组转换为doc文本实现换行效果
        // 需要处理的文书：调查询问笔录cellIdx21;复查意见书cellIdx15;先行登记保存证据处理决定书cellIdx14;
        // 需要处理的文书：陈述申辩笔录cellIdx21;听证笔录cellIdx10;案件结案报告cellIdx0;鉴定委托书cellIdx6
        let cellIdxExtraTextarea = []
        let key = ''
        switch (this.docData.docTypeNo) {
          case '5': 
            key = 'cellIdx21'
            break;
          case '13':
            key = 'cellIdx15'
            break;
          case '27':
            key = 'cellIdx14'
            break;
          case '30':
            key = 'cellIdx21'
            break;
          case '7':
            key = 'cellIdx10'
            break;
          case '14':
            key = 'cellIdx0'
            break;
          case '55':
            key = 'cellIdx6'
            break;
          case '31':
            key = 'cellIdx13'
            break;
          case '10':
            key = 'cellIdx14'
            break;
          case '11':
            key = 'cellIdx18'
            break;
          case '12':
            key = 'cellIdx10'
            break;
        }
        exportData[key].split('\n').map(item => {
          cellIdxExtraTextarea.push({
            text: item
          })
        })
        Object.assign(exportData, {
          cellIdxExtraTextarea
        }) 
      }
      // 因备注为特殊注脚形式，docx不能替换其中变量，当前临时处理为多模板，因此增加以下判断逻辑
      let docName = ''
      if(this.docData.docTypeNo === '32' || this.docData.docTypeNo === '37' || this.docData.docTypeNo === '38'
        || this.docData.docTypeNo === '45' || this.docData.docTypeNo === '46' || this.docData.docTypeNo === '6'
        || this.docData.docTypeNo === '8' || this.docData.docTypeNo === '50' || this.docData.docTypeNo === '51'
        || this.docData.docTypeNo === '53'|| this.docData.docTypeNo === '39' || (this.docData.docTypeNo === '28' && this.$store.state.user.userType !== 'supervision')
        || this.docData.docTypeNo === '41'|| this.docData.docTypeNo === '12') {
        // 需要分别替换的模板为：查封（扣押）决定书;停供电(停供民用爆炸物品)函告书;解除停供电(停供民用爆炸物品)函告书;
        // 需要分别替换的模板为：延长查封（扣押）期限决定书；查封（扣押）处理决定书;
        // 需要分别替换的模板为：行政处罚告知书；行政处罚决定书；罚款缴纳催告书；加处罚款决定书；
        // 需要分别替换的模板为：行政强制执行事先催告书；
        let { selectedType } = this.$parent.letData
        if (selectedType === '查封' || selectedType === '停供电' || selectedType === '解除停供电' || selectedType === '单位') {
          docName = this.docData.docTypeNo + '-1'
        } else if (selectedType === '扣押' || selectedType === '停供民用爆炸物品' || selectedType === '解除停供民用爆炸物品' || selectedType === '个人'){
          docName = this.docData.docTypeNo + '-2'
        }
      } else if (this.docData.docTypeNo === '52') {
        // 特殊处理（取值不是selectedType）：延期（分期）缴纳罚款决定书；
        if (this.$parent.letData.cellIdx39 === '单位') {
          docName = this.docData.docTypeNo + '-1'
        } else if (this.$parent.letData.cellIdx39 === '个人') {
          docName = this.docData.docTypeNo + '-2'
        }
      } else {
        docName = this.docData.docTypeNo
      }
      JSZipUtils.getBinaryContent(`./static/docxtemplate/${this.$store.state.user.userType}/doc${docName}.docx`, (error, content) => {
        console.log('error = ', error, content)
        const zip = new pizzip(content)
        const doc = new docxtemplater()
        doc.loadZip(zip)
        doc.setData(exportData)
        try {
          doc.render()
        } catch (error) {
          const e = {
            message: error.message,
            name: error.name,
            stack: error.stack,
            properties: error.properties
          }
          throw error
        }
        const out = doc.getZip().generate({
          type: 'blob',
          mimeType:
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        })
        saveAs(out, `${this.docData.docTypeName}.docx`)
      })
    }
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
// @page {
//   margin: 92.5px 0px 87.5px 0px;
// }
// @page:right {
//   @bottom-center {
//     content: counter(page);
//   }
// }
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


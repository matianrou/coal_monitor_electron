<!-- 执法文书 流程 组件 -->
<template>
  <div>
    <table style="width:100%;border-collapse:collapse;margin:0 auto;">
      <tr>
        <td style="padding:0;">
          <table style="width:495px;border-collapse:collapse;margin-left:10px;" id="tabMenu">
            <tr>
              <td
                :class="activeFlowTab === 'flow-1' ? 'tabMenu tabMenuActive' : 'tabMenu tabMenuNormal'"
                @click="doTabSwitch(1)"
                id="tabMenu-1"
              >
                <span></span>现场检查
              </td>
              <td style="width:5px;"></td>
              <td
                :class="activeFlowTab === 'flow-2' ? 'tabMenu tabMenuActive' : 'tabMenu tabMenuNormal'"
                @click="doTabSwitch(2)"
                id="tabMenu-2"
              >
                <span class="{tab-let-1}"></span>行政处罚
              </td>
              <td style="width:5px;"></td>
              <td
                :class="activeFlowTab === 'flow-3' ? 'tabMenu tabMenuActive' : 'tabMenu tabMenuNormal'"
                @click="doTabSwitch(3)"
                id="tabMenu-3"
              >
                <span class="{tab-let-2}"></span>行政强制
              </td>
              <td style="width:5px;"></td>
              <td
                :class="activeFlowTab === 'flow-4' ? 'tabMenu tabMenuActive' : 'tabMenu tabMenuNormal'"
                @click="doTabSwitch(4)"
                id="tabMenu-4"
              >
                <span class="{tab-let-3}"></span>其他
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="border:solid 2px #093A83;border-collapse:collapse;background-color:#fff;">
          <!-- 现场检查 -->
          <div v-if="activeFlowTab === 'flow-1'" style="padding:16px;">
            <!-- <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />一般检查
            </div> -->
        <fieldset class="borderColor" >
          <legend >一般检查</legend>
          <table style="width: 626px;height:65px;border-collapse: collapse;margin-left:20px">
              <tr class="writ-flow-row">
                <!-- <td style="width:12px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 100%;" />
                </td> -->
                <td :class="flowStatus.paper22 ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper22"
                    :src="flowStatus.paper22 === 'save' ? '' :require( '../assets/image/file.png')"
                    :title="flowStatus.paper22 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let100','检查方案', '22')" class="flow-span">检查方案</span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let100','检查方案', '22')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
                <td :class="flowStatus.paper1 ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper1"
                    :src="flowStatus.paper1 === 'save' ? '' :require('../assets/image/file.png')"
                    :title="flowStatus.paper1 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let101','现场检查记录', '1')" class="flow-span">现场检查记录</span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let101','现场检查记录', '1')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
                <td :class="flowStatus.paper2? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper2"
                    :src="flowStatus.paper2 === 'save' ? '' :require( '../assets/image/file.png')"
                    :title="flowStatus.paper2 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let102','现场处理决定书', '2')" class="flow-span">
                    现场处理
                    <br />决定书
                  </span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let102','现场处理决定书', '2')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 100%;" />
                </td>-->
                <!-- <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper5"
                    :src="require(flowStatus.paper5 === 'save' ? '' : '../assets/image/file.png')"
                    :title="flowStatus.paper5 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let103','责令限期整改指令书', '5')" class="flow-span">
                    责令限期整改
                    <br />指令书
                  </span>
                </td>-->
                <!-- <td style="width:12px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c7.png" style="height: 100%;" />
                </td> -->
                
              </tr>
            </table>
        </fieldset>
            
            <!-- <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />复查
            </div> -->
            <fieldset class="borderColor"  >
          <legend >复查</legend>
            <table style="width: 206px;height:65px;border-collapse: collapse;margin-left:20px">
              <tr class="writ-flow-row">
                <!-- <td style="width:12px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 100%;" />
                </td> -->
                <td :class="flowStatus.paper13? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper13"
                    :src="flowStatus.paper13 === 'save' ? '' :require( '../assets/image/file.png')"
                    :title="flowStatus.paper13 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let104','复查意见书', '13')" class="flow-span">复查意见书</span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let104','复查意见书', '13')"></i>
                </td>
                <!-- <td style="width:12px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c7.png" style="height: 100%;" />
                </td> -->
                
              </tr>
            </table>
            </fieldset>
            <!-- <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />实施检查
            </div> -->
            <fieldset class="borderColor" style="margin-bottom: 0px;">
          <legend >实施检查</legend>
            <table style="width: 1046px;height:65px;border-collapse: collapse; margin-left:20px">
              <tr class="writ-flow-row">
                <!-- <td style="width:12px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 100%;" />
                </td> -->
                <td :class="flowStatus.paper3  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper3"
                    :src="flowStatus.paper3 === 'save' ? '' :require( '../assets/image/file.png')"
                    :title="flowStatus.paper3 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let106','责令撤出作业人员命令书', '3')" class="flow-span">
                    责令撤出作业人员
                    <br />指令书
                  </span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let106','责令撤出作业人员命令书', '3')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
                <td :class="flowStatus.paper23 ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper23"
                    :src="flowStatus.paper23 === 'save' ? '' :require( '../assets/image/file.png')"
                    :title="flowStatus.paper23 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let107','抽样取证通知书', '23')" class="flow-span">抽样取证通知书</span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let107','抽样取证通知书', '23')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
                <td :class="flowStatus.paper25  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper25"
                    :src="flowStatus.paper25 === 'save' ? '' :require( '../assets/image/file.png')"
                    :title="flowStatus.paper25 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let108','先行登记保存证据通知书', '25')" class="flow-span">
                    先行登记保存证据
                    <br />通知书
                  </span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let108','先行登记保存证据通知书', '25')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
                <td :class="flowStatus.paper27  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper27"
                    :src="flowStatus.paper27 === 'save' ? '' :require( '../assets/image/file.png')"
                    :title="flowStatus.paper27 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let109','先行登记保存证据处理决定书', '27')" class="flow-span">
                    先行登记保存证据
                    <br />处理决定书
                  </span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let109','先行登记保存证据处理决定书', '27')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
                <td :class="flowStatus.paper32 ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper32"
                    :src="flowStatus.paper32 === 'save' ? '' : require('../assets/image/file.png')"
                    :title="flowStatus.paper32 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let110','查封（扣押）决定书', '32')" class="flow-span">
                    查封(扣押)
                    <br />决定书
                  </span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let110','查封（扣押）决定书', '32')"></i>
                </td>
                <!-- <td style="width:12px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c7.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
              </tr>
            </table>
            <br />
            
            <table style="width: 1046px;height:65px;border-collapse: collapse;margin-left:20px">
              <tr class="writ-flow-row">
                
                <!-- <td style="width:12px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 100%;" />
                </td> -->
                <td :class="flowStatus.paper45 ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper45"
                    :src="flowStatus.paper45 === 'save' ? '' :require( '../assets/image/file.png')"
                    :title="flowStatus.paper45 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let114','延长查封（扣押）期限决定书', '45')" class="flow-span">
                    延长查封（扣押）
                    <br />期限决定书
                  </span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let114','延长查封（扣押）期限决定书', '45')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
                <td :class="flowStatus.paper46  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper46"
                    :src="flowStatus.paper46 === 'save' ? '' :require( '../assets/image/file.png')"
                    :title="flowStatus.paper46 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let115','查封(扣押)处理决定书', '46')" class="flow-span">
                    查封(扣押)处理
                    <br />决定书
                  </span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let115','查封(扣押)处理决定书', '46')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
                <td :class="flowStatus.paper56  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper56"
                    :src="flowStatus.paper56 === 'save' ? '' : require('../assets/image/file.png')"
                    :title="flowStatus.paper56 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let111','停供电(停供民用爆炸物品)决定书', '56')" class="flow-span">
                    停供电(停供民用
                    <br />爆炸物品)决定书
                  </span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let111','停供电(停供民用爆炸物品)决定书', '56')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
                <td :class="flowStatus.paper37 ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper37"
                    :src="flowStatus.paper37 === 'save' ? '' : require('../assets/image/file.png')"
                    :title="flowStatus.paper37 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let112','停供电(停供民用爆炸物品)函告书', '37')" class="flow-span">
                    停供电(停供民用
                    <br />爆炸物品)函告书
                  </span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let112','停供电(停供民用爆炸物品)函告书', '37')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
                <td :class="flowStatus.paper38  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper38"
                    :src="flowStatus.paper38 === 'save' ? '' :require( '../assets/image/file.png')"
                    :title="flowStatus.paper38 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let113','解除停供电(停供民用爆炸物品)函告书', '38')" class="flow-span">
                    解除停供电(停供民用
                    <br />爆炸物品)函告书
                  </span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let113','解除停供电(停供民用爆炸物品)通知书', '38')"></i>
                </td>
                <!-- <td style="width:12px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c7.png" style="height: 100%;" />
                </td> -->
              </tr>
            </table>
            </fieldset>

          </div>
          <!-- 行政处罚 -->
          <div v-else-if="activeFlowTab === 'flow-2'" style="padding:16px;">
            <!-- <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />一般程序
            </div> -->
            <fieldset class="borderColor" >
          <legend >一般程序</legend>
            <table style="width: 836px;height:65px;border-collapse: collapse;margin-left:20px">
              <tr class="writ-flow-row">
                <!-- <td style="width:12px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 100%;" />
                </td> -->
                <td :class="flowStatus.paper4 ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper4"
                    :src="flowStatus.paper4 === 'save' ? '' :require( '../assets/image/file.png')"
                    :title="flowStatus.paper4 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let201','立案决定书', '4')" class="flow-span">立案决定书</span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let201','立案决定书', '4')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
                <td :class="flowStatus.paper5  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper5"
                    :src="flowStatus.paper5 === 'save' ? '' : require('../assets/image/file.png')"
                    :title="flowStatus.paper5 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let202','调查询问笔录', '5')" class="flow-span">调查询问笔录</span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let202','调查询问笔录', '5')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
                <td :class="flowStatus.paper47  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper47"
                    :src="flowStatus.paper47 === 'save' ? '' :require( '../assets/image/file.png')"
                    :title="flowStatus.paper47 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let203','行政执法决定法制审核意见书', '47')" class="flow-span">
                    行政执法决定法制
                    <br />审核意见书
                  </span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let203','行政执法决定法制审核意见书', '47')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
                <td :class="flowStatus.paper48  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper48"
                    :src="flowStatus.paper48 === 'save' ? '' :require( '../assets/image/file.png')"
                    :title="flowStatus.paper48 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let215','集体讨论记录', '48')" class="flow-span">集体讨论记录</span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let215','集体讨论记录', '48')"></i>
                </td>
                <td class="arrows">  
                  →
                </td>
                <!-- <td style="width:12px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c6.png" style="height: 100%;" />
                </td> -->
              </tr>
              <br />
              <tr class="writ-flow-row">
                <!-- <td style="width:12px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 100%;" />
                </td> -->
                
                <td :class="flowStatus.paper36  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper36"
                    :src="flowStatus.paper36 === 'save' ? '' : require('../assets/image/file.png')"
                    :title="flowStatus.paper36 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let216','案件处理呈报书', '36')" class="flow-span">案件处理呈报书</span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let216','案件处理呈报书', '36')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
                <td :class="flowStatus.paper6  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper6"
                    :src="flowStatus.paper6 === 'save' ? '' : require('../assets/image/file.png')"
                    :title="flowStatus.paper6 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let204','行政处罚告知书', '6')" class="flow-span">行政处罚告知书</span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let204','行政处罚告知书', '6')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
                <td :class="flowStatus.paper8  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper8"
                    :src="flowStatus.paper8 === 'save' ? '' :require( '../assets/image/file.png')"
                    :title="flowStatus.paper8 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let206','行政处罚决定书', '8')" class="flow-span">
                    行政处罚决定书
                  </span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let206','行政处罚决定书', '8')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
                <td :class="flowStatus.paper9  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper9"
                    :src="flowStatus.paper9 === 'save' ? '' :require( '../assets/image/file.png')"
                    :title="flowStatus.paper9 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let207','送达收执', '9')" class="flow-span">
                    送达收执
                  </span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let207','送达收执', '9')"></i>
                </td>
                <!-- <td style="width:12px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c6.png" style="height: 100%;" />
                </td> -->
              </tr>
            </table>
            </fieldset>
            <!-- <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />听证程序
            </div> -->
            <fieldset class="borderColor" >
          <legend >听证程序</legend>
            <table style="width: 1046px;height:65px;border-collapse: collapse;margin-left:20px">
              <tr class="writ-flow-row">
                <!-- <td style="width:12px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 100%;" />
                </td> -->
                <td :class="flowStatus.paper57  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper57"
                    :src="flowStatus.paper57 === 'save' ? '' :require( '../assets/image/file.png')"
                    :title="flowStatus.paper57 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let217','询问通知书', '57')" class="flow-span">
                    询问通知书
                  </span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let217','询问通知书', '57')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
                <td :class="flowStatus.paper30 ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper30"
                    :src="flowStatus.paper30 === 'save' ? '' :require( '../assets/image/file.png')"
                    :title="flowStatus.paper30 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let205','陈述申辩笔录', '30')" class="flow-span">陈述申辩笔录</span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let205','陈述申辩笔录', '30')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
                <td :class="flowStatus.paper28  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper28"
                    :src="flowStatus.paper28 === 'save' ? '' :require('../assets/image/file.png')"
                    :title="flowStatus.paper28 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let209','听证通知书', '28')" class="flow-span">
                    听证通知书
                  </span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let209','听证通知书', '28')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
                <td :class="flowStatus.paper29  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper29"
                    :src="flowStatus.paper29 === 'save' ? '' :require( '../assets/image/file.png')"
                    :title="flowStatus.paper29 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let210','不予受理听证申请通知书', '29')" class="flow-span">
                    不予受理听证<br />申请通知书
                  </span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let210','不予受理听证申请通知书', '29')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
                <td :class="flowStatus.paper7  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper7"
                    :src="flowStatus.paper7 === 'save' ? '' :require( '../assets/image/file.png')"
                    :title="flowStatus.paper7 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let211','听证笔录', '7')" class="flow-span">
                    听证笔录
                  </span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let211','听证笔录', '7')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
                <td :class="flowStatus.paper49  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper49"
                    :src="flowStatus.paper49 === 'save' ? '' :require('../assets/image/file.png')"
                    :title="flowStatus.paper49 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let218','听证会报告书', '49')" class="flow-span">
                    听证会报告书
                  </span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let218','听证会报告书', '49')"></i>
                </td>
                <!-- <td style="width:12px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c6.png" style="height: 100%;" />
                </td> -->
              </tr>
            </table>
            </fieldset>
            <!-- <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />案件结案
            </div> -->
            <fieldset class="borderColor" style="margin-bottom: 0px;">
          <legend >案件结案</legend>
            <table style="width: 1046px;height:65px;border-collapse: collapse;margin-left:20px">
              <tr class="writ-flow-row">
                <!-- <td style="width:12px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 100%;" />
                </td> -->
                <td :class="flowStatus.paper50  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper50"
                    :src="flowStatus.paper50 === 'save' ? '' : require('../assets/image/file.png')"
                    :title="flowStatus.paper50 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let212','罚款缴纳催告书', '50')" class="flow-span">
                    罚款缴纳催告书
                  </span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let212','罚款缴纳催告书', '50')"></i>
                </td>
                <td class="arrows">  
                  →
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 100%;" />
                </td> -->
                
                <td :class="flowStatus.paper51  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper51"
                    :src="flowStatus.paper51 === 'save' ? '' :require( '../assets/image/file.png')"
                    :title="flowStatus.paper51 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let220','加处罚款决定书', '51')" class="flow-span">
                    加处罚款决定书
                  </span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let220','加处罚款决定书', '51')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
                <td :class="flowStatus.paper52  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper52"
                    :src="flowStatus.paper52 === 'save' ? '' :require( '../assets/image/file.png')"
                    :title="flowStatus.paper52 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let219','延期（分期）缴纳罚款决定书', '52')" class="flow-span">
                    延期（分期）缴纳<br />罚款决定书
                  </span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let219','延期（分期）缴纳罚款决定书', '52')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
                <td :class="flowStatus.paper14  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper14"
                    :src="flowStatus.paper14 === 'save' ? '' : require('../assets/image/file.png')"
                    :title="flowStatus.paper14 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let213','案件结案报告', '14')" class="flow-span">
                    案件结案报告
                  </span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let213','案件结案报告', '14')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
                <td :class="flowStatus.paper15  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper15"
                    :src="flowStatus.paper15 === 'save' ? '' : require('../assets/image/file.png')"
                    :title="flowStatus.paper15 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let214','执法案卷（首页）及目录', '15')" class="flow-span">
                    执法案卷（首页）<br />及目录
                  </span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let214','执法案卷（首页）及目录', '15')"></i>
                </td>
                <!-- <td style="width:12px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c7.png" style="height: 100%;" />
                </td> -->
              </tr>
            </table>
            </fieldset>
          </div>
          <!-- 行政强制 -->
          <div v-else-if="activeFlowTab === 'flow-3'" style="padding:16px;">
            <!-- <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />行政强制执行
            </div> -->
            <fieldset class="borderColor" style="margin-bottom: 0px;">
          <legend >行政强制执行</legend>
            <table style="width: 626px;height:65px;border-collapse: collapse;margin-left:20px">
              <tr class="writ-flow-row">
                <!-- <td style="width:12px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 100%;" />
                </td> -->
                <td :class="flowStatus.paper53  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper53"
                    :src="flowStatus.paper53 === 'save' ? '' : require('../assets/image/file.png')"
                    :title="flowStatus.paper53 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let309','行政强制执行事先催告书', '53')" class="flow-span">
                    行政强制执行<br />事先催告书
                  </span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let309','行政强制执行事先催告书', '53')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
                <td :class="flowStatus.paper18  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper18"
                    :src="flowStatus.paper18 === 'save' ? '' :require( '../assets/image/file.png')"
                    :title="flowStatus.paper18 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let301','强制执行申请书', '18')" class="flow-span">
                    强制执行
                    <br />申请书
                  </span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let301','强制执行申请书', '18')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
                <td :class="flowStatus.paper54  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper54"
                    :src="flowStatus.paper54 === 'save' ? '' : require('../assets/image/file.png')"
                    :title="flowStatus.paper54 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let310','行政执法有关事项审批报告', '54')" class="flow-span">
                    行政执法有关事项<br />审批报告
                  </span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let310','行政执法有关事项审批报告', '54')"></i>
                </td>
                <!-- <td style="width:12px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c7.png" style="height: 100%;" />
                </td> -->
              </tr>
            </table>
            </fieldset>
          </div>
          <!-- 其他 -->
          <div v-else-if="activeFlowTab === 'flow-4'" style="padding:16px;">
            <!-- <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />其他
            </div> -->
            <fieldset class="borderColor" style="margin-bottom: 0px;">
          <legend >其他</legend>
            <table style="width:626px;height:65px;border-collapse: collapse;margin-left:20px">
              <tr class="writ-flow-row">
                <!-- <td style="width:12px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 100%;" />
                </td> -->
                <td :class="flowStatus.paper19  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper19"
                    :src="flowStatus.paper19 === 'save' ? '' : require('../assets/image/file.png')"
                    :title="flowStatus.paper19 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let401','移送书', '19')" class="flow-span">移送书</span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let401','移送书', '19')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
                <td :class="flowStatus.paper20  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper20"
                    :src="flowStatus.paper20 === 'save' ? '' : require('../assets/image/file.png')"
                    :title="flowStatus.paper20 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let402','涉嫌犯罪案件移送书', '20')" class="flow-span">涉嫌犯罪案件<br />移送书</span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let402','涉嫌犯罪案件移送书', '20')"></i>
                </td>
                <!-- <td style="width:28px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 100%;" />
                </td> -->
                <td class="arrows">  
                  →
                </td>
                <td :class="flowStatus.paper55  ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td' ">
                  <img
                    v-if="flowStatus.paper55"
                    :src="flowStatus.paper55 === 'save' ? '' : require('../assets/image/file.png')"
                    :title="flowStatus.paper55 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let406','鉴定委托书', '55')" class="flow-span">
                    鉴定委托书
                  </span>
                  <i class="el-icon-plus create-icon" title="添加" @click="addPaper('let406','鉴定委托书', '55')"></i>
                </td>
                <!--<td style="width:28px;" class="writ-flow-td"><img src="../assets/image/doc-flow_r1_c3-1.png" style="height: 100%;" /></td>
                <td style="width:182px;background:url(images/doc-flow_r1_c4.png);background-repeat:no-repeat;text-align:center;color:#fff;"><a class="{let-403}" href="#">查封扣押处理<br />决定书</a></td>-->
                <!-- <td style="width:12px;" class="writ-flow-td">
                  <img src="../assets/image/doc-flow_r1_c7.png" style="height: 100%;" />
                </td> -->
              </tr>
            </table>
            </fieldset>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "WritFlow",
  props: {
    corpData: {
      type: Object,
      default: () => {},
    },
    flowStatus: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      activeFlowTab: "flow-1",
    };
  },
  created() {},
  methods: {
    doTabSwitch(tab) {
      // 切换现场检查、行政处罚、行政强制和其他的tab切换
      if (this.activeFlowTab !== `flow-${tab}`)
        this.activeFlowTab = `flow-${tab}`;
    },
    async cmdEditDoc(letId, docTypeName, docTypeNo, isCreated = false) {
      if (this.corpData.caseId) {
        //显示文书模板（制作文书）
        this.$emit("change-page", {
          page: "writFill",
          data: {
            page: letId,
            docData: {
              docTypeNo: docTypeNo,
              docTypeName: docTypeName,
            },
            isCreated
          },
        });
      } else {
        this.$message.error("请在左侧双击该企业,启动该企业的执法检查");
      }
    },
    addPaper(letId, docTypeName, docTypeNo) {
      // 添加文书
      this.$confirm(`是否确定添加新的‘${docTypeName}’文书？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(() => {
          // 进入文书页面,isCreated传true
          this.cmdEditDoc(letId, docTypeName, docTypeNo, true)
        }).catch(() => {
        })
    }
  },
}; 
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main";
.writ-flow-row {
  display: flex;
  align-items: center;
  height: 70px;
  .writ-flow-td {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .arrows{
    margin: 0 15px;
  }
}
//保存前
.writ-flow-spantd {
  width: 182px;
  // background: url("~../assets/image/doc-flow_r1_c2.png") no-repeat;
  background-color: #CBE6FF;
  background-size: 100% 100%;
  border:1px solid #CBE6FF;
  box-shadow: #666 1px 1px  5px ;//边框阴影
  border-radius: 5px;
  text-align: center;
  color: #000;
  position: relative;
  img {
    position: absolute;
    width: 20px;
    top: 8px;
    left: 10px;
  }
}
.create-icon {
  position: absolute;
  bottom: 8px;
  right: 3px;
  cursor: pointer;
  color: rgba(#4282E6, 1);
  font-weight: bold;
  font-size: 20px;
  // &:hover {
  //   color: rgba(#4282E6, 0.8);
  // }
}
//保存后
.writ-flow-spantd-ex {
  width: 182px;
  // background: url("~../assets/image/doc-flow_r1_c4.png") no-repeat;
  background-size: 100% 100%;
  background-color: #B0F6C6;
  border:1px solid #CBE6FF;
  box-shadow: #666 1px 1px  5px ;//边框阴影
  border-radius: 5px;
  text-align: center;
  color: #000;
  position: relative;
  img {
    position: absolute;
    width: 20px;
    top: 8px;
    left: 10px;
  }
}
.flow-span {
  cursor: pointer;
  // &:hover {
  //   font-size: 17px;
  //   color: rgba(#fff, 0.8);
  // }
}
.borderColor{
  border-color:#dff0f7 ;
  margin-bottom: 10px;
  
}
</style>

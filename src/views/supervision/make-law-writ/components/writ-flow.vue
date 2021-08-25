<!-- 执法文书 流程 组件 -->
<template>
  <div>
    <table style="width:98%;border-collapse:collapse;margin:0 auto;">
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
            <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />一般检查
            </div>
            <table style="width: 626px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper22"
                    :src="require(flowStatus.paper22 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper22 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let100','检查方案', '22')" class="flow-span">检查方案</span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper1"
                    :src="require(flowStatus.paper1 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper1 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let101','现场检查记录', '1')" class="flow-span">现场检查记录</span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper2"
                    :src="require(flowStatus.paper2 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper2 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let102','现场处理决定书', '2')" class="flow-span">
                    现场处理
                    <br />决定书
                  </span>
                </td>
                <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>-->
                <!-- <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper5"
                    :src="require(flowStatus.paper5 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper5 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let103','责令限期整改指令书', '5')" class="flow-span">
                    责令限期整改
                    <br />指令书
                  </span>
                </td>-->
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c7.png" style="height: 65px;" />
                </td>
              </tr>
            </table>
            <br />
            <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />复查
            </div>
            <table style="width: 206px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper13"
                    :src="require(flowStatus.paper13 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper13 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let104','复查意见书', '13')" class="flow-span">复查意见书</span>
                </td>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c7.png" style="height: 65px;" />
                </td>
              </tr>
            </table>
            <br />
            <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />实施检查
            </div>
            <table style="width: 1046px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper3"
                    :src="require(flowStatus.paper3 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper3 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let106','责令撤出作业人员命令书', '3')" class="flow-span">
                    责令撤出作业人员
                    <br />指令书
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper23"
                    :src="require(flowStatus.paper23 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper23 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let107','抽样取证通知书', '23')" class="flow-span">抽样取证通知书</span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper25"
                    :src="require(flowStatus.paper25 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper25 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let108','先行登记保存证据通知书', '25')" class="flow-span">
                    先行登记保存证据
                    <br />通知书
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper27"
                    :src="require(flowStatus.paper27 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper27 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let109','先行登记保存证据处理决定书', '27')" class="flow-span">
                    先行登记保存证据
                    <br />处理决定书
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper32"
                    :src="require(flowStatus.paper32 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper32 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let110','查封(扣押)决定书', '32')" class="flow-span">
                    查封(扣押)
                    <br />决定书
                  </span>
                </td>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c7.png" style="height: 65px;" />
                </td>
              </tr>
            </table>
            <br />
            <table style="width: 1046px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper45"
                    :src="require(flowStatus.paper45 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper45 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let1100','延长查封（扣押）期限决定书', '45')" class="flow-span">
                    延长查封（扣押）
                    <br />期限决定书
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper46"
                    :src="require(flowStatus.paper46 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper46 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let1101','查封(扣押)处理决定书', '46')" class="flow-span">
                    查封(扣押)处理
                    <br />决定书
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper56"
                    :src="require(flowStatus.paper56 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper56 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let111','停供电(停供民用爆炸物品)决定书', '56')" class="flow-span">
                    停供电(停供民用
                    <br />爆炸物品)决定书
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper37"
                    :src="require(flowStatus.paper37 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper37 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let112','停供电(停供民用爆炸物品)函告书', '37')" class="flow-span">
                    停供电(停供民用
                    <br />爆炸物品)函告书
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper38"
                    :src="require(flowStatus.paper38 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper38 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let113','解除停供电(停供民用爆炸物品)通知书', '38')" class="flow-span">
                    解除停供电(停供民用
                    <br />爆炸物品)函告书
                  </span>
                </td>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c7.png" style="height: 65px;" />
                </td>
              </tr>
            </table>
          </div>
          <!-- 行政处罚 -->
          <div v-else-if="activeFlowTab === 'flow-2'" style="padding:16px;">
            <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />一般程序
            </div>
            <table style="width: 836px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper4"
                    :src="require(flowStatus.paper4 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper4 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let201','立案决定书', '4')" class="flow-span">立案决定书</span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper5"
                    :src="require(flowStatus.paper5 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper5 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let202','调查询问笔录', '5')" class="flow-span">调查询问笔录</span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper47"
                    :src="require(flowStatus.paper47 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper47 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let203','行政执法决定法制审核意见书', '47')" class="flow-span">
                    行政执法决定法制
                    <br />审核意见书
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper48"
                    :src="require(flowStatus.paper48 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper48 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let204','集体讨论记录', '48')" class="flow-span">集体讨论记录</span>
                </td>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c6.png" style="height: 65px;" />
                </td>
              </tr>
              <br />
              <tr>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper36"
                    :src="require(flowStatus.paper36 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper36 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let203','案件处理呈报书', '36')" class="flow-span">案件处理呈报书</span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper6"
                    :src="require(flowStatus.paper6 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper6 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let204','行政处罚告知书', '6')" class="flow-span">行政处罚告知书</span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper8"
                    :src="require(flowStatus.paper8 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper8 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let206','行政处罚决定书', '8')" class="flow-span">
                    行政处罚决定书
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper9"
                    :src="require(flowStatus.paper9 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper9 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let207','送达收执', '9')" class="flow-span">
                    送达收执
                  </span>
                </td>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c6.png" style="height: 65px;" />
                </td>
              </tr>
            </table>
            <br />
            <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />听证程序
            </div>
            <table style="width: 1046px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper57"
                    :src="require(flowStatus.paper57 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper57 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let105','询问通知书', '57')" class="flow-span">
                    询问通知书
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper30"
                    :src="require(flowStatus.paper30 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper30 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let205','陈述、申辩笔录', '30')" class="flow-span">陈述、申辩笔录</span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper28"
                    :src="require(flowStatus.paper28 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper28 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let209','听证通知书', '28')" class="flow-span">
                    听证通知书
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper29"
                    :src="require(flowStatus.paper29 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper29 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let210','不予受理听证申请通知书', '29')" class="flow-span">
                    不予受理听证<br />申请通知书
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper7"
                    :src="require(flowStatus.paper7 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper7 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let211','听证笔录', '7')" class="flow-span">
                    听证笔录
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper49"
                    :src="require(flowStatus.paper49 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper49 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let211','听证会报告书', '49')" class="flow-span">
                    听证会报告书
                  </span>
                </td>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c6.png" style="height: 65px;" />
                </td>
              </tr>
            </table>
            <br />
            <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />案件结案
            </div>
            <table style="width: 1046px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper50"
                    :src="require(flowStatus.paper50 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper50 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let212','罚款缴纳催告书', '50')" class="flow-span">
                    罚款缴纳催告书
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper51"
                    :src="require(flowStatus.paper51 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper51 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let213','加处罚款决定书', '51')" class="flow-span">
                    加处罚款决定书
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper52"
                    :src="require(flowStatus.paper52 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper52 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let213','延期（分期）缴纳罚款决定书', '52')" class="flow-span">
                    延期（分期）缴纳<br />罚款决定书
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper14"
                    :src="require(flowStatus.paper14 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper14 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let213','案件结案报告', '14')" class="flow-span">
                    案件结案报告
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper15"
                    :src="require(flowStatus.paper15 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper15 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let214','执法案卷（首页）及目录', '15')" class="flow-span">
                    执法案卷（首页）<br />及目录
                  </span>
                </td>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c7.png" style="height: 65px;" />
                </td>
              </tr>
            </table>
          </div>
          <!-- 行政强制 -->
          <div v-else-if="activeFlowTab === 'flow-3'" style="padding:16px;">
            <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />行政强制执行
            </div>
            <table style="width: 626px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper53"
                    :src="require(flowStatus.paper53 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper53 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let309','行政强制执行事先催告书', '53')" class="flow-span">
                    行政强制执行<br />事先催告书
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper18"
                    :src="require(flowStatus.paper18 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper18 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let301','强制执行申请书', '18')" class="flow-span">
                    强制执行
                    <br />申请书
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper54"
                    :src="require(flowStatus.paper54 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper54 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let304','行政执法有关事项审批报告', '54')" class="flow-span">
                    行政执法有关事项<br />审批报告
                  </span>
                </td>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c7.png" style="height: 65px;" />
                </td>
              </tr>
            </table>
          </div>
          <!-- 其他 -->
          <div v-else-if="activeFlowTab === 'flow-4'" style="padding:16px;">
            <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />其他
            </div>
            <table style="width:626px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper19"
                    :src="require(flowStatus.paper19 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper19 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let401','移送书', '19')" class="flow-span">移送书</span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper20"
                    :src="require(flowStatus.paper20 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper20 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let402','涉嫌犯罪案件移送书', '20')" class="flow-span">涉嫌犯罪案件<br />移送书</span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper55"
                    :src="require(flowStatus.paper55 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper55 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let406','鉴定委托书', '55')" class="flow-span">
                    鉴定委托书
                  </span>
                </td>
                <!--<td style="width:28px;"><img src="../assets/image/doc-flow_r1_c3-1.png" style="height: 65px;" /></td>
                <td style="width:182px;background:url(images/doc-flow_r1_c4.png);background-repeat:no-repeat;text-align:center;color:#fff;"><a class="{let-403}" href="#">查封扣押处理<br />决定书</a></td>-->
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c7.png" style="height: 65px;" />
                </td>
              </tr>
            </table>
             <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />报告上传
            </div>
            <table style="width: 206px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper13"
                    :src="require(flowStatus.paper13 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper13 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let104','监管排查报告', '13')" class="flow-span">监管排查报告</span>
                </td>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c7.png" style="height: 65px;" />
                </td>
              </tr>
            </table>
            
            
            
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
    async cmdEditDoc(letId, docTypeName, docTypeNo) {
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
          },
        });
      } else {
        this.$message.error("请在左侧双击该企业,启动该企业的执法检查");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main";
.writ-flow-spantd {
  width: 182px;
  background: url("~../assets/image/doc-flow_r1_c2.png") no-repeat;
  text-align: center;
  color: #fff;
  position: relative;
  img {
    position: absolute;
    width: 20px;
    top: 8px;
    left: 0px;
  }
}
.writ-flow-spantd-ex {
  width: 182px;
  background: url("~../assets/image/doc-flow_r1_c4.png") no-repeat;
  text-align: center;
  color: #fff;
  position: relative;
  img {
    position: absolute;
    width: 20px;
    top: 8px;
    left: 0px;
  }
}
.flow-span {
  cursor: pointer;
  &:hover {
    font-size: 17px;
    color: rgba(#fff, 0.8);
  }
}
</style>

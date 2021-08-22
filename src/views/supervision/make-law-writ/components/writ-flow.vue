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
            <table style="width: 836px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper2"
                    :src="require(flowStatus.paper2 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper2 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let100','检查方案', '2')" class="flow-span">检查方案</span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper3"
                    :src="require(flowStatus.paper3 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper3 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let101','现场检查笔录', '3')" class="flow-span">现场检查笔录</span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper4"
                    :src="require(flowStatus.paper4 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper4 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let102','现场处理决定书', '4')" class="flow-span">
                    现场处理<br />决定书
                  </span>
                </td>
                <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td> -->
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
                </td> -->
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c6.png" style="height: 65px;" />
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
                    v-if="flowStatus.paper6"
                    :src="require(flowStatus.paper6 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper6 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let104','复查意见书', '6')" class="flow-span">
                    复查意见书
                  </span>
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
            <table style="width: 836px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper14"
                    :src="require(flowStatus.paper14 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper14 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let106','责令撤出作业人员命令书', '14')" class="flow-span">责令撤出作业人员<br />命令书</span>
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
                  <span @click="cmdEditDoc('let107','抽样取证通知书', '15')" class="flow-span">
                    抽样取证通知书
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper16"
                    :src="require(flowStatus.paper16 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper16 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let108','先行登记保存证据通知书', '16')" class="flow-span">先行登记保存证据<br />通知书</span>
                </td>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c6.png" style="height: 65px;" />
                </td>
              </tr>
            </table>
            <br />
            <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />证据
            </div>
            <table style="width: 836px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper17"
                    :src="require(flowStatus.paper17 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper17 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let109','先行登记保存证据处理决定书', '17')" class="flow-span">
                    先行登记保存证据<br />处理决定书
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
                  <span @click="cmdEditDoc('let110','查封(扣押)决定书', '18')" class="flow-span">
                    查封(扣押)<br />决定书
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
                  <span @click="cmdEditDoc('let110','延长查封（扣押）期限决定书', '18')" class="flow-span">
                    延长查封（扣押）<br />期限决定书
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
                  <span @click="cmdEditDoc('let110','查封(扣押)处理决定书', '18')" class="flow-span">
                    查封(扣押)处理<br />决定书
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper19"
                    :src="require(flowStatus.paper19 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper19 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let111','停供电(停供民用爆炸物品)决定书', '19')" class="flow-span">
                    停供电(停供民用<br />爆炸物品)决定书
                  </span>
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
                  <span @click="cmdEditDoc('let112','停供电(停供民用爆炸物品)函告书', '20')" class="flow-span">停供电(停供民用<br />爆炸物品)函告书</span>
                </td>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c6.png" style="height: 65px;" />
                </td>
              </tr>
              <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper21"
                    :src="require(flowStatus.paper21 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper21 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let113','解除停供电(停供民用爆炸物品)通知书', '21')" class="flow-span">
                    解除停供电(停供民用<br />爆炸物品)函告书
                  </span>
                </td>
            </table>
          </div>
          <!-- 行政处罚 -->
          <div v-else-if="activeFlowTab === 'flow-2'" style="padding:16px;">
            <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />一般程序
            </div>
            <table style="width: 1046px;height:65px;border-collapse: collapse;">
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
                  <span @click="cmdEditDoc('let201','立案决定书', '22')" class="flow-span">立案决定书</span>
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
                  <span @click="cmdEditDoc('let202','调查询问笔录', '23')" class="flow-span">
                    调查询问笔录
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper24"
                    :src="require(flowStatus.paper24 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper24 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let203','行政执法决定法制审核意见书', '24')" class="flow-span">
                    行政执法决定法制<br />审核意见书
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper25"
                    :src="require(flowStatus.paper25 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper25 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let204','集体讨论记录', '25')" class="flow-span">
                    集体讨论记录
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper26"
                    :src="require(flowStatus.paper26 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper26 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let205','行政处罚决定书', '26')" class="flow-span">
                    行政处罚
                    <br />决定书
                  </span>
                </td>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c7.png" style="height: 65px;" />
                </td>
              </tr>
            </table>
            <br />
            <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />听证
            </div>
            <table style="width: 836px;height:65px;border-collapse: collapse;">
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
                  <span @click="cmdEditDoc('let206','行政处罚听证会通知书', '22')" class="flow-span">
                    行政处罚
                    <br />听证会通知书
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
                  <span @click="cmdEditDoc('let207','听证笔录', '23')" class="flow-span">听证笔录</span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper24"
                    :src="require(flowStatus.paper24 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper24 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let208','听证会报告书', '24')" class="flow-span">
                    听证会
                    <br />报告书
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper25"
                    :src="require(flowStatus.paper25 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper25 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let209','行政处罚集体讨论记录', '25')" class="flow-span">
                    行政处罚
                    <br />集体讨论记录
                  </span>
                </td>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c6.png" style="height: 65px;" />
                </td>
              </tr>
            </table>
            <br />
            <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />罚款
            </div>
            <table style="width: 616px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper30"
                    :src="require(flowStatus.paper30 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper30 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let210','罚款催缴通知书', '30')" class="flow-span">
                    罚款催缴
                    <br />通知书
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper31"
                    :src="require(flowStatus.paper31 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper31 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let211','加处罚款决定书', '31')" class="flow-span">
                    加处罚款
                    <br />决定书
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
                  <span @click="cmdEditDoc('let212','延期(分期)缴纳罚款批准书', '32')" class="flow-span">
                    延期(分期)
                    <br />缴纳罚款批准书
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
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />行政强制
            </div>
            <table style="width: 416px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper34"
                    :src="require(flowStatus.paper34 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper34 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let300','行政强制执行事先催告书', '34')" class="flow-span">
                    行政强制执行
                    <br />事先催告书
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper35"
                    :src="require(flowStatus.paper35 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper35 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let301','强制执行申请书', '35')" class="flow-span">
                    强制执行
                    <br />申请书
                  </span>
                </td>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c6.png" style="height: 65px;" />
                </td>
              </tr>
            </table>
            <br />
            <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />查封
            </div>
            <table style="width: 836px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper7"
                    :src="require(flowStatus.paper7 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper7 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let302','查封扣押决定书', '7')" class="flow-span">
                    查封扣押
                    <br />决定书
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper8"
                    :src="require(flowStatus.paper8 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper8 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let303','查封扣押(场所、设施、财物)清单', '8')" class="flow-span">
                    查封扣押(场所、
                    <br />设施、财物)清单
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper9"
                    :src="require(flowStatus.paper9 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper9 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let304','延长查封扣押期限决定书', '9')" class="flow-span">
                    延长查封扣押期限
                    <br />决定书
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper10"
                    :src="require(flowStatus.paper10 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper10 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let305','查封扣押处理决定书', '10')" class="flow-span">
                    查封扣押处理
                    <br />决定书
                  </span>
                </td>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c6.png" style="height: 65px;" />
                </td>
              </tr>
            </table>
            <br />
            <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />停电
            </div>
            <table style="width: 626px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper11"
                    :src="require(flowStatus.paper11 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper11 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let306','停止供电（供应民用爆炸物品）决定书', '11')" class="flow-span">
                    停止供电(供应民用
                    <br />爆炸物品)决定书
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper12"
                    :src="require(flowStatus.paper12 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper12 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let307','停止供电（供应民用爆炸物品）通知书', '12')" class="flow-span">
                    停止供电(供应民用
                    <br />爆炸物品)通知书
                  </span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper13"
                    :src="require(flowStatus.paper13 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper13 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let308','恢复供电（供应民用爆炸物品）通知书', '13')" class="flow-span">
                    恢复供电(供应民用
                    <br />爆炸物品)通知书
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
                    v-if="flowStatus.paper33"
                    :src="require(flowStatus.paper33 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper33 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let400','文书送达回执', '33')" class="flow-span">文书送达回执</span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper36"
                    :src="require(flowStatus.paper36 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper36 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let401','案件移送书', '36')" class="flow-span">案件移送书</span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper37"
                    :src="require(flowStatus.paper37 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper37 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let402','行政执法有关事项审批表', '37')" class="flow-span">
                    行政执法有关
                    <br />事项审批表
                  </span>
                </td>
                <!--<td style="width:28px;"><img src="../assets/image/doc-flow_r1_c3-1.png" style="height: 65px;" /></td>
                <td style="width:182px;background:url(images/doc-flow_r1_c4.png);background-repeat:no-repeat;text-align:center;color:#fff;"><a class="{let-403}" href="#">查封扣押处理<br />决定书</a></td>-->
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c7.png" style="height: 65px;" />
                </td>
              </tr>
            </table>
            <table style="width: 416px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper39"
                    :src="require(flowStatus.paper39 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper39 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let404','案卷首页', '39')" class="flow-span">案卷首页</span>
                </td>
                <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper40"
                    :src="require(flowStatus.paper40 === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper40 === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let405','卷内目录', '40')" class="flow-span">卷内目录</span>
                </td>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c6.png" style="height: 65px;" />
                </td>
              </tr>
            </table>
            <br />
            <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />证据上传
            </div>
            <table style="width: 206px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper"
                    :src="require(flowStatus.paper === 'save' ? '../assets/image/save.png' : '../assets/image/file.png')"
                    :title="flowStatus.paper === 'save' ? '已保存' : '已归档'"
                    alt
                  />
                  <span @click="cmdEditDoc('let406','影音证据', '')" class="flow-span">影音证据</span>
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
@import "~../assets/scss/main";
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

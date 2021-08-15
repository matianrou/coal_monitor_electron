<!-- 执法文书 流程 组件 -->
<template>
  <div>
    <table style="width:100%;border-collapse:collapse;">
      <tr>
        <!-- tab 标签 -->
        <td style="padding:0;">
          <table
            style="width:495px;border-collapse:collapse;margin-left:10px;"
            id="tabMenu"
          >
            <tr>
              <td :class="activeFlowTab === 'flow-1' ? 'tabMenu tabMenuActive' : 'tabMenu tabMenuNormal'" @click="doTabSwitch(1)" id="tabMenu-1">
                <span class="{tab-let0}"></span>现场检查
              </td>
              <td style="width:5px;"></td>
              <td :class="activeFlowTab === 'flow-2' ? 'tabMenu tabMenuActive' : 'tabMenu tabMenuNormal'" @click="doTabSwitch(2)" id="tabMenu-2">
                <span class="{tab-let1}"></span>行政处罚
              </td>
              <td style="width:5px;"></td>
              <td :class="activeFlowTab === 'flow-3' ? 'tabMenu tabMenuActive' : 'tabMenu tabMenuNormal'" @click="doTabSwitch(3)" id="tabMenu-3">
                <span class="{tab-let2}"></span>行政强制
              </td>
              <td style="width:5px;"></td>
              <td :class="activeFlowTab === 'flow-4' ? 'tabMenu tabMenuActive' : 'tabMenu tabMenuNormal'" @click="doTabSwitch(4)" id="tabMenu-4">
                <span class="{tab-let3}"></span>其他
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
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper22"
                    :src="require(flowStatus.paper22 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper22 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let100','检查方案', '22')" class="flow-span">检查方案</span>
                </td>
                <td style="width:28px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper1"
                    :src="require(flowStatus.paper1 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper1 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let101','现场检查笔录', '1')" class="flow-span">现场检查笔录</span>
                </td>
                <td style="width:28px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper2"
                    :src="require(flowStatus.paper2 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper2 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let102','现场处理决定书', '2')" class="flow-span">现场处理
                    <br />决定书</span>
                </td>
                <!-- <td style="width:28px;"><img src="@/views/make-law-writ/assets/image/doc-flow_r1_c3.png" style="height: 65px;" /></td>
                <td class="writ-flow-spantd-ex"><a class="{let103}" href="javascript:cmdEditDoc('let103','责令限期整改指令书','5')">责令限期整改<br />指令书</a></td>-->
                <td style="width:12px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c7.png" style="height: 65px;" />
                </td>
              </tr>
            </table>
            <br />
            <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />复查
            </div>
            <table style="width: 626px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper42"
                    :src="require(flowStatus.paper42 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper42 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let103','检查方案(复查)','42')" class="flow-span">检查方案(复查)</span>
                </td>
                <td style="width:28px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper13"
                    :src="require(flowStatus.paper13 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper13 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let104','复查意见书','13')" class="flow-span">复查意见书</span>
                </td>
                <td style="width:28px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper"
                    :src="require(flowStatus.paper === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let105','隐患整改','')" class="flow-span">隐患整改</span>
                </td>
                <td style="width:12px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c7.png" style="height: 65px;" />
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
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper3"
                    :src="require(flowStatus.paper3 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper3 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let106','撤出作业人员命令书','3')" class="flow-span">撤出作业人员
                    <br />命令书</span>
                </td>
                <td style="width:28px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper23"
                    :src="require(flowStatus.paper23 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper23 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let107','抽样取证通知书','23')" class="flow-span">抽样取证通知书</span>
                </td>
                <td style="width:28px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper25"
                    :src="require(flowStatus.paper25 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper25 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let108','先行登记保存证据通知书','25')" class="flow-span">先行登记保存证据
                    <br />通知书</span>
                </td>
                <td style="width:28px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper27"
                    :src="require(flowStatus.paper27 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper27 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let109','先行登记保存证据处理决定书','27')" class="flow-span">先行登记保存证据
                    <br />处理决定书</span>
                </td>
                <td style="width:12px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c6.png" style="height: 65px;" />
                </td>
              </tr>
            </table>
            <br />
            <!-- <div style="height:32px;line-height:32px;font-weight:bold;color:#333;"><img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />证据</div> -->
            <table style="width: 836px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper32"
                    :src="require(flowStatus.paper32 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper32 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let110','查封(扣押)决定书','32')" class="flow-span">查封(扣押)
                    <br />决定书</span>
                </td>
                <td style="width:28px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper34"
                    :src="require(flowStatus.paper34 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper34 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let111','解除查封(扣押)决定书','34')" class="flow-span">解除查封(扣押)
                    <br />决定书</span>
                </td>
                <td style="width:28px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper37"
                    :src="require(flowStatus.paper37 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper37 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let112','停供电(停供民用爆炸物品)通知书','37')" class="flow-span">停供电(停供民用
                    <br />爆炸物品)通知书</span>
                </td>
                <td style="width:28px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper38"
                    :src="require(flowStatus.paper38 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper38 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let113','解除停供电(停供民用爆炸物品)通知书','38')" class="flow-span">解除停供电(停供民<br />用爆炸物品)通知书</span>
                </td>
                <td style="width:12px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c6.png" style="height: 65px;" />
                </td>
              </tr>
            </table>
          </div>
          <!-- 行政处罚 -->
          <div v-else-if="activeFlowTab === 'flow-2'" style="padding:16px;">
            <!-- <div style="height:32px;line-height:32px;font-weight:bold;color:#333;"><img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />简易程序</div>
                <table style="width: 206px;height:65px;border-collapse: collapse;">
                    <tr>
                        <td style="width:12px;"><img src="@/views/make-law-writ/assets/image/doc-flow_r1_c1.png" style="height: 65px;" /></td>
                        <td class="writ-flow-spantd"><a class="{let200}" href="javascript:cmdEditDoc('let200','行政（当场）处罚决定书','27')">行政（当场）<br />处罚决定书</a></td>
                        <td style="width:12px;"><img src="@/views/make-law-writ/assets/image/doc-flow_r1_c7.png" style="height: 65px;" /></td>
                    </tr>
                </table>
            <br />-->
            <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />一般程序
            </div>
            <table style="width: 836px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper4"
                    :src="require(flowStatus.paper4 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper4 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let201','立案决定书','4')" class="flow-span">立案决定书</span>
                </td>
                <td style="width:28px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper5"
                    :src="require(flowStatus.paper5 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper5 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let202','调查取证笔录','5')" class="flow-span">调查取证笔录</span>
                </td>
                <td style="width:28px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper36"
                    :src="require(flowStatus.paper36 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper36 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let203','案件处理呈报书','36')" class="flow-span">案件处理呈报书</span>
                </td>
                <td style="width:28px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper6"
                    :src="require(flowStatus.paper6 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper6 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let204','行政处罚告知书','6')" class="flow-span">行政处罚告知书</span>
                </td>
                <td style="width:12px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c6.png" style="height: 65px;" />
                </td>
              </tr>
            </table>
            <br />
            <table style="width: 836px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper30"
                    :src="require(flowStatus.paper30 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper30 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let205','陈述、申辩笔录','30')" class="flow-span">陈述、申辩笔录</span>
                </td>
                <td style="width:28px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper8"
                    :src="require(flowStatus.paper8 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper8 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let206','行政处罚决定书','8')" class="flow-span">行政处罚决定书</span>
                </td>
                <td style="width:28px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper9"
                    :src="require(flowStatus.paper9 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper9 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let207','送达收执','9')" class="flow-span">送达收执</span>
                </td>
                <td style="width:28px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper39"
                    :src="require(flowStatus.paper39 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper39 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let208','行政决定履行催告书','39')" class="flow-span">行政决定履行
                    <br />催告书</span>
                </td>
                <td style="width:12px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c6.png" style="height: 65px;" />
                </td>
              </tr>
            </table>
            <br />
            <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />听证程序
            </div>
            <table style="width: 626px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper28"
                    :src="require(flowStatus.paper28 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper28 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let209','听证通知书','28')" class="flow-span">听证通知书</span>
                </td>
                <td style="width:28px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper29"
                    :src="require(flowStatus.paper29 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper29 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let210','不予受理听证申请通知书','29')" class="flow-span">不予受理听证申请
                    <br />通知书</span>
                </td>
                <td style="width:28px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper7"
                    :src="require(flowStatus.paper7 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper7 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let211','听证笔录','7')" class="flow-span">听证笔录</span>
                </td>
                <td style="width:12px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c7.png" style="height: 65px;" />
                </td>
              </tr>
            </table>
            <br />
            <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />案件结案
            </div>
            <table style="width: 626px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper"
                    :src="require(flowStatus.paper === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let212','罚款收缴', '')" class="flow-span">罚款收缴</span>
                </td>
                <td style="width:28px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper14"
                    :src="require(flowStatus.paper14 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper14 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let213','案件结案报告','14')" class="flow-span">案件结案报告</span>
                </td>
                <td style="width:28px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper15"
                    :src="require(flowStatus.paper15 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper15 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let214','执法案卷（首页）及目录','15')" class="flow-span">执法案卷（首页）
                    <br />及目录</span>
                </td>
                <td style="width:12px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c7.png" style="height: 65px;" />
                </td>
              </tr>
            </table>
          </div>
          <!-- 行政强制 -->
          <div v-else-if="activeFlowTab === 'flow-3'" style="padding:16px;">
            <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />公开裁定
            </div>
            <table style="width: 206px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper31"
                    :src="require(flowStatus.paper31 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper31 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let300','执法案件公开裁定记录','31')" class="flow-span">执法案件公开裁定记录</span>
                </td>
                <td style="width:12px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c7.png" style="height: 65px;" />
                </td>
              </tr>
            </table>
            <br />
            <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />行政强制执行
            </div>
            <table style="width: 206px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper18"
                    :src="require(flowStatus.paper18 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper18 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let301','强制执行申请书','18')" class="flow-span">强制执行申请书</span>
                </td>
                <td style="width:12px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c7.png" style="height: 65px;" />
                </td>
              </tr>
            </table>
            <br />
            <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />行政复议
            </div>
            <table style="width: 836px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper10"
                    :src="require(flowStatus.paper10 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper10 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let302','行政复议申请笔录','10')" class="flow-span">行政复议申请笔录</span>
                </td>
                <td style="width:28px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper41"
                    :src="require(flowStatus.paper41 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper41 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let303','不予受理行政复议申请决定书','41')" class="flow-span">不予受理行政复议
                    <br />申请决定书</span>
                </td>
                <td style="width:28px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper11"
                    :src="require(flowStatus.paper11 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper11 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let304','行政复议调查笔录','11')" class="flow-span">行政复议调查笔录</span>
                </td>
                <td style="width:28px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper12"
                    :src="require(flowStatus.paper12 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper12 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let305','行政复议决定书','12')" class="flow-span">行政复议决定书</span>
                </td>
                <td style="width:12px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c6.png" style="height: 65px;" />
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
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper35"
                    :src="require(flowStatus.paper35 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper35 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let400','移送案件呈报书','35')" class="flow-span">移送案件呈报书</span>
                </td>
                <td style="width:28px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd-ex">
                  <img
                    v-if="flowStatus.paper19"
                    :src="require(flowStatus.paper19 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper19 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let401','移送书','19')" class="flow-span">移送书</span>
                </td>
                <td style="width:28px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper20"
                    :src="require(flowStatus.paper20 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper20 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let402','涉嫌犯罪案件移送书','20')" class="flow-span">涉嫌犯罪案件
                    <br />移送书</span>
                </td>
                <!--<td style="width:28px;"><img src="@/views/make-law-writ/assets/image/doc-flow_r1_c3.png" style="height: 65px;" /></td>
                <td class="writ-flow-spantd-ex"><a class="{let403}" href="#">查封扣押处理<br />决定书</a></td>-->
                <td style="width:12px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c7.png" style="height: 65px;" />
                </td>
              </tr>
            </table>
            <!-- <table style="width: 416px;height:65px;border-collapse: collapse;">
                  <tr>
                    <td style="width:12px;"><img src="@/views/make-law-writ/assets/image/doc-flow_r1_c1.png" style="height: 65px;" /></td>
                    <td class="writ-flow-spantd"><a class="{let404}" href="javascript:cmdEditDoc('let404','案卷首页','39')">案卷首页</a></td>
                    <td style="width:28px;"><img src="@/views/make-law-writ/assets/image/doc-flow_r1_c3-1.png" style="height: 65px;" /></td>
                    <td class="writ-flow-spantd-ex"><a class="{let405}" href="javascript:cmdEditDoc('let405','卷内目录','40')">卷内目录</a></td>
                    <td style="width:12px;"><img src="@/views/make-law-writ/assets/image/doc-flow_r1_c6.png" style="height: 65px;" /></td>
                  </tr>
            </table>-->
            <br />
            <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />证据上传
            </div>
            <table style="width: 206px;height:65px;border-collapse: collapse;">
              <tr>
                <td style="width:12px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td>
                <td class="writ-flow-spantd">
                  <img
                    v-if="flowStatus.paper21"
                    :src="require(flowStatus.paper21 === 'save' ? '@/views/make-law-writ/assets/image/save.png' : '@/views/make-law-writ/assets/image/file.png')"
                    :title="flowStatus.paper21 === 'save' ? '已保存' : '已归档'"
                    alt="" />
                  <span @click="cmdEditDoc('let406','影音证据', '21')" class="flow-span">影音证据</span>
                </td>
                <td style="width:12px;">
                  <img src="@/views/make-law-writ/assets/image/doc-flow_r1_c7.png" style="height: 65px;" />
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
      default: () => {}
    },
    flowStatus: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      activeFlowTab: 'flow-1'
    };
  },
  created() {},
  methods: {
    doTabSwitch (tab) {
      // 切换现场检查、行政处罚、行政强制和其他的tab切换
      if (this.activeFlowTab !== `flow-${tab}`)
      this.activeFlowTab = `flow-${tab}`
    },
    async cmdEditDoc(letId, docTypeName, docTypeNo) {
      if (this.corpData.caseId) {
        //显示文书模板（制作文书）
        this.$emit('change-page', {
          page:'writFill',
          data: {
            page: letId,
            docData: {
              docTypeNo: docTypeNo,
              docTypeName: docTypeName,
            }
          }
        })
      } else {
        this.$message.error('请在左侧双击该企业,启动该企业的执法检查');
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~@/views/make-law-writ/assets/scss/main";
.writ-flow-spantd {
  width:182px;
  background:url('~@/views/make-law-writ/assets/image/doc-flow_r1_c2.png') no-repeat;
  text-align:center;
  color:#fff;
  position: relative;
  img {
    position: absolute;
    width: 20px;
    top: 8px;
    left: 0px;
  }
}
.writ-flow-spantd-ex {
  width:182px;
  background:url('~@/views/make-law-writ/assets/image/doc-flow_r1_c4.png') no-repeat;
  text-align:center;
  color:#fff;
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
    color: rgba(#fff, 0.8)
  }
}
</style>

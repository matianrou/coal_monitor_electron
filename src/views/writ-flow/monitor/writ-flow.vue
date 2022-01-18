<!-- 执法文书 流程 组件 -->
<template>
  <div class="writ-flow-main">
    <div class="enterprisedata-title">
      <img
        src="@/components/assets/image/letTitle.png"
        style="width: 32px"
      />执法检查
      <div class="selected-paper">
        <el-select 
          v-model="createdSelectedPaper"
          placeholder="请选择新建文书"
          size="small"
          clearable
          filterable
          @change="createPaper">
          <el-option
            v-for="item in $store.state.dictionary.monitorPaperType"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </div>
    </div>
    <!-- 事故文书流程 -->
    <div v-if="corpData.caseType === '1'" class="writ-flow">
      <div 
        :class="activeFlowTab === 'flow-1' ? 'tabMenu tabMenuActive' : 'tabMenu tabMenuNormal'"
        style="margin: 0px 10px;"
        @click="doTabSwitch(1)">
        事故处罚
      </div>
      <div class="writ-flow-flow-main">
        <!-- 一般程序 -->
        <div v-if="activeFlowTab === 'flow-1'" style="padding: 16px">
          <fieldset class="borderColor" style="margin-bottom: 0px;">
            <legend>一般程序</legend>
            <table
              style="
                width: 626px;
                height: 65px;
                border-collapse: collapse;
                margin-left: 20px;
              "
            >
              <tr class="writ-flow-row">
                <td class="arrows">➤</td>
                <td
                  :class="
                    flowStatus.paper4
                      ? 'writ-flow-spantd-ex writ-flow-td'
                      : 'writ-flow-spantd writ-flow-td'
                  "
                >
                  <img
                    v-if="flowStatus.paper4"
                    :src="
                      flowStatus.paper4 === 'save'
                        ? ''
                        : require('../assets/image/file.png')
                    "
                    :title="
                      flowStatus.paper4 === 'save' ? '已保存' : '已归档'
                    "
                    alt=""
                  />
                  <span
                    @click="cmdEditDoc('let201', '立案决定书', '4')"
                    class="flow-span"
                    >立案决定书{{paperCount.count4 && paperCount.count4 > 1 ? `(${paperCount.count4})` : ''}}</span
                  >
                  <i
                    class="el-icon-plus create-icon"
                    title="添加"
                    @click="addPaper('let201', '立案决定书', '4')"
                  ></i>
                </td>
                <td class="arrows">→</td>
                <td
                  :class="
                    flowStatus.paper5
                      ? 'writ-flow-spantd-ex writ-flow-td'
                      : 'writ-flow-spantd writ-flow-td'
                  "
                >
                  <img
                    v-if="unreceivedStatus.unreceived5"
                    src="@/views/writ-flow/assets/image/paper-send-icon.png"
                    title="有未接收的文书，请点击接收"
                    style="top: 42px; left: 8px; cursor: pointer;"
                    @click="receivePaper('5')"
                  />
                  <img
                    v-if="flowStatus.paper5"
                    :src="
                      flowStatus.paper5 === 'save'
                        ? ''
                        : require('../assets/image/file.png')
                    "
                    :title="
                      flowStatus.paper5 === 'save' ? '已保存' : '已归档'
                    "
                    alt=""
                  />
                  <span
                    @click="cmdEditDoc('let202', '调查取证笔录', '5')"
                    class="flow-span"
                    >调查取证笔录{{paperCount.count5 && paperCount.count5 > 1 ? `(${paperCount.count5})` : ''}}</span
                  >
                  <i
                    class="el-icon-plus create-icon"
                    title="添加"
                    @click="addPaper('let202', '调查取证笔录', '5')"
                  ></i>
                </td>
                <td class="arrows">→</td>
                <td
                  :class="
                    flowStatus.paper36
                      ? 'writ-flow-spantd-ex writ-flow-td'
                      : 'writ-flow-spantd writ-flow-td'
                  "
                >
                  <img
                    v-if="flowStatus.paper36"
                    :src="
                      flowStatus.paper36 === 'save'
                        ? ''
                        : require('../assets/image/file.png')
                    "
                    :title="
                      flowStatus.paper36 === 'save' ? '已保存' : '已归档'
                    "
                    alt=""
                  />
                  <span
                    @click="cmdEditDoc('let203', '案件处理呈报书', '36')"
                    class="flow-span"
                    >案件处理呈报书{{paperCount.count36 && paperCount.count36 > 1 ? `(${paperCount.count36})` : ''}}</span
                  >
                  <i
                    class="el-icon-plus create-icon"
                    title="添加"
                    @click="addPaper('let203', '案件处理呈报书', '36')"
                  ></i>
                </td>
                <td class="arrows">→</td>
                <td
                  :class="
                    flowStatus.paper6
                      ? 'writ-flow-spantd-ex writ-flow-td'
                      : 'writ-flow-spantd writ-flow-td'
                  "
                >
                  <img
                    v-if="flowStatus.paper6"
                    :src="
                      flowStatus.paper6 === 'save'
                        ? ''
                        : require('../assets/image/file.png')
                    "
                    :title="
                      flowStatus.paper6 === 'save' ? '已保存' : '已归档'
                    "
                    alt=""
                  />
                  <span
                    @click="cmdEditDoc('let204', '行政处罚告知书', '6')"
                    class="flow-span"
                    >行政处罚告知书{{paperCount.count6 && paperCount.count6 > 1 ? `(${paperCount.count6})` : ''}}</span
                  >
                  <i
                    class="el-icon-plus create-icon"
                    title="添加"
                    @click="addPaper('let204', '行政处罚告知书', '6')"
                  ></i>
                </td>
              </tr>
            </table>
            <br />
            <table
              style="
                width: 836px;
                height: 65px;
                border-collapse: collapse;
                margin-left: 20px;
              "
            >
              <tr class="writ-flow-row">
                <td class="arrows">→</td>
                <td
                  :class="
                    flowStatus.paper8
                      ? 'writ-flow-spantd-ex writ-flow-td'
                      : 'writ-flow-spantd writ-flow-td'
                  "
                >
                  <img
                    v-if="flowStatus.paper8"
                    :src="
                      flowStatus.paper8 === 'save'
                        ? ''
                        : require('../assets/image/file.png')
                    "
                    :title="
                      flowStatus.paper8 === 'save' ? '已保存' : '已归档'
                    "
                    alt=""
                  />
                  <span
                    @click="cmdEditDoc('let206', '行政处罚决定书', '8')"
                    class="flow-span"
                    >行政处罚决定书{{paperCount.count8 && paperCount.count8 > 1 ? `(${paperCount.count8})` : ''}}</span
                  >
                  <i
                    class="el-icon-plus create-icon"
                    title="添加"
                    @click="addPaper('let206', '行政处罚决定书', '8')"
                  ></i>
                </td>
                <td class="arrows">→</td>
                <td
                  :class="
                    flowStatus.paper9
                      ? 'writ-flow-spantd-ex writ-flow-td'
                      : 'writ-flow-spantd writ-flow-td'
                  "
                >
                  <img
                    v-if="flowStatus.paper9"
                    :src="
                      flowStatus.paper9 === 'save'
                        ? ''
                        : require('../assets/image/file.png')
                    "
                    :title="
                      flowStatus.paper9 === 'save' ? '已保存' : '已归档'
                    "
                    alt=""
                  />
                  <span
                    @click="cmdEditDoc('let207', '送达收执', '9')"
                    class="flow-span"
                    >送达收执{{paperCount.count9 && paperCount.count9 > 1 ? `(${paperCount.count9})` : ''}}</span
                  >
                  <i
                    class="el-icon-plus create-icon"
                    title="添加"
                    @click="addPaper('let207', '送达收执', '9')"
                  ></i>
                </td>
                <td class="arrows">→</td>
                <td
                  :class="
                    flowStatus.paper43
                      ? 'writ-flow-spantd-ex writ-flow-td'
                      : 'writ-flow-spantd writ-flow-td'
                  "
                >
                  <img
                    v-if="flowStatus.paper43"
                    :src="
                      flowStatus.paper43 === 'save'
                        ? ''
                        : require('../assets/image/file.png')
                    "
                    :title="
                      flowStatus.paper43 === 'save' ? '已保存' : '已归档'
                    "
                    alt=""
                  />
                  <span
                    @click="cmdEditDoc('let212', '罚款收缴', '43')"
                    class="flow-span"
                    >罚款收缴{{paperCount.count43 && paperCount.count43 > 1 ? `(${paperCount.count43})` : ''}}</span
                  >
                  <i
                    class="el-icon-plus create-icon"
                    title="添加"
                    @click="addPaper('let212', '罚款收缴', '43')"
                  ></i>
                </td>
              </tr>
            </table>
          </fieldset>
        </div>
      </div>
    </div>
    <!-- 监察文书流程 -->
    <table v-else style="width: 100%; border-collapse: collapse; margin: 0 auto">
      <tr>
        <!-- tab 标签 -->
        <td style="padding: 0">
          <table
            style="width: 495px; border-collapse: collapse; margin-left: 10px"
            id="tabMenu"
          >
            <tr>
              <td
                :class="
                  activeFlowTab === 'flow-1'
                    ? 'tabMenu tabMenuActive'
                    : 'tabMenu tabMenuNormal'
                "
                @click="doTabSwitch(1)"
                id="tabMenu-1"
              >
                <span class="{tab-let0}"></span>现场检查
              </td>
              <td style="width: 5px"></td>
              <td
                :class="
                  activeFlowTab === 'flow-2'
                    ? 'tabMenu tabMenuActive'
                    : 'tabMenu tabMenuNormal'
                "
                @click="doTabSwitch(2)"
                id="tabMenu-2"
              >
                <span class="{tab-let1}"></span>行政处罚
              </td>
              <td style="width: 5px"></td>
              <td
                :class="
                  activeFlowTab === 'flow-3'
                    ? 'tabMenu tabMenuActive'
                    : 'tabMenu tabMenuNormal'
                "
                @click="doTabSwitch(3)"
                id="tabMenu-3"
              >
                <span class="{tab-let2}"></span>行政强制
              </td>
              <td style="width: 5px"></td>
              <td
                :class="
                  activeFlowTab === 'flow-4'
                    ? 'tabMenu tabMenuActive'
                    : 'tabMenu tabMenuNormal'
                "
                @click="doTabSwitch(4)"
                id="tabMenu-4"
              >
                <span class="{tab-let3}"></span>其他
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td
          style="
            border-top: solid 2px #093a83;
            border-collapse: collapse;
            background-color: #fff;
          "
        >
          <!-- 现场检查 -->
          <div v-if="activeFlowTab === 'flow-1'" style="padding: 16px">
            <!-- <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />一般检查
            </div> -->
            <fieldset class="borderColor" style="margin-bottom: 0px;">
              <legend>一般检查</legend>
              <table
                style="
                  width: 626px;
                  height: 65px;
                  border-collapse: collapse;
                  margin-left: 20px;
                "
              >
                <tr class="writ-flow-row">
                  <!-- <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td> -->
                  <td class="arrows">➤</td>
                  <td
                    :class="
                      flowStatus.paper22
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper22"
                      :src="
                        flowStatus.paper22 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper22 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let100', '检查方案', '22')"
                      @contextmenu.prevent="event => onContextmenu(event, '22')"
                      class="flow-span"
                      >检查方案{{paperCount.count22 && paperCount.count22 > 1 ? `(${paperCount.count22})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let100', '检查方案', '22')"
                    ></i>
                  </td>
                  <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td> -->
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper1
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper1"
                      :src="
                        flowStatus.paper1 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper1 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <i
                      v-if="dangerStatus.danger1 && dangerStatus.danger1.length > 0"
                      class="el-icon-warning-outline danger-info-icon"
                      :title="`隐患数：${dangerStatus.danger1.length}`"
                      @click="showDangerInfo('1')"
                    ></i>
                    <span
                      @click="cmdEditDoc('let101', '现场检查笔录', '1')"
                      class="flow-span"
                      >现场检查笔录{{paperCount.count1 && paperCount.count1 > 1 ? `(${paperCount.count1})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let101', '现场检查笔录', '1')"
                    ></i>
                  </td>
                  <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td> -->
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper2
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper2"
                      :src="
                        flowStatus.paper2 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper2 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let102', '现场处理决定书', '2')"
                      class="flow-span"
                      >现场处理 <br />决定书{{paperCount.count2 && paperCount.count2 > 1 ? `(${paperCount.count2})` : ''}}</span
                    >
                    <i
                      v-if="dangerStatus.danger2 && dangerStatus.danger2.length > 0"
                      class="el-icon-warning-outline danger-info-icon"
                      :title="`隐患数：${dangerStatus.danger2.length}`"
                      @click="showDangerInfo('2')"
                    ></i>
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let102', '现场处理决定书', '2')"
                    ></i>
                  </td>
                  <!-- <td style="width:28px;"><img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" /></td>
                <td class="writ-flow-spantd-ex"><a class="{let103}" href="javascript:cmdEditDoc('let103','责令限期整改指令书','5')">责令限期整改<br />指令书</a></td>-->
                  <!-- <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c7.png" style="height: 65px;" />
                </td> -->
                </tr>
              </table>
            </fieldset>
            <!-- <br />
            <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />复查
            </div> -->
            <fieldset class="borderColor">
              <legend>复查</legend>
              <table
                style="
                  width: 626px;
                  height: 65px;
                  border-collapse: collapse;
                  margin-left: 20px;
                "
              >
                <tr class="writ-flow-row">
                  <!-- <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td> -->
                  <td class="arrows">➤</td>
                  <td
                    :class="
                      flowStatus.paper42
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper42"
                      :src="
                        flowStatus.paper42 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper42 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let103', '检查方案(复查)', '42')"
                      class="flow-span"
                      >检查方案(复查){{paperCount.count42 && paperCount.count42 > 1 ? `(${paperCount.count42})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let103', '检查方案(复查)', '42')"
                    ></i>
                  </td>
                  <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td> -->
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper13
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper13"
                      :src="
                        flowStatus.paper13 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper13 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let104', '复查意见书', '13')"
                      class="flow-span"
                      >复查意见书{{paperCount.count13 && paperCount.count13 > 1 ? `(${paperCount.count13})` : ''}}</span
                    >
                    <i
                      v-if="dangerStatus.danger13 && dangerStatus.danger13.length > 0"
                      class="el-icon-warning-outline danger-info-icon"
                      :title="`隐患数：${dangerStatus.danger13.length}`"
                      @click="showDangerInfo('13')"
                    ></i>
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let104', '复查意见书', '13')"
                    ></i>
                  </td>
                  <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td> -->
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper44
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper44"
                      :src="
                        flowStatus.paper44 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper44 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let105', '隐患整改', '44')"
                      class="flow-span"
                      >隐患整改{{paperCount.count44 && paperCount.count44 > 1 ? `(${paperCount.count44})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let105', '隐患整改', '44')"
                    ></i>
                  </td>
                  <!-- <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c7.png" style="height: 65px;" />
                </td> -->
                </tr>
              </table>
            </fieldset>
            <!-- <br /> -->
            <!-- <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />实施检查
            </div> -->
            <fieldset class="borderColor">
              <legend>实施检查</legend>
              <table
                style="
                  width: 836px;
                  height: 65px;
                  border-collapse: collapse;
                  margin-left: 20px;
                "
              >
                <tr class="writ-flow-row">
                  <!-- <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td> -->
                  <td class="arrows">➤</td>
                  <td
                    :class="
                      flowStatus.paper3
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper3"
                      :src="
                        flowStatus.paper3 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper3 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let106', '撤出作业人员命令书', '3')"
                      class="flow-span"
                      >撤出作业人员 <br />命令书{{paperCount.count3 && paperCount.count3 > 1 ? `(${paperCount.count3})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let106', '撤出作业人员命令书', '3')"
                    ></i>
                  </td>
                  <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td> -->
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper23
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper23"
                      :src="
                        flowStatus.paper23 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper23 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let107', '抽样取证通知书', '23')"
                      class="flow-span"
                      >抽样取证通知书{{paperCount.count23 && paperCount.count23 > 1 ? `(${paperCount.count23})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let107', '抽样取证通知书', '23')"
                    ></i>
                  </td>
                  <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td> -->
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper25
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper25"
                      :src="
                        flowStatus.paper25 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper25 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="
                        cmdEditDoc('let108', '先行登记保存证据通知书', '25')
                      "
                      class="flow-span"
                      >先行登记保存证据<br />通知书{{paperCount.count25 && paperCount.count25 > 1 ? `(${paperCount.count25})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="
                        addPaper('let108', '先行登记保存证据通知书', '25')
                      "
                    ></i>
                  </td>
                  <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td> -->
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper27
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper27"
                      :src="
                        flowStatus.paper27 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper27 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="
                        cmdEditDoc('let109', '先行登记保存证据处理决定书', '27')
                      "
                      class="flow-span"
                      >先行登记保存证据<br />处理决定书{{paperCount.count27 && paperCount.count27 > 1 ? `(${paperCount.count27})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="
                        addPaper('let109', '先行登记保存证据处理决定书', '27')
                      "
                    ></i>
                  </td>
                  <!-- <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c6.png" style="height: 65px;" />
                </td> -->
                </tr>
              </table>
              <br />
              <!-- <div style="height:32px;line-height:32px;font-weight:bold;color:#333;"><img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />证据</div> -->
              <table
                style="
                  width: 836px;
                  height: 65px;
                  border-collapse: collapse;
                  margin-left: 20px;
                "
              >
                <tr class="writ-flow-row">
                  <!-- <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td> -->
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper32
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper32"
                      :src="
                        flowStatus.paper32 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper32 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let110', '查封（扣押）决定书', '32')"
                      class="flow-span"
                      >查封(扣押)<br />决定书{{paperCount.count32 && paperCount.count32 > 1 ? `(${paperCount.count32})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let110', '查封（扣押）决定书', '32')"
                    ></i>
                  </td>
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper46
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper46"
                      :src="
                        flowStatus.paper46 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper46 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="
                        cmdEditDoc('let114', '延长查封（扣押）期限决定书', '46')
                      "
                      class="flow-span"
                      >延长查封（扣押）<br />期限决定书{{paperCount.count46 && paperCount.count46 > 1 ? `(${paperCount.count46})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="
                        addPaper('let114', '延长查封（扣押）期限决定书', '46')
                      "
                    ></i>
                  </td>
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper47
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper47"
                      :src="
                        flowStatus.paper47 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper47 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="
                        cmdEditDoc('let115', '查封（扣押）处理决定书', '47')
                      "
                      class="flow-span"
                      >查封（扣押）处理<br />决定书{{paperCount.count47 && paperCount.count47 > 1 ? `(${paperCount.count47})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="
                        addPaper('let115', '查封（扣押）处理决定书', '47')
                      "
                    ></i>
                  </td>
                  <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td> -->
                  <!-- <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper34
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper34"
                      :src="
                        flowStatus.paper34 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper34 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="
                        cmdEditDoc('let111', '解除查封（扣押）决定书', '34')
                      "
                      class="flow-span"
                      >解除查封(扣押) <br />决定书</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="
                        addPaper('let111', '解除查封（扣押）决定书', '34')
                      "
                    ></i>
                  </td> -->
                  <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td> -->
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper48
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper48"
                      :src="
                        flowStatus.paper48 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper48 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="
                        cmdEditDoc(
                          'let111',
                          '停供电（停供民用爆炸物品）决定书',
                          '48'
                        )
                      "
                      class="flow-span"
                      >停供电（停供民用<br />爆炸物品）决定书{{paperCount.count48 && paperCount.count48 > 1 ? `(${paperCount.count48})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="
                        addPaper(
                          'let111',
                          '停供电（停供民用爆炸物品）决定书',
                          '48'
                        )
                      "
                    ></i>
                  </td>
                </tr>
              </table>
              <br />
              <table
                style="
                  width: 836px;
                  height: 65px;
                  border-collapse: collapse;
                  margin-left: 20px;
                "
              >
                <tr class="writ-flow-row">
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper37
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper37"
                      :src="
                        flowStatus.paper37 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper37 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="
                        cmdEditDoc(
                          'let112',
                          '停供电(停供民用爆炸物品)通知书',
                          '37'
                        )
                      "
                      class="flow-span"
                      >停供电(停供民用<br />爆炸物品)通知书{{paperCount.count37 && paperCount.count37 > 1 ? `(${paperCount.count37})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="
                        addPaper(
                          'let112',
                          '停供电(停供民用爆炸物品)通知书',
                          '37'
                        )
                      "
                    ></i>
                  </td>
                  <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td> -->
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper38
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper38"
                      :src="
                        flowStatus.paper38 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper38 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="
                        cmdEditDoc(
                          'let113',
                          '解除停供电(停供民用爆炸物品)通知书',
                          '38'
                        )
                      "
                      class="flow-span"
                      >解除停供电(停供民<br />用爆炸物品)通知书{{paperCount.count38 && paperCount.count38 > 1 ? `(${paperCount.count38})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="
                        addPaper(
                          'let113',
                          '解除停供电(停供民用爆炸物品)通知书',
                          '38'
                        )
                      "
                    ></i>
                  </td>
                  <!-- <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c6.png" style="height: 65px;" />
                </td> -->
                </tr>
              </table>
            </fieldset>
          </div>
          <!-- 行政处罚 -->
          <div v-else-if="activeFlowTab === 'flow-2'" style="padding: 16px">
            <!-- <div style="height:32px;line-height:32px;font-weight:bold;color:#333;"><img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />简易程序</div>
                <table style="width: 206px;height:65px;border-collapse: collapse;">
                    <tr>
                        <td style="width:12px;"><img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" /></td>
                        <td class="writ-flow-spantd"><a class="{let200}" href="javascript:cmdEditDoc('let200','行政（当场）处罚决定书','27')">行政（当场）<br />处罚决定书</a></td>
                        <td style="width:12px;"><img src="../assets/image/doc-flow_r1_c7.png" style="height: 65px;" /></td>
                    </tr>
                </table>
            <br />-->
            <!-- <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />一般程序
            </div> -->
            <fieldset class="borderColor">
              <legend>一般程序</legend>
              <table
                style="
                  width: 836px;
                  height: 65px;
                  border-collapse: collapse;
                  margin-left: 20px;
                "
              >
                <tr class="writ-flow-row">
                  <!-- <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td> -->
                  <td class="arrows">➤</td>
                  <td
                    :class="
                      flowStatus.paper4
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper4"
                      :src="
                        flowStatus.paper4 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper4 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let201', '立案决定书', '4')"
                      class="flow-span"
                      >立案决定书{{paperCount.count4 && paperCount.count4 > 1 ? `(${paperCount.count4})` : ''}}</span
                    >
                    <i
                      v-if="dangerStatus.danger4 && dangerStatus.danger4.length > 0"
                      class="el-icon-warning-outline danger-info-icon"
                      :title="`隐患数：${dangerStatus.danger4.length}`"
                      @click="showDangerInfo('4')"
                    ></i>
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let201', '立案决定书', '4')"
                    ></i>
                  </td>
                  <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td> -->
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper5
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="unreceivedStatus.unreceived5"
                      src="@/views/writ-flow/assets/image/paper-send-icon.png"
                      title="有未接收的文书，请点击接收"
                      style="top: 42px; left: 8px; cursor: pointer;"
                      @click="receivePaper('5')"
                    />
                    <img
                      v-if="flowStatus.paper5"
                      :src="
                        flowStatus.paper5 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper5 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let202', '调查取证笔录', '5')"
                      class="flow-span"
                      >调查取证笔录{{paperCount.count5 && paperCount.count5 > 1 ? `(${paperCount.count5})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let202', '调查取证笔录', '5')"
                    ></i>
                  </td>
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper6
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper6"
                      :src="
                        flowStatus.paper6 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper6 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let204', '行政处罚告知书', '6')"
                      class="flow-span"
                      >行政处罚告知书{{paperCount.count6 && paperCount.count6 > 1 ? `(${paperCount.count6})` : ''}}</span
                    >
                    <i
                      v-if="dangerStatus.danger6 && dangerStatus.danger6.length > 0"
                      class="el-icon-warning-outline danger-info-icon"
                      :title="`隐患数：${dangerStatus.danger6.length}`"
                      @click="showDangerInfo('6')"
                    ></i>
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let204', '行政处罚告知书', '6')"
                    ></i>
                  </td>
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper30
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper30"
                      :src="
                        flowStatus.paper30 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper30 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let205', '陈述、申辩笔录', '30')"
                      class="flow-span"
                      >陈述、申辩笔录{{paperCount.count30 && paperCount.count30 > 1 ? `(${paperCount.count30})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let205', '陈述、申辩笔录', '30')"
                    ></i>
                  </td>
                </tr>
              </table>
              <br />
              <table
                style="
                  width: 836px;
                  height: 65px;
                  border-collapse: collapse;
                  margin-left: 20px;
                "
              >
                <tr class="writ-flow-row">
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper49
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper49"
                      :src="
                        flowStatus.paper49 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper49 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span @click="cmdEditDoc('let215','行政执法决定法制审核意见书', '49')" class="flow-span">
                      行政执法决定法制<br />审核意见书{{paperCount.count49 && paperCount.count49 > 1 ? `(${paperCount.count49})` : ''}}
                    </span>
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let215', '行政执法决定法制审核意见书', '49')"
                    ></i>
                  </td>
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper36
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper36"
                      :src="
                        flowStatus.paper36 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper36 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let203', '案件处理呈报书', '36')"
                      class="flow-span"
                      >案件处理呈报书{{paperCount.count36 && paperCount.count36 > 1 ? `(${paperCount.count36})` : ''}}</span
                    >
                    <i
                      v-if="dangerStatus.danger36 && dangerStatus.danger36.length > 0"
                      class="el-icon-warning-outline danger-info-icon"
                      :title="`隐患数：${dangerStatus.danger36.length}`"
                      @click="showDangerInfo('36')"
                    ></i>
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let203', '案件处理呈报书', '36')"
                    ></i>
                  </td>
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper50
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper50"
                      :src="
                        flowStatus.paper50 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper50 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span @click="cmdEditDoc('let216','集体讨论记录', '50')" class="flow-span">
                      集体讨论记录{{paperCount.count50 && paperCount.count50 > 1 ? `(${paperCount.count50})` : ''}}
                    </span>
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let216', '集体讨论记录', '50')"
                    ></i>
                  </td>
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper8
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper8"
                      :src="
                        flowStatus.paper8 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper8 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let206', '行政处罚决定书', '8')"
                      class="flow-span"
                      >行政处罚决定书{{paperCount.count8 && paperCount.count8 > 1 ? `(${paperCount.count8})` : ''}}</span
                    >
                    <i
                      v-if="dangerStatus.danger8 && dangerStatus.danger8.length > 0"
                      class="el-icon-warning-outline danger-info-icon"
                      :title="`隐患数：${dangerStatus.danger8.length}`"
                      @click="showDangerInfo('8')"
                    ></i>
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let206', '行政处罚决定书', '8')"
                    ></i>
                  </td>
                  <!-- <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper39
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper39"
                      :src="
                        flowStatus.paper39 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper39 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let208', '行政决定履行催告书', '39')"
                      class="flow-span"
                      >行政决定履行 <br />催告书</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let208', '行政决定履行催告书', '39')"
                    ></i>
                  </td> -->
                </tr>
              </table>
              <br />
              <table
                style="
                  width: 836px;
                  height: 65px;
                  border-collapse: collapse;
                  margin-left: 20px;
                "
              >
                <tr class="writ-flow-row">
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper9
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper9"
                      :src="
                        flowStatus.paper9 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper9 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let207', '送达收执', '9')"
                      class="flow-span"
                      >送达收执{{paperCount.count9 && paperCount.count9 > 1 ? `(${paperCount.count9})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let207', '送达收执', '9')"
                    ></i>
                  </td>
                </tr>
              </table>
            </fieldset>
            <!-- <br /> -->
            <!-- <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />听证程序
            </div> -->
            <fieldset class="borderColor">
              <legend>听证程序</legend>
              <table
                style="
                  width: 626px;
                  height: 65px;
                  border-collapse: collapse;
                  margin-left: 20px;
                "
              >
                <tr class="writ-flow-row">
                  <!-- <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td> -->
                  <td class="arrows">➤</td>
                  <td
                    :class="
                      flowStatus.paper28
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper28"
                      :src="
                        flowStatus.paper28 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper28 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let209', '听证通知书', '28')"
                      class="flow-span"
                      >听证通知书{{paperCount.count28 && paperCount.count28 > 1 ? `(${paperCount.count28})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let209', '听证通知书', '28')"
                    ></i>
                  </td>
                  <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td> -->
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper29
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper29"
                      :src="
                        flowStatus.paper29 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper29 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="
                        cmdEditDoc('let210', '不予受理听证申请通知书', '29')
                      "
                      class="flow-span"
                      >不予受理听证申请<br />通知书{{paperCount.count29 && paperCount.count29 > 1 ? `(${paperCount.count29})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="
                        addPaper('let210', '不予受理听证申请通知书', '29')
                      "
                    ></i>
                  </td>
                  <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td> -->
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper7
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper7"
                      :src="
                        flowStatus.paper7 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper7 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let211', '听证笔录', '7')"
                      class="flow-span"
                      >听证笔录{{paperCount.count7 && paperCount.count7 > 1 ? `(${paperCount.count7})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let211', '听证笔录', '7')"
                    ></i>
                  </td>
                  <!-- <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c7.png" style="height: 65px;" />
                </td> -->
                </tr>
              </table>
            </fieldset>
            <!-- <br /> -->
            <!-- <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />案件结案
            </div> -->
            <fieldset class="borderColor" style="margin-bottom: 0px;">
              <legend>案件结案</legend>
              <table
                style="
                  width: 626px;
                  height: 65px;
                  border-collapse: collapse;
                  margin-left: 20px;
                "
              >
                <tr class="writ-flow-row">
                  <!-- <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td> -->
                  <td class="arrows">➤</td>
                  <td
                    :class="
                      flowStatus.paper43
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper43"
                      :src="
                        flowStatus.paper43 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper43 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let212', '罚款收缴', '43')"
                      class="flow-span"
                      >罚款收缴{{paperCount.count43 && paperCount.count43 > 1 ? `(${paperCount.count43})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let212', '罚款收缴', '43')"
                    ></i>
                  </td>
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper51
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper51"
                      :src="
                        flowStatus.paper51 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper51 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span @click="cmdEditDoc('let217','罚款缴纳催告书', '51')" class="flow-span">
                      罚款缴纳催告书{{paperCount.count51 && paperCount.count51 > 1 ? `(${paperCount.count51})` : ''}}
                    </span>
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let217', '罚款缴纳催告书', '51')"
                    ></i>
                  </td>
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper52
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper52"
                      :src="
                        flowStatus.paper52 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper52 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span @click="cmdEditDoc('let218','加处罚款决定书', '52')" class="flow-span">
                      加处罚款决定书{{paperCount.count52 && paperCount.count52 > 1 ? `(${paperCount.count52})` : ''}}
                    </span>
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let218', '加处罚款决定书', '52')"
                    ></i>
                  </td>
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper53
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper53"
                      :src="
                        flowStatus.paper53 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper53 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span @click="cmdEditDoc('let219','延期（分期）缴纳罚款决定书', '53')" class="flow-span">
                      延期（分期）缴纳<br />罚款决定书{{paperCount.count53 && paperCount.count53 > 1 ? `(${paperCount.count53})` : ''}}
                    </span>
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let219', '延期（分期）缴纳罚款决定书', '53')"
                    ></i>
                  </td>
                </tr>
              </table>
              <br />
              <table
                style="
                  width: 626px;
                  height: 65px;
                  border-collapse: collapse;
                  margin-left: 20px;
                "
              >
                <tr class="writ-flow-row">
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper14
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper14"
                      :src="
                        flowStatus.paper14 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper14 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let213', '案件结案报告', '14')"
                      class="flow-span"
                      >案件结案报告{{paperCount.count14 && paperCount.count14 > 1 ? `(${paperCount.count14})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let213', '案件结案报告', '14')"
                    ></i>
                  </td>
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper15
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper15"
                      :src="
                        flowStatus.paper15 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper15 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="
                        cmdEditDoc('let214', '执法案卷（首页）及目录', '15')
                      "
                      class="flow-span"
                      >执法案卷（首页）<br />及目录{{paperCount.count15 && paperCount.count15 > 1 ? `(${paperCount.count15})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="
                        addPaper('let214', '执法案卷（首页）及目录', '15')
                      "
                    ></i>
                  </td>
                </tr>
              </table>
            </fieldset>
          </div>
          <!-- 行政强制 -->
          <div v-else-if="activeFlowTab === 'flow-3'" style="padding: 16px">
            <!-- <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />公开裁定
            </div> -->
            <fieldset class="borderColor">
              <legend>公开裁定</legend>
              <table
                style="
                  width: 206px;
                  height: 65px;
                  border-collapse: collapse;
                  margin-left: 20px;
                "
              >
                <tr class="writ-flow-row">
                  <td class="arrows">➤</td>
                  <td
                    :class="
                      flowStatus.paper31
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper31"
                      :src="
                        flowStatus.paper31 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper31 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="
                        cmdEditDoc('let300', '执法案件公开裁定记录', '31')
                      "
                      class="flow-span"
                      >执法案件公开裁定<br>记录{{paperCount.count31 && paperCount.count31 > 1 ? `(${paperCount.count31})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let300', '执法案件公开裁定记录', '31')"
                    ></i>
                  </td>
                </tr>
              </table>
            </fieldset>
            <fieldset class="borderColor">
              <legend>行政强制执行</legend>
              <table
                style="
                  width: 206px;
                  height: 65px;
                  border-collapse: collapse;
                  margin-left: 20px;
                "
              >
                <tr class="writ-flow-row">
                  <td class="arrows">➤</td>
                  <td
                    :class="
                      flowStatus.paper54
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper54"
                      :src="
                        flowStatus.paper54 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper54 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let309', '行政强制执行事先催告书', '54')"
                      class="flow-span"
                      >行政强制执行事先<br />催告书{{paperCount.count54 && paperCount.count54 > 1 ? `(${paperCount.count54})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let309', '行政强制执行事先催告书', '54')"
                    ></i>
                  </td>
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper18
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper18"
                      :src="
                        flowStatus.paper18 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper18 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let301', '强制执行申请书', '18')"
                      class="flow-span"
                      >强制执行申请书{{paperCount.count18 && paperCount.count18 > 1 ? `(${paperCount.count18})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let301', '强制执行申请书', '18')"
                    ></i>
                  </td>
                </tr>
              </table>
            </fieldset>
            <!-- 2022/1/1去掉 -->
            <fieldset v-if="false" class="borderColor" style="margin-bottom: 0px;">
              <legend>行政复议</legend>
              <table
                style="
                  width: 836px;
                  height: 65px;
                  border-collapse: collapse;
                  margin-left: 20px;
                "
              >
                <tr class="writ-flow-row">
                  <td class="arrows">➤</td>
                  <td
                    :class="
                      flowStatus.paper10
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper10"
                      :src="
                        flowStatus.paper10 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper10 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let302', '行政复议申请笔录', '10')"
                      class="flow-span"
                      >行政复议申请笔录</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let302', '行政复议申请笔录', '10')"
                    ></i>
                  </td>
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper41
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper41"
                      :src="
                        flowStatus.paper41 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper41 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="
                        cmdEditDoc('let303', '不予受理行政复议申请决定书', '41')
                      "
                      class="flow-span"
                      >不予受理行政复议 <br />申请决定书</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="
                        addPaper('let303', '不予受理行政复议申请决定书', '41')
                      "
                    ></i>
                  </td>
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper11
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper11"
                      :src="
                        flowStatus.paper11 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper11 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let304', '行政复议调查笔录', '11')"
                      class="flow-span"
                      >行政复议调查笔录</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let304', '行政复议调查笔录', '11')"
                    ></i>
                  </td>
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper12
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper12"
                      :src="
                        flowStatus.paper12 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper12 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let305', '行政复议决定书', '12')"
                      class="flow-span"
                      >行政复议决定书</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let305', '行政复议决定书', '12')"
                    ></i>
                  </td>
                </tr>
              </table>
            </fieldset>
          </div>
          <!-- 其他 -->
          <div v-else-if="activeFlowTab === 'flow-4'" style="padding: 16px">
            <fieldset class="borderColor">
              <legend>其他</legend>
              <table
                style="
                  width: 626px;
                  height: 65px;
                  border-collapse: collapse;
                  margin-left: 20px;
                "
              >
                <tr class="writ-flow-row">
                  <td class="arrows">➤</td>
                  <!-- 2022/1/1去掉 -->
                  <!-- <td
                    :class="
                      flowStatus.paper35
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper35"
                      :src="
                        flowStatus.paper35 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper35 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let400', '移送案件呈报书', '35')"
                      class="flow-span"
                      >移送案件呈报书</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let400', '移送案件呈报书', '35')"
                    ></i>
                  </td>
                  <td class="arrows">→</td> -->
                  <td
                    :class="
                      flowStatus.paper19
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper19"
                      :src="
                        flowStatus.paper19 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper19 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let401', '移送书', '19')"
                      class="flow-span"
                      >移送书{{paperCount.count19 && paperCount.count19 > 1 ? `(${paperCount.count19})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let401', '移送书', '19')"
                    ></i>
                  </td>
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper20
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper20"
                      :src="
                        flowStatus.paper20 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper20 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let402', '涉嫌犯罪案件移送书', '20')"
                      class="flow-span"
                      >涉嫌犯罪案件<br />移送书{{paperCount.count20 && paperCount.count20 > 1 ? `(${paperCount.count20})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let402', '涉嫌犯罪案件移送书', '20')"
                    ></i>
                  </td>
                  <td class="arrows">→</td>
                  <td
                    :class="
                      flowStatus.paper55
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper55"
                      :src="
                        flowStatus.paper55 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper55 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let408', '行政执法有关事项审批报告', '55')"
                      class="flow-span">
                      行政执法有关事项<br />审批报告{{paperCount.count55 && paperCount.count55 > 1 ? `(${paperCount.count55})` : ''}}
                    </span>
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let408', '行政执法有关事项审批报告', '55')"
                    ></i>
                  </td>
                </tr>
              </table>
            </fieldset>
            <!-- <table style="width: 416px;height:65px;border-collapse: collapse;">
                  <tr>
                    <td style="width:12px;"><img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" /></td>
                    <td class="writ-flow-spantd"><a class="{let404}" href="javascript:cmdEditDoc('let404','案卷首页','39')">案卷首页</a></td>
                    <td style="width:28px;"><img src="../assets/image/doc-flow_r1_c3-1.png" style="height: 65px;" /></td>
                    <td class="writ-flow-spantd-ex"><a class="{let405}" href="javascript:cmdEditDoc('let405','卷内目录','40')">卷内目录</a></td>
                    <td style="width:12px;"><img src="../assets/image/doc-flow_r1_c6.png" style="height: 65px;" /></td>
                  </tr>
            </table>-->
            <!-- <br /> -->
            <!-- <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />证据上传
            </div> -->
            <fieldset class="borderColor" style="margin-bottom: 0px;">
              <legend>证据上传</legend>
              <table
                style="
                  width: 206px;
                  height: 65px;
                  border-collapse: collapse;
                  margin-left: 20px;
                "
              >
                <tr class="writ-flow-row">
                  <!-- <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td> -->
                  <td class="arrows">➤</td>
                  <td
                    :class="
                      flowStatus.paper21
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper21"
                      :src="
                        flowStatus.paper21 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper21 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let406', '影音证据', '21')"
                      class="flow-span"
                      >影音证据{{paperCount.count21 && paperCount.count21 > 1 ? `(${paperCount.count21})` : ''}}</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let406', '影音证据', '21')"
                    ></i>
                  </td>
                  <!-- <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c7.png" style="height: 65px;" />
                </td> -->
                </tr>
              </table>
            </fieldset>
            <fieldset v-if="showJczfReport" class="borderColor">
              <legend>报告上传</legend>
              <table
                style="
                  width: 206px;
                  height: 65px;
                  border-collapse: collapse;
                  margin-left: 20px;
                "
              >
                <tr class="writ-flow-row">
                  <!-- <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td> -->
                  <td class="arrows">➤</td>
                  <td
                    :class="
                      flowStatus.paper45
                        ? 'writ-flow-spantd-ex writ-flow-td'
                        : 'writ-flow-spantd writ-flow-td'
                    "
                  >
                    <img
                      v-if="flowStatus.paper45"
                      :src="
                        flowStatus.paper45 === 'save'
                          ? ''
                          : require('../assets/image/file.png')
                      "
                      :title="
                        flowStatus.paper45 === 'save' ? '已保存' : '已归档'
                      "
                      alt=""
                    />
                    <span
                      @click="cmdEditDoc('let407', '监察执法报告', '45')"
                      class="flow-span"
                      >监察执法报告</span
                    >
                    <!-- <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let407', '监察执法报告', '45')"
                    ></i> -->
                  </td>
                  <!-- <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c7.png" style="height: 65px;" />
                </td> -->
                </tr>
              </table>
            </fieldset>
          </div>
        </td>
      </tr>
    </table>
    <receive-paper
      :visible="visible.receivePaper"
      :corp-data="corpData"
      @close="closeDialog"
      @recevice-paper="recevicePaper"
    ></receive-paper>
    <!-- 隐患项列表详情展示 -->
    <show-danger-items
      :visible="visible.showDangerItems"
      :corp-data="corpData"
      :danger-list="showDangerList"
      @close="closeDialog"
    ></show-danger-items>
    <select-delete-paper
      :visible="visible.selectDelPaper"
      :paperList="deletePaperList"
      @close="closeDialog"
      @confirm="confirmDelete"
    ></select-delete-paper>
  </div>
</template>


<script>
import GoDB from "@/utils/godb.min.js";
import receivePaper from "@/views/writ-flow/components/receive-paper";
import showDangerItems from '@/components/show-danger-items'
import selectDeletePaper from "@/views/writ-flow/components/select-delete-paper";
export default {
  name: "WritFlow",
  components: {
    receivePaper,
    showDangerItems,
    selectDeletePaper
  },
  props: {
    corpData: {
      type: Object,
      default: () => {},
    },
    flowStatus: {
      type: Object,
      default: () => {},
    },
    showJczfReport: { // 是否展示监察执法报告环节
      type: Boolean,
      default: false
    },
    dangerStatus: {
      type: Object,
      default: () => {
        return {
          danger1: [],
          danger2: [],
          danger13: [],
          danger4: [],
          danger36: [],
          danger6: [],
          danger8: [],
        }
      }
    },
    paperCount: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      activeFlowTab: "flow-1",
      visible: {
        receivePaper: false,
        showDangerItems: false,
        selectDelPaper: false, // 选择要删除的文书
      },
      showDangerList: [], // 展示隐患项列表详情的数据
      createdSelectedPaper: null, // 选中的需要新建的文书Id
      loading: {
        btn: false,
      },
      deletePaperList: [], // 可删除的文书列表
    };
  },
  created() {
    this.activeFlowTab = 'flow-1'
  },
  watch: {
    'corpData.caseType'(val) {
      this.activeFlowTab = 'flow-1'
    }
  },
  computed: {
    unreceivedStatus() {
      let status = {};
      if (
        this.$store.state.unreceivedPaper &&
        this.$store.state.unreceivedPaper.length > 0
      ) {
        this.$store.state.unreceivedPaper.map((paper) => {
          if (paper.companyId === this.corpData.corpId) {
            let paperContentString = paper.paperContent;
            let paperContent = JSON.parse(paperContentString);
            // 根据isSelected区分是否已经接收完毕，如果有未接收则加入状态中
            if (paperContent.isSelected === false) {
              let key = `unreceived${paperContent.paperType}`;
              if (!status[key]) {
                status[key] = true;
              }
            }
          }
        });
      }
      return status;
    },
  },
  methods: {
    doTabSwitch(tab) {
      // 切换现场检查、行政处罚、行政强制和其他的tab切换
      if (this.activeFlowTab !== `flow-${tab}`)
        this.activeFlowTab = `flow-${tab}`;
    },
    async cmdEditDoc(
      letId,
      docTypeName,
      docTypeNo,
      isCreated = false,
      isCurPaper = null
    ) {
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
            isCreated,
            isCurPaper,
          },
        });
      } else {
        this.$message.error("请在左侧双击该企业,启动该企业的执法检查");
      }
    },
    createPaper (val) {
      if (val) {
        let curPaper = this.$store.state.dictionary.monitorPaperType.filter(item => item.id === val)[0]
        this.addPaper(curPaper.page, curPaper.name, curPaper.id)
        this.createdSelectedPaper = null
      }
    },
    addPaper(letId, docTypeName, docTypeNo) {
      // 添加文书
      this.$confirm(`是否确定添加新的‘${docTypeName}’文书？`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        dangerouslyUseHTMLString: true,
        type: "warning",
      })
        .then(() => {
          // 进入文书页面,isCreated传true
          this.cmdEditDoc(letId, docTypeName, docTypeNo, true);
        })
        .catch(() => {});
    },
    receivePaper(paperType) {
      this.visible.receivePaper = true;
    },
    closeDialog({ page }) {
      this.visible[page] = false;
    },
    recevicePaper({ data }) {
      // 接收文书后：或查看文书时
      // 关闭弹窗
      this.visible.receivePaper = false;
      // 进入接收的文书中
      let page = this.$store.state.dictionary.monitorPaperType.filter(
        (item) => item.id === data.paperContent.paperType
      );
      let isCurPaper = data.paperContent;
      this.cmdEditDoc(
        page[0].page,
        data.paperContent.name,
        data.paperContent.paperType,
        false,
        isCurPaper
      );
    },
    showDangerInfo (paperType) {
      // 展示文书隐患信息
      this.visible.showDangerItems = true;
      let showDangerList = this.dangerStatus[`danger${paperType}`]
      for (let i = 0; i < showDangerList.length; i++) {
        let item = showDangerList[i]
        item.isSeriousValue = item.isSerious === '1' ? '重大隐患' : '一般隐患'
        item.isReviewValue = item.isReview === '1' ? '是' : '否'
        item.personPenalty = item.selectedType === '个人' ? (item.penaltyDescFine ? item.penaltyDescFine / 10000 : 0) : ''
        item.orgPenalty = item.selectedType === '单位' ? (item.penaltyDescFine ? item.penaltyDescFine / 10000 : 0) : ''
      }
      this.showDangerList = showDangerList
    },
    onContextmenu(event, paperType) {
      this.$contextmenu({
        items: [
          {
            label: "删除",
            onClick: () => {
              this.delPaper(paperType)
            }
          },
        ],
        event, // 鼠标事件信息
        customClass: "custom-class", // 自定义菜单 class
        zIndex: 3, // 菜单样式 z-index
        minWidth: 60 // 主菜单最小宽度
      });
      return false;
    },
    async delPaper (paperType) {
      if (!this.$store.state.onLine) {
        this.$message.error('当前为离线登录，请联网后删除文书！')
        return
      }
      // 删除文书 判断是否已归档，如果已归档则不可删除
      this.loading.btn = true
      // 获取要删除的文书：
      let db = new GoDB(this.$store.state.DBName)
      let wkPaper = db.table('wkPaper')
      let curPaper = []
      curPaper = await wkPaper.findAll(item => item.paperType === paperType && item.caseId === this.corpData.caseId && item.delFlag === '2')
      await db.close()
      if (curPaper.length === 0) {
        // 如果没有文书则提示没有可以删除的文书，请制作文书
        this.$message.error('没有可以删除的文书，请制作文书!')
      } else if (curPaper.length === 1) {
        // 当只有一个文书时则直接提示删除
        await this.$confirm(`是否确认删除${curPaper[0].name}?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          dangerouslyUseHTMLString: true,
          type: 'warning'
        }).then(async () => {
          // 删除文书
          await this.confirmDeletePaper(curPaper[0])
          // 更新当前文书流程页面
          await this.$parent.showDocTemplet()
        }).catch(() => {
        })
      } else {
        // 当有多个文书的时候，打开弹窗选择要删除的文书
        this.deletePaperList = curPaper
        this.visible.selectDelPaper = true
      }
      this.loading.btn = false
    },
    async confirmDelete (paperList) {
      this.loading.btn = true
      this.visible.selectDelPaper = false
      // 遍历删除每个文书
      for (let i = 0; i < paperList.length; i++) {
        await this.confirmDeletePaper(paperList[i])
      }
      // 更新当前文书流程页面
      await this.$parent.showDocTemplet()
      this.loading.btn = false
    },
    async confirmDeletePaper (curPaper) {
      await this.$http.get(`${this.$store.state.user.userType === 'supervision' ? '/sv' : ''}/local/jczf/delPaperByPaperId?__sid=${this.$store.state.user.userSessId}&paperId=${curPaper.paperId}`)
        .then(async ({ data }) => {
          if (data.status === "200") {
            // 删除成功后，从本地数据库中删除
            let db = new GoDB(this.$store.state.DBName)
            // 删除文书
            let wkPaper = db.table('wkPaper')
            let paperData = await wkPaper.find(item => item.paperId === curPaper.paperId)
            let data = paperData
            data.delFlag = '1'
            await wkPaper.put(data)
            // 删除对应隐患
            let wkDanger = db.table('wkDanger')
            let dangerList = await wkDanger.findAll(item => item.paperId === curPaper.paperId)
            if (dangerList && dangerList.length > 0) {
              dangerList.map(async (danger) => {
                let dangerData = danger
                dangerData.delFlag = '1'
                await wkDanger.put(dangerData)
              })
            }
            await db.close()
            this.$message.success('文书删除成功！')
          } else {
            this.$message.error('删除文书失败，请再次尝试')
          }
        })
        .catch((err) => {
          this.$message.error('删除文书失败，请再次尝试')
          console.log('删除文书失败:', err)
        });
      
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main";
.writ-flow-main {
  border: 2px solid rgb(9, 58, 131);
  border-collapse: collapse;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.enterprisedata-title {
  height: 35px;
  line-height: 35px;
  color: #fff;
  font-size: 18px;
  margin: 0px;
  margin-bottom: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: rgba(#4f83e9, 1);
  display: flex;
  padding: 0 20px;
  align-items: center;
  border-bottom: 2px solid rgb(9, 58, 131);
  .selected-paper {
    flex: 1;
    text-align: right;
  }
}
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
  .arrows {
    margin: 0 15px;
  }
}
//保存前
.writ-flow-spantd {
  width: 182px;
  // background: url("~../assets/image/doc-flow_r1_c2.png") no-repeat;
  background-color: #cbe6ff;
  background-size: 100% 100%;
  border: 1px solid #cbe6ff;
  box-shadow: #666 1px 1px 5px; //边框阴影
  border-radius: 5px;
  text-align: center;
  color: #000;
  position: relative;
  img {
    position: absolute;
    width: 20px;
    top: 8px;
    left: 0;
  }
}
.writ-flow {
  padding: 0px 0px 5px;
  .writ-flow-flow-main {
    min-width: 1000px;
    height: calc(100vh - 400px);
    overflow: auto;
    border-top: 2px solid #093a83;
  }
}
.create-icon {
  position: absolute;
  bottom: 8px;
  right: 3px;
  cursor: pointer;
  color: rgba(#4282e6, 1);
  font-weight: bold;
  font-size: 20px;
  // &:hover {
  //   color: rgba(#4282E6, 0.8);
  // }
}
.danger-info-icon {
  position: absolute;
  top: 8px;
  right: 3px;
  cursor: pointer;
  color: rgba(#E6A23C, 1);
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
  background-color: #b0f6c6;
  border: 1px solid #cbe6ff;
  box-shadow: #666 1px 1px 5px; //边框阴影
  border-radius: 5px;
  text-align: center;
  color: #000;
  position: relative;
  img {
    position: absolute;
    width: 20px;
    top: 6px;
    left: 6px;
  }
}
.flow-span {
  cursor: pointer;
  // &:hover {
  //   font-size: 17px;
  //   color: rgba(#fff, 0.8);
  // }
}
.borderColor {
  border-color: #dff0f7;
  margin-bottom: 10px;
}
</style>

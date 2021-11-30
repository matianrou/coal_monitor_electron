<!-- 执法文书 流程 组件 -->
<template>
  <div class="writ-flow-main">
    <div class="enterprisedata-title">
      <img
        src="@/components/assets/image/letTitle.png"
        style="width: 32px"
      />执法检查
    </div>
    <!-- 监察文书流程 -->
    <table v-if="corpData.caseType === '0'" style="width: 100%; border-collapse: collapse; margin: 0 auto">
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
                      class="flow-span"
                      >检查方案</span
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
                    <span
                      @click="cmdEditDoc('let101', '现场检查笔录', '1')"
                      class="flow-span"
                      >现场检查笔录</span
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
                      >现场处理 <br />决定书</span
                    >
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
                      >检查方案(复查)</span
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
                      >复查意见书</span
                    >
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
                      >隐患整改</span
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
                      >撤出作业人员 <br />命令书</span
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
                      >抽样取证通知书</span
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
                      >先行登记保存证据 <br />通知书</span
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
                      >先行登记保存证据 <br />处理决定书</span
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
                      >查封(扣押) <br />决定书</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let110', '查封（扣押）决定书', '32')"
                    ></i>
                  </td>
                  <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td> -->
                  <td class="arrows">→</td>
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
                  </td>
                  <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td> -->
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
                      >停供电(停供民用 <br />爆炸物品)通知书</span
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
                      >解除停供电(停供民<br />用爆炸物品)通知书</span
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
                      >立案决定书</span
                    >
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
                      >调查取证笔录</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let202', '调查取证笔录', '5')"
                    ></i>
                  </td>
                  <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td> -->
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
                      >案件处理呈报书</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let203', '案件处理呈报书', '36')"
                    ></i>
                  </td>
                  <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td> -->
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
                      >行政处罚告知书</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let204', '行政处罚告知书', '6')"
                    ></i>
                  </td>
                  <!-- <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c6.png" style="height: 65px;" />
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
                  <!-- <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td> -->
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
                      @click="cmdEditDoc('let205', '陈述申辩笔录', '30')"
                      class="flow-span"
                      >陈述申辩笔录</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let205', '陈述申辩笔录', '30')"
                    ></i>
                  </td>
                  <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td> -->
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
                      >行政处罚决定书</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let206', '行政处罚决定书', '8')"
                    ></i>
                  </td>
                  <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td> -->
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
                      >送达收执</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let207', '送达收执', '9')"
                    ></i>
                  </td>
                  <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td> -->
                  <td class="arrows">→</td>
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
                  </td>
                  <!-- <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c6.png" style="height: 65px;" />
                </td> -->
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
                      >听证通知书</span
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
                      >不予受理听证申请 <br />通知书</span
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
                      >听证笔录</span
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
                      >罚款收缴</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let212', '罚款收缴', '43')"
                    ></i>
                  </td>
                  <td class="arrows">→</td>
                  <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td> -->
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
                      >案件结案报告</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let213', '案件结案报告', '14')"
                    ></i>
                  </td>
                  <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td> -->
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
                      >执法案卷（首页） <br />及目录</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="
                        addPaper('let214', '执法案卷（首页）及目录', '15')
                      "
                    ></i>
                  </td>
                  <!-- <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c7.png" style="height: 65px;" />
                </td> -->
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
                  <!-- <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td> -->
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
                      >执法案件公开裁定记录</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let300', '执法案件公开裁定记录', '31')"
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
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />行政强制执行
            </div> -->
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
                  <!-- <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td> -->
                  <td class="arrows">➤</td>
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
                      >强制执行申请书</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let301', '强制执行申请书', '18')"
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
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />行政复议
            </div> -->
            <fieldset class="borderColor" style="margin-bottom: 0px;">
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
                  <!-- <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td> -->
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
                  <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td> -->
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
                  <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td> -->
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
                  <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td> -->
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
                  <!-- <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c6.png" style="height: 65px;" />
                </td> -->
                </tr>
              </table>
            </fieldset>
          </div>
          <!-- 其他 -->
          <div v-else-if="activeFlowTab === 'flow-4'" style="padding: 16px">
            <!-- <div style="height:32px;line-height:32px;font-weight:bold;color:#333;">
              <img src="@/components/assets/image/letTitle.png" style="vertical-align:middle;" />其他
            </div> -->
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
                  <!-- <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c1.png" style="height: 65px;" />
                </td> -->
                  <td class="arrows">➤</td>
                  <td
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
                  <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" />
                </td> -->
                  <td class="arrows">→</td>
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
                      >移送书</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let401', '移送书', '19')"
                    ></i>
                  </td>
                  <!-- <td style="width:28px;">
                  <img src="../assets/image/doc-flow_r1_c5.png" style="height: 65px;" />
                </td> -->
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
                      >涉嫌犯罪案件 <br />移送书</span
                    >
                    <i
                      class="el-icon-plus create-icon"
                      title="添加"
                      @click="addPaper('let402', '涉嫌犯罪案件移送书', '20')"
                    ></i>
                  </td>
                  <!--<td style="width:28px;"><img src="../assets/image/doc-flow_r1_c3.png" style="height: 65px;" /></td>
                <td class="writ-flow-spantd-ex"><a class="{let403}" href="#">查封扣押处理<br />决定书</a></td>-->
                  <!-- <td style="width:12px;">
                  <img src="../assets/image/doc-flow_r1_c7.png" style="height: 65px;" />
                </td> -->
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
                      >影音证据</span
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
    <div v-else class="writ-flow">
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
                    >立案决定书</span
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
                    >调查取证笔录</span
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
                    >案件处理呈报书</span
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
                    >行政处罚告知书</span
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
                    >行政处罚决定书</span
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
                    >送达收执</span
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
                    >罚款收缴</span
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
    <!-- 事故文书流程 -->
    <receive-paper
      :visible="visible.receivePaper"
      :corp-data="corpData"
      @close="closeDialog"
      @recevice-paper="recevicePaper"
    ></receive-paper>
  </div>
</template>


<script>
import receivePaper from "@/views/writ-flow/components/receive-paper";
export default {
  name: "WritFlow",
  components: {
    receivePaper,
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
    }
  },
  data() {
    return {
      activeFlowTab: "flow-1",
      visible: {
        receivePaper: false,
      },
    };
  },
  created() {
    this.activeFlowTab = 'flow-1'
  },
  watch: {
    'corpData.caseType'(val) {
      if (val) {
        this.activeFlowTab = 'flow-1'
      }
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
            if (!paperContent.isSelected === false) {
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
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: rgba(#4f83e9, 1);
  display: flex;
  padding: 0 20px;
  align-items: center;
  border-bottom: 2px solid rgb(9, 58, 131);
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
.borderColor {
  border-color: #dff0f7;
  margin-bottom: 10px;
}
</style>

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
    <div>
      <el-tabs v-model="activeFlowTab" type="card">
        <el-tab-pane 
          v-for="(item) in tabList"
          :key="item.id"
          :label="item.name">
          <div style="padding: 16px">
            <div 
              v-for="first in showColList"
              :key="first.id">
              <div 
                v-if="first.name !== '报告上传' || showJczfReport"
                class="writ-flow-card">
                <span class="writ-flow-card-title">{{first.name}}</span>
                <div
                  v-for="(second, secondIndex) in first.children"
                  :key="second.id"
                  class="writ-flow-row-main"
                  :style="secondIndex !== (first.children.length - 1) ? 'margin-bottom: 20px;' : ''">
                  <div class="writ-flow-row">
                    <span class="arrows">{{secondIndex === 0 ? '➤' : '→'}}</span>
                    <div
                      v-for="(third, thirdIndex) in second.list"
                      :key="third.id"
                      class="writ-flow-td">
                      <div :class="flowStatus[`paper${third.docTypeNo}`] ? 'writ-flow-spantd-ex writ-flow-td' : 'writ-flow-spantd writ-flow-td'">
                        <!-- 文书接收 -->
                        <img
                          v-if="third.docTypeNo === '5' && unreceivedStatus.unreceived5"
                          src="@/views/writ-flow/assets/image/paper-send-icon.png"
                          title="有未接收的文书，请点击接收"
                          style="top: 42px; left: 8px; cursor: pointer;"
                          @click="receivePaper(third.docTypeNo)"
                        />
                        <!-- 存档标记 -->
                        <img
                          v-if="flowStatus[`paper${third.docTypeNo}`]"
                          :src="flowStatus[`paper${third.docTypeNo}`] === 'save' ? '' : require('../assets/image/file.png')"
                          :title="flowStatus[`paper${third.docTypeNo}`] === 'save' ? '已保存' : '已归档'"
                          alt="" />
                        <!-- 事故时行政处罚决定书展示的处罚详情查看 -->
                        <i
                          v-if="corpData.caseType === '1' && third.docTypeNo === '8' && paperCount.count8 > 0"
                          class="el-icon-warning-outline danger-info-icon"
                          @click="showAccidentDangerInfo(third.docTypeNo)"
                        ></i>
                        <!-- 隐患数量展示及详情查看 -->
                        <i
                          v-if="dangerStatus[`danger${third.docTypeNo}`] && dangerStatus[`danger${third.docTypeNo}`].length > 0"
                          class="el-icon-warning-outline danger-info-icon"
                          :title="`隐患数：${dangerStatus[`danger${third.docTypeNo}`].length}`"
                          @click="showDangerInfo(third.docTypeNo)"
                        ></i>
                        <!-- 隐患关联修改后展示及详情查看 -->
                        <img
                          v-if="changeDangerStatus[`danger${third.docTypeNo}`] && changeDangerStatus[`danger${third.docTypeNo}`].length > 0"
                          src="@/views/writ-flow/assets/image/warning_fill.png"
                          style="left: 150px; top: 8px; cursor: pointer;"
                          :title="`请注意有被关联修改的隐患！`"
                          @click="showChangeDangerInfo(third.docTypeNo)"
                        />
                        <!-- 文书名称,文书数量展示 -->
                        <div
                          @click="cmdEditDoc(third.letName, third.name, third.docTypeNo)"
                          @contextmenu.prevent="event => onContextmenu(event, third.docTypeNo)"
                          class="flow-span">
                          <span v-if="third.showName">{{third.showName[0]}}<br />{{third.showName[1]}}</span>
                          <span v-else>{{third.name}}</span>
                          <span>{{paperCount[`count${third.docTypeNo}`] && paperCount[`count${third.docTypeNo}`] > 1 ? '(' + paperCount[`count${third.docTypeNo}`] + ')' : ''}}</span>
                        </div>
                        <!-- 删除按钮 -->
                        <i
                          v-if="paperCount[`count${third.docTypeNo}`] && paperCount[`count${third.docTypeNo}`] > 0"
                          class="el-icon-minus minus-icon"
                          title="删除文书"
                          @click="delPaper(third.docTypeNo)"
                        ></i>
                        <!-- 添加按钮 -->
                        <i
                          class="el-icon-plus create-icon"
                          title="添加文书"
                          @click="addPaper(third.letName, third.name, third.docTypeNo)"
                        ></i>
                      </div>
                      <div v-if="thirdIndex !== (second.list.length - 1)">
                        <span class="arrows">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
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
    <!-- 关联修改的隐患项列表详情展示 -->
    <show-change-danger-items
      :visible="visible.showChangeDangerItems"
      :corp-data="corpData"
      :danger-list="showChangeDangerList"
      @close="closeDialog"
    ></show-change-danger-items>
    <select-delete-paper
      :visible="visible.selectDelPaper"
      :paper-list="deletePaperList"
      @close="closeDialog"
      @confirm="confirmDelete"
    ></select-delete-paper>
    <!-- 选择文书 -->
    <select-paper
      v-if="visible.selectPaper"
      :visible="visible.selectPaper"
      :paper-list="paperList"
      @close="closeDialog"
      @confirm-paper="confirmPaper"
    ></select-paper>
    <punishment-info-fill
      :visible="visible.punishmentInfoFill"
      :let-data="letData"
      :paper-data="paperData"
      :is-edit="false"
      @close="closeDialog"
    ></punishment-info-fill>
  </div>
</template>


<script>
import GoDB from "@/utils/godb.min.js";
import receivePaper from "@/views/writ-flow/components/receive-paper";
import showDangerItems from '@/components/show-danger-items'
import showChangeDangerItems from '@/components/show-change-danger-items'
import selectDeletePaper from "@/views/writ-flow/components/select-delete-paper";
import selectPaper from '@/components/select-paper'
import punishmentInfoFill from '@/components/punishment-info-fill'
export default {
  name: "WritFlow",
  components: {
    receivePaper,
    showDangerItems,
    showChangeDangerItems,
    selectDeletePaper,
    selectPaper,
    punishmentInfoFill
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
    changeDangerStatus: {
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
      activeFlowTab: "0",
      visible: {
        receivePaper: false,
        showDangerItems: false,
        showChangeDangerItems: false, // 查看关联修改隐患项弹窗
        selectDelPaper: false, // 选择要删除的文书
        selectPaper: false, // 选择文书
        punishmentInfoFill: false, // 事故类型行政处罚决定处罚详情查看
      },
      showDangerList: [], // 展示隐患项列表详情的数据
      showChangeDangerList: [], // 展示关联修改的隐患项列表的数据
      createdSelectedPaper: null, // 选中的需要新建的文书Id
      loading: {
        btn: false,
      },
      deletePaperList: [], // 可删除的文书列表
      // 以下三个字段用于事故处罚时展示处罚详情
      paperList: [], // 需要查看的文书列表
      letData: {}, // 需要查看文书的字段集合
      paperData: {}, // 需要查看文书的内容
      paperColList: [
        {
          id: '1',
          name: '现场检查',
          children: [
            {
              id: '11',
              name: '一般检查',
              children: [
                {
                  id: '111',
                  list: [
                    {
                      id: '1111',
                      name: '检查方案',
                      letName: 'let100',
                      docTypeNo: '22',
                    },
                    {
                      id: '1112',
                      name: '现场检查笔录',
                      letName: 'let101',
                      docTypeNo: '1'
                    },
                    {
                      id: '1113',
                      name: '现场处理决定书',
                      letName: 'let102',
                      docTypeNo: '2',
                      showName: [
                        '现场处理',
                        '决定书',
                      ]
                    },
                  ]
                }
              ]
            },
            {
              id: '12',
              name: '复查',
              children: [
                {
                  id: '121',
                  list: [
                    {
                      id: '1211',
                      name: '检查方案(复查)',
                      letName: 'let103',
                      docTypeNo: '42',
                    },
                    {
                      id: '1212',
                      name: '复查意见书',
                      letName: 'let104',
                      docTypeNo: '13'
                    },
                    {
                      id: '1213',
                      name: '隐患整改',
                      letName: 'let105',
                      docTypeNo: '44',
                    },
                  ]
                }
              ]
            },
            {
              id: '13',
              name: '实施检查',
              children: [
                {
                  id: '131',
                  list: [
                    {
                      id: '1311',
                      name: '撤出作业人员命令书',
                      letName: 'let106',
                      docTypeNo: '3',
                      showName: [
                        '撤出作业人员',
                        '命令书',
                      ]
                    },
                    {
                      id: '1312',
                      name: '抽样取证通知书',
                      letName: 'let107',
                      docTypeNo: '23'
                    },
                    {
                      id: '1313',
                      name: '先行登记保存证据通知书',
                      letName: 'let108',
                      docTypeNo: '25',
                      showName: [
                        '先行登记保存证据',
                        '通知书',
                      ]
                    },
                    {
                      id: '1314',
                      name: '先行登记保存证据处理决定书',
                      letName: 'let109',
                      docTypeNo: '27',
                      showName: [
                        '先行登记保存证据',
                        '处理决定书',
                      ]
                    },
                  ]
                },
                {
                  id: '132',
                  list: [
                    {
                      id: '1321',
                      name: '查封（扣押）决定书',
                      letName: 'let110',
                      docTypeNo: '32',
                      showName: [
                        '查封(扣押)',
                        '决定书',
                      ]
                    },
                    {
                      id: '1322',
                      name: '延长查封（扣押）期限决定书',
                      letName: 'let114',
                      docTypeNo: '46',
                      showName: [
                        '延长查封（扣押）',
                        '期限决定书',
                      ]
                    },
                    {
                      id: '1323',
                      name: '查封（扣押）处理决定书',
                      letName: 'let115',
                      docTypeNo: '47',
                      showName: [
                        '查封（扣押）处理',
                        '决定书',
                      ]
                    },
                    {
                      id: '1324',
                      name: '停供电（停供民用爆炸物品）决定书',
                      letName: 'let111',
                      docTypeNo: '48',
                      showName: [
                        '停供电（停供民用',
                        '爆炸物品）决定书',
                      ]
                    },
                  ]
                },
                {
                  id: '133',
                  list: [
                    {
                      id: '1331',
                      name: '停供电(停供民用爆炸物品)通知书',
                      letName: 'let112',
                      docTypeNo: '37',
                      showName: [
                        '停供电(停供民用',
                        '爆炸物品)通知书',
                      ]
                    },
                    {
                      id: '1332',
                      name: '解除停供电(停供民用爆炸物品)通知书',
                      letName: 'let113',
                      docTypeNo: '38',
                      showName: [
                        '解除停供电(停供民',
                        '用爆炸物品)通知书',
                      ]
                    },
                  ]
                },
              ]
            },
          ]
        },
        {
          id: '2',
          name: '行政处罚',
          children: [
            {
              id: '21',
              name: '一般程序',
              children: [
                {
                  id: '211',
                  list: [
                    {
                      id: '2111',
                      name: '立案决定书',
                      letName: 'let201',
                      docTypeNo: '4',
                    },
                    {
                      id: '2112',
                      name: '调查取证笔录',
                      letName: 'let202',
                      docTypeNo: '5'
                    },
                    {
                      id: '2113',
                      name: '行政处罚告知书',
                      letName: 'let204',
                      docTypeNo: '6',
                    },
                    {
                      id: '2114',
                      name: '陈述、申辩笔录',
                      letName: 'let205',
                      docTypeNo: '30',
                    },
                  ]
                },
                {
                  id: '212',
                  list: [
                    {
                      id: '2121',
                      name: '行政执法决定法制审核意见书',
                      letName: 'let215',
                      docTypeNo: '49',
                      showName: [
                        '行政执法决定法制',
                        '审核意见书',
                      ]
                    },
                    {
                      id: '2122',
                      name: '案件处理呈报书',
                      letName: 'let203',
                      docTypeNo: '36'
                    },
                    {
                      id: '2123',
                      name: '集体讨论记录',
                      letName: 'let216',
                      docTypeNo: '50',
                    },
                    {
                      id: '2124',
                      name: '行政处罚决定书',
                      letName: 'let206',
                      docTypeNo: '8',
                    },
                  ]
                },
                {
                  id: '213',
                  list: [
                    {
                      id: '2131',
                      name: '送达收执',
                      letName: 'let207',
                      docTypeNo: '9',
                    },
                  ]
                },
              ]
            },
            {
              id: '22',
              name: '听证程序',
              children: [
                {
                  id: '221',
                  list: [
                    {
                      id: '2211',
                      name: '听证通知书',
                      letName: 'let209',
                      docTypeNo: '28',
                    },
                    {
                      id: '2212',
                      name: '不予受理听证申请通知书',
                      letName: 'let210',
                      docTypeNo: '29',
                      showName: [
                        '不予受理听证申请',
                        '通知书',
                      ]
                    },
                    {
                      id: '2213',
                      name: '听证笔录',
                      letName: 'let211',
                      docTypeNo: '7',
                    },
                  ]
                }
              ]
            },
            {
              id: '23',
              name: '案件结案',
              children: [
                {
                  id: '231',
                  list: [
                    {
                      id: '2311',
                      name: '罚款收缴',
                      letName: 'let212',
                      docTypeNo: '43',
                    },
                    {
                      id: '2312',
                      name: '罚款缴纳催告书',
                      letName: 'let217',
                      docTypeNo: '51'
                    },
                    {
                      id: '2313',
                      name: '加处罚款决定书',
                      letName: 'let218',
                      docTypeNo: '52',
                    },
                    {
                      id: '2314',
                      name: '延期（分期）缴纳罚款决定书',
                      letName: 'let219',
                      docTypeNo: '53',
                      showName: [
                        '延期（分期）缴纳',
                        '罚款决定书',
                      ]
                    },
                  ]
                },
                {
                  id: '232',
                  list: [
                    {
                      id: '2321',
                      name: '案件结案报告',
                      letName: 'let213',
                      docTypeNo: '14',
                    },
                    {
                      id: '2322',
                      name: '执法案卷（首页）及目录',
                      letName: 'let214',
                      docTypeNo: '15',
                      showName: [
                        '执法案卷（首页）',
                        '及目录',
                      ]
                    },
                  ]
                },
              ]
            },
          ]
        },
        {
          id: '3',
          name: '行政强制',
          children: [
            {
              id: '31',
              name: '公开裁定',
              children: [
                {
                  id: '311',
                  list: [
                    {
                      id: '3111',
                      name: '执法案件公开裁定记录',
                      letName: 'let300',
                      docTypeNo: '31',
                      showName: [
                        '执法案件公开裁定',
                        '记录',
                      ]
                    },
                  ]
                },
              ]
            },
            {
              id: '32',
              name: '行政强制执行',
              children: [
                {
                  id: '321',
                  list: [
                    {
                      id: '3211',
                      name: '行政强制执行事先催告书',
                      letName: 'let309',
                      docTypeNo: '54',
                      showName: [
                        '行政强制执行事先',
                        '催告书',
                      ]
                    },
                    {
                      id: '3212',
                      name: '强制执行申请书',
                      letName: 'let301',
                      docTypeNo: '18',
                    },
                  ]
                }
              ]
            },
            // <!-- 2022/1/1去掉 -->
            // {
            //   id: '33',
            //   name: '行政复议',
            //   children: [
            //     {
            //       id: '331',
            //       list: [
            //         {
            //           id: '3311',
            //           name: '行政复议申请笔录',
            //           letName: 'let302',
            //           docTypeNo: '10',
            //         },
            //         {
            //           id: '3312',
            //           name: '不予受理行政复议申请决定书',
            //           letName: 'let303',
            //           docTypeNo: '41',
            //           showName: [
            //             '不予受理行政复议',
            //             '申请决定书',
            //           ]
            //         },
            //         {
            //           id: '3313',
            //           name: '行政复议调查笔录',
            //           letName: 'let304',
            //           docTypeNo: '11',
            //         },
            //         {
            //           id: '3314',
            //           name: '行政复议决定书',
            //           letName: 'let305',
            //           docTypeNo: '12',
            //         },
            //       ]
            //     },
            //   ]
            // },
          ]
        },
        {
          id: '4',
          name: '其他',
          children: [
            {
              id: '41',
              name: '其他',
              children: [
                {
                  id: '411',
                  list: [
                  // <!-- 2022/1/1去掉 -->
                    // {
                    //   id: '1111',
                    //   name: '移送案件呈报书',
                    //   letName: 'let400',
                    //   docTypeNo: '35',
                    // },
                    {
                      id: '4112',
                      name: '移送书',
                      letName: 'let401',
                      docTypeNo: '19'
                    },
                    {
                      id: '4113',
                      name: '涉嫌犯罪案件移送书',
                      letName: 'let402',
                      docTypeNo: '20',
                      showName: [
                        '涉嫌犯罪案件',
                        '移送书',
                      ]
                    },
                    {
                      id: '4114',
                      name: '行政执法有关事项审批报告',
                      letName: 'let408',
                      docTypeNo: '55',
                      showName: [
                        '行政执法有关事项',
                        '审批报告',
                      ]
                    },
                  ]
                }
              ]
            },
            {
              id: '42',
              name: '证据上传',
              children: [
                {
                  id: '421',
                  list: [
                    {
                      id: '4211',
                      name: '影音证据',
                      letName: 'let406',
                      docTypeNo: '21',
                    },
                  ]
                }
              ]
            },
            {
              id: '43',
              name: '报告上传',
              children: [
                {
                  id: '431',
                  list: [
                    {
                      id: '4311',
                      name: '监察执法报告',
                      letName: 'let407',
                      docTypeNo: '45',
                    },
                  ]
                },
              ]
            },
          ]
        },
      ], // 一般文书流程
      accidentColList: [
        {
          id: '1',
          name: '事故处罚',
          children: [
            {
              id: '11',
              name: '一般程序',
              children: [
                {
                  id: '111',
                  list: [
                    {
                      id: '1111',
                      name: '立案决定书',
                      letName: 'let201',
                      docTypeNo: '4',
                    },
                    {
                      id: '1112',
                      name: '调查取证笔录',
                      letName: 'let202',
                      docTypeNo: '5'
                    },
                    {
                      id: '1113',
                      name: '案件处理呈报书',
                      letName: 'let203',
                      docTypeNo: '36',
                    },
                    {
                      id: '1114',
                      name: '行政处罚告知书',
                      letName: 'let204',
                      docTypeNo: '6'
                    },
                  ]
                },
                {
                  id: '112',
                  list: [
                    {
                      id: '1121',
                      name: '行政处罚决定书',
                      letName: 'let206',
                      docTypeNo: '8',
                    },
                    {
                      id: '1122',
                      name: '送达收执',
                      letName: 'let207',
                      docTypeNo: '9'
                    },
                    {
                      id: '1123',
                      name: '罚款收缴',
                      letName: 'let212',
                      docTypeNo: '43',
                    },
                  ]
                }
              ]
            },
          ]
        },
      ], // 事故文书流程
      showColList: [],
      tabList: []
    };
  },
  created() {
    this.doTabSwitch(0)
  },
  watch: {
    'corpData.caseType'(val) {
      this.doTabSwitch(0)
    },
    activeFlowTab(val) { 
      if (val) {
        this.doTabSwitch(val)
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
      this.activeFlowTab = tab + ''
      this.tabList = this.corpData.caseType === '1' ? this.accidentColList : this.paperColList
      this.showColList = this.tabList[tab].children
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
    async showChangeDangerInfo (paperType) {
      // 展示关联修改的文书隐患信息
      this.visible.showChangeDangerItems = true;
      let showChangeDangerList = this.changeDangerStatus[`danger${paperType}`]
      for (let i = 0; i < showChangeDangerList.length; i++) {
        let item = showChangeDangerList[i]
        item.isSeriousValue = item.isSerious === '1' ? '重大隐患' : '一般隐患'
        item.isReviewValue = item.isReview === '1' ? '是' : '否'
      }
      this.showChangeDangerList = showChangeDangerList
      // 置verNo为空
      let db = new GoDB(this.$store.state.DBName);
      let wkPaper = db.table("wkPaper");
      let paperList = await wkPaper.findAll((item) => {
        return item.caseId === this.corpData.caseId && item.delFlag !== '1' && item.paperType === paperType
      });
      for (let i = 0; i < paperList.length; i++) {
        let paperContent = paperList[i].paperContent ? JSON.parse(paperList[i].paperContent) : null
        if (paperContent.DangerTable && paperContent.DangerTable.tableData) {
          for (let j = 0; j < paperContent.DangerTable.tableData.length; j++) {
            paperContent.DangerTable.tableData[j].verNo = null
          }
        }
        let paperItem = Object.assign({}, paperList[i], {paperContent: JSON.stringify(paperContent)})
        await wkPaper.put(paperItem)
      }
      await db.close()
      this.$emit('refresh-writ')
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
      
    },
    async showAccidentDangerInfo (docTypeNo) {
      // 展示事故隐患详情
      let db = new GoDB(this.$store.state.DBName)
      let wkPaper = db.table('wkPaper')
      let paperList = await wkPaper.findAll(item => item.delFlag !== '1' && item.paperType === docTypeNo && item.caseId === this.corpData.caseId)
      if (paperList.length > 1) {
        // 多个文书时选择文书，然后展示隐患信息
        this.paperList = paperList
        this.visible.selectPaper = true
      } else if (paperList.length === 1) {
        // 单个文书时直接展示
        this.showInfo(paperList[0])
      }
    },
    confirmPaper (paper) {
      // 选择的文书展示隐患信息 当前用于事故类的行政处罚决定书展示隐患内容
      this.showInfo(paper)
      this.visible.selectPaper = false
    },
    showInfo (paper) {
      this.paperData = paper
      this.letData = JSON.parse(paper.paperContent) 
      this.visible.selectPaper = false
      this.visible.punishmentInfoFill = true
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
.writ-flow-card {
  border: 1px solid #DCDFE6;
  padding: 15px;
  position: relative;
  margin-bottom: 15px;
  .writ-flow-card-title {
    position: absolute;
    display: block;
    top: -11px;
    background: #fff;
    padding: 0 5px;
  }
  .writ-flow-row-main {
    width: 626px; 
    height: 75px; 
    border-collapse: collapse; 
    margin-left: 20px;
    display: flex;
    .writ-flow-row {
      display: flex;
      align-items: center;
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
  }
}
/deep/ .el-tabs--card>.el-tabs__header .el-tabs__nav {
  border: none;
}
/deep/ .el-tabs__item {
  border: 1px solid #DCDFE6;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-size: 17px;
}
/deep/ .el-tabs__item.is-active {
  border-color: #4F83E9;
  background: #4F83E9;
  color: #fff;
}
//保存前
.writ-flow-spantd {
  width: 200px;
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
.minus-icon {
  position: absolute;
  bottom: 8px;
  right: 26px;
  cursor: pointer;
  color: rgba(#4282e6, 1);
  font-weight: bold;
  font-size: 20px;
  &:hover {
    color: rgba(#4282E6, 0.8);
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
  width: 200px;
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
</style>

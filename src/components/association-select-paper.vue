<!-- 关联选择文书（新建文书时，关联的文书有多个时选择使用的文书） -->
<!-- 同时放置所有文书复用性高的组件、变量及方法 -->
<script>
import GoDB from "@/utils/godb.min.js";
import letMain from "@/views/make-law-writ/components/let-main.vue";
import selectPaper from '@/components/select-paper'
import { getNowDate, getNowTime } from '@/utils/date'
import { randomString, sortbyAsc } from "@/utils/index";
import { setAssociationPaperId, setAssociationPaperOrder } from '@/utils/setInitPaperData'

export default {
  name: "AssociationSelectPaper",
  props: {
    fromPage: {
      type: String,
      default: null
    },
    corpData: {
      type: Object,
      default: () => {},
    },
    docData: {
      type: Object,
      default: () => {
        return {
          docTypeNo: null,
          docTypeName: null,
        };
      },
    },
    paperData: {
      type: Object,
      default: () => {}
    },
    sendData: {
      // 发送文书时接收用户信息
      type: Object,
      default: () => {}
    }
  },
  components: {
    letMain,
    selectPaper
  },
  data() {
    return {
      DBName: this.$store.state.DBName,
      visible: {
        selectPaper: false
      },
      paperList: [],
      selectedIndex: 0, // 需要选择多个类型的文书时，当前选择第几个文书
      selectFlowList: [], // 需要选择多个类型的文书流程，对象包括文书key及文书列表
      selectedPaper: {},
      todayDate: getNowDate(),
      colList: [
        {
          label: '文书类型',
          prop: 'name',
        },
        {
          label: '制作人',
          width: '100',
          prop: 'personName',
        },
        {
          label: '制作日期',
          prop: 'createDate',
          align: 'left',
          width: '180'
        },
      ],
      paperId: null,
      letDataOragin: null,
      setAssociationPaperId: setAssociationPaperId,
      setAssociationPaperOrder: setAssociationPaperOrder
    };
  },
  async created() {
    await this.initData();
    await this.initFileData();
  },
  watch: {
    "corpData.corpId"(val) {
      if (val) {
        this.initData();
      }
    },
    'paperData.paperId'(val) {
      this.initData();
    }
  },
  methods: {
    async initData() {
      // 初始化文书内容
      // 案件处理呈报书需初始化法制审核意见
      let db = new GoDB(this.DBName);
      if (this.docData.docTypeNo === '36' 
        || (this.docData.docTypeNo === '49' && this.$store.state.user.userType !== 'supervision')
        || (this.docData.docTypeNo === '47' && this.$store.state.user.userType === 'supervision')) {
        // 4.法制审核意见初始化码表
        let nowDate = getNowDate();
        let optionList = [
          "认为案件事实清楚，证据确凿充分，定性准确，处罚适当，程序合法，同意处罚意见。",
          "认为案件主要事实不清，证据不足，建议继续调查或不予作出行政执法决定的建议。",
          "认为案件定性不准，使用法律不准确，执行裁量基准不当的，建议给予XXX的行政处罚。",
          "认为案件程序不合法的，建议进行纠正。",
        ];
        optionList.map((item) => {
          this.options.cellIdx8.push({
            name: `经${nowDate}法制审核，${item}`,
            value: `经${nowDate}法制审核，${item}`,
          });
        });
      } else if (this.docData.docTypeNo === '22' || this.docData.docTypeNo === '42') {
        let dictionary = db.table('dictionary')
        let programmeTypeListJson = await dictionary.find(item => item.type === 'programmeType')
        let programmeTypeList = JSON.parse(programmeTypeListJson.list)
        programmeTypeList.sort(sortbyAsc('sort'))
        this.options.cellIdx1 = programmeTypeList
      }
      if (this.paperData && this.paperData.paperId) {
        this.paperId = this.paperData.paperId
        this.letData = Object.assign({}, this.letData, JSON.parse(this.paperData.paperContent))
        // 赋值一个原始对象数据,用于比较数据是否被修改更新
        this.letDataOragin = JSON.stringify(this.letData)
      } else {
        // 生成默认PaperId
        this.paperId = getNowTime() + randomString(28)
        // 创建初始版本
        if (this.corpData && this.corpData.caseId) {
          let wkPaper = db.table('wkPaper')
          // 按组件中定义的associationPaper关联文书
          let isReturn = false
          if (this.associationPaper && this.associationPaper.length > 0) {
            // associationPaper是必须关联的文书，如果未关联则提示
            for (let paper of this.associationPaper) {
              let paperDataList = await wkPaper.findAll((item) => {
                return item.caseId === this.corpData.caseId && item.paperType === paper && item.delFlag !== '1';
              })
              if (paperDataList.length === 0) {
                // 如果未查到关联的文书，则提示：
                let paperName = this.$store.state.dictionary[`${this.$store.state.user.userType}PaperType`].filter(item => item.id === paper)
                this.$message.error(`请先填写并保存${paperName[0].name}中内容！`)
                // 同时break退出循环，isReturn停止程序继续运行
                isReturn = true
                break
              } else if (paperDataList.length === 1) {
                // 如果查到关联的文书仅有一条，则保存此条文书内容，继续遍历其他需要关联的文书
                this.selectedPaper[`let${paper}Data`] = paperDataList[0]
              } else {
                // 如果查到关联的文书有两条及以上，则保留关键字，同时保留多份文书列表，以便后面遍历选择
                paperDataList.sort(sortbyAsc('createDate'))
                this.selectFlowList.push({
                  key: `let${paper}Data`,
                  paperList: paperDataList
                })
              }
            }
          } else if (this.selectAssociationPaper && this.selectAssociationPaper.length > 0) {
            // 根据数组的顺序，顺序找是否有可关联的文书选择
            for (let i = 0; i < this.selectAssociationPaper.length; i++ ) {
              let paper = this.selectAssociationPaper[i]
              let paperDataList = await wkPaper.findAll((item) => {
                return item.caseId === this.corpData.caseId && item.paperType === paper && item.delFlag !== '1';
              })
              if (paperDataList.length === 0 && i === (this.selectAssociationPaper.length - 1)) {
                // 如果未查到关联的文书，则提示：
                let paperName = this.$store.state.dictionary[`${this.$store.state.user.userType}PaperType`].filter(item => item.id === paper)
                this.$message.error(`请先填写并保存${paperName[0].name}中内容！`)
                isReturn = true
              } else if (paperDataList.length === 1) {
                // 如果查到关联的文书仅有一条，则保存此条文书内容并退出循环
                this.selectedPaper[`let${paper}Data`] = paperDataList[0]
                break
              } else if (paperDataList.length > 1){
                // 如果查到关联的文书有两条及以上，则保留关键字，同时保留多份文书列表，以便后面遍历选择，并退出循环
                paperDataList.sort(sortbyAsc('createDate'))
                this.selectFlowList.push({
                  key: `let${paper}Data`,
                  paperList: paperDataList
                })
                break
              }
            }
          }
          if (isReturn) {
            // 返回主页面
            this.$refs.letMain.cmdDocBack()
            return
          }
          // 遍历循环选择文书:
          if (this.selectFlowList.length > 0) {
            // 如果需要选择文书，则从第一个开始选择
            this.handleSelectPaper()
          } else {
            // 如果不需要选择文书，则直接开始进行初始化
            this.initLetData && this.initLetData(this.selectedPaper)
          }
        } else if (this.docData.docTypeNo === '16' || this.docData.docTypeNo === '17' || this.docData.docTypeNo === '15') {
          // 从意见建议书中引入的文书没有选择煤矿也没有监察活动
          this.initLetData && this.initLetData()
        } else if (this.docData.docTypeNo === '5') {
          // 文书发送：调查取证笔录
          this.initLetData && this.initLetData()
        }
      }
      await db.close();
    },
    async initFileData() {
      if (this.paperData) {
        if (this.$store.state.user.userType === 'supervision') {
          // 监管：
        } else {
          if (this.docData.docTypeNo === '44' || this.docData.docTypeNo === '21' || this.docData.docTypeNo === '45') {
            // 隐患整改, 影音证据,意见建议书拉取上传的文件列表
            await this.getFileList()
          }
        }
      }
      if ((this.docData.docTypeNo === '43' && this.$store.state.user.userType !== 'supervision')) {
        // 罚款收缴时如果没有网络则提示
        if (!this.$store.state.onLine) {
          this.$message.warning('当前为离线登录，请联网后再上传、下载或删除文件！')
          return
        }
      }
    },
    handleSelectPaper () {
      this.paperList = this.selectFlowList[this.selectedIndex].paperList
      if (this.paperList[0].paperType === '6' || this.paperList[0].paperType === '32' || this.paperList[0].paperType === '8') {
        this.paperList.forEach(item => {
          item.selectedType = JSON.parse(item.paperContent).selectedType
        })
        this.colList.splice(1, 0, {
          label: '类别',
          width: '80',
          prop: 'selectedType'
        })
      } else {
        this.colList = [
          {
            label: '文书类型',
            prop: 'name',
          },
          {
            label: '制作人',
            width: '100',
            prop: 'personName',
          },
          {
            label: '制作日期',
            prop: 'createDate',
            align: 'left',
            width: '180'
          },
        ]
      }
      this.visible.selectPaper = true
    },
    closeDialog ({page, refresh}) {
      // 关闭选择文书弹窗
      this.visible[page] = false
      this.$message.error('必须选择需要关联的文书')
      this.$refs.letMain.cmdDocBack()
    },
    confirmPaper (currentRow) {
      // 选择的文书
      if (currentRow && currentRow.paperId) {
        this.selectedPaper[this.selectFlowList[this.selectedIndex].key] = currentRow
        // 判断当前是否已经选择完文书，如果未选择完则继续进行文书选择，如果已经选择完则进入初始化
        if (this.selectedIndex === this.selectFlowList.length - 1) {
          this.initLetData(this.selectedPaper)
          this.visible.selectPaper = false
        } else {
          this.selectedIndex = this.selectedIndex + 1
          this.handleSelectPaper()
        }
      } else {
        this.$message.error('必须选择需要关联的文书')
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>
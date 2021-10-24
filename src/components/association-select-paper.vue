<!-- 关联选择文书（新建文书时，关联的文书有多个时选择使用的文书） -->
<!-- 同时放置所有文书复用性高的组件、变量及方法 -->
<script>
import GoDB from "@/utils/godb.min.js";
import letMain from "@/views/make-law-writ/components/let-main.vue";
import selectPaper from '@/components/select-paper'
import { getNowDate } from '@/utils/date.js'
export default {
  name: "AssociationSelectPaper",
  props: {
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
    }
  },
  components: {
    letMain,
    selectPaper
  },
  data() {
    return {
      visible: {
        selectPaper: false
      },
      paperList: [],
      selectedIndex: 0, // 需要选择多个类型的文书时，当前选择第几个文书
      selectFlowList: [], // 需要选择多个类型的文书流程，对象包括文书key及文书列表
      selectedPaper: {},
      todayDate: getNowDate()
    };
  },
  async created() {
    await this.initData();
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
      if (this.paperData && this.paperData.paperId) {
        this.letData = JSON.parse(this.paperData.paperContent);
      } else {
        // 创建初始版本
        const db = new GoDB(this.$store.state.DBName);
        const wkPaper = db.table('wkPaper')
        // 按组件中定义的associationPaper关联文书
        let isReturn = false
        if (this.associationPaper && this.associationPaper.length > 0) {
          for (let paper of this.associationPaper) {
            let paperDataList = await wkPaper.findAll((item) => {
              return item.caseId === this.corpData.caseId && item.paperType === paper && item.delFlag !== '1';
            })
            if (paperDataList.length === 0) {
              // 如果未查到关联的文书，则提示：
              let paperName = this.$store.state.dictionary.supervisionPaperType.filter(item => item.id === paper)
              this.$message.error(`请先填写并保存${paperName[0].name}中内容！`)
              // 同时break退出循环，isReturn停止程序继续运行
              isReturn = true
              break
            } else if (paperDataList.length === 1) {
              // 如果查到关联的文书仅有一条，则保存此条文书内容，继续遍历其他需要关联的文书
              this.selectedPaper[`let${paper}Data`] = paperDataList[0]
            } else {
              // 如果查到关联的文书有两条及以上，则保留关键字，同时保留多份文书列表，以便后面遍历选择
              this.selectFlowList.push({
                key: `let${paper}Data`,
                paperList: paperDataList
              })
            }
          }
        }
        await db.close();
        if (isReturn) {
          return
        }
        // 遍历循环选择文书
        if (this.selectFlowList.length > 0) {
          // 如果需要选择文书，则从第一个开始选择
          this.handleSelectPaper()
        } else {
          // 如果不需要选择文书，则直接开始进行初始化
          this.initLetData && this.initLetData(this.selectedPaper)
        }
      }
    },
    handleSelectPaper () {
      this.paperList = this.selectFlowList[this.selectedIndex].paperList
      this.visible.selectPaper = true
    },
    closeDialog ({page, refresh}) {
      // 关闭选择文书弹窗
      this.visible[page] = false
    },
    confirmPaper (currentRow) {
      // 选择的文书
      if (currentRow) {
        this.selectedPaper[this.selectFlowList[this.selectedIndex].key] = currentRow
        // 判断当前是否已经选择完文书，如果未选择完则继续进行文书选择，如果已经选择完则进入初始化
        if (this.selectedIndex === this.selectFlowList.length - 1) {
          this.initLetData(this.selectedPaper)
          this.visible.selectPaper = false
        } else {
          this.selectedIndex = this.selectedIndex + 1
          this.handleSelectPaper()
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/let";
</style>
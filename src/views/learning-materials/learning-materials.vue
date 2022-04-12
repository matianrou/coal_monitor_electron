<template>
  <div class="learning-materials">
    <div class="learning-materials-main">
      <!-- 标题 -->
      <div class="learning-materials-title">
        <img src="@/components/assets/image/letTitle.png" style="width:32px;" /><span>学习资料下载</span>
        <div style="text-align: right; padding: 0 20px; flex: 1;">
          <el-button size="small" @click="allDownLoad">全部下载</el-button>
        </div>
      </div>
      <!-- 文件列表 -->
      <div class="learning-materials-filelist-main">
        <div
          v-for="(item, index) in fileList"
          :key="index"
          class="learning-materials-filelist-filename">
          <img :src="require(`./assets/image/${item.type}.png`)" />
          <span @click="downloadFile(item)">{{item.fileName}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LearningMaterials",
  data() {
    return {
    };
  },
  computed: {
    fileList () {
      let fileList = []
      if (this.$store.state.user.userType === 'supervision') {
        // 监管展示的学习资料
        fileList = [
          {
            fileName: '国家局印发监管文书样式和制作说明的通知（煤安监监察〔2020〕41号）.doc',
            url: './static/materials/supervision/41docx.docx',
            type: 'doc'
          },
          {
            fileName: '国家局印发监管文书样式和制作说明的通知（煤安监监察〔2020〕41号）- 文书样式.pdf',
            url: './static/materials/supervision/style41pdf.pdf',
            type: 'pdf'
          },
          {
            fileName: '国家局印发监管文书样式和制作说明的通知（煤安监监察〔2020〕41号）- 制作说明.pdf',
            url: './static/materials/supervision/manufacturing-instructions41pdf.pdf',
            type: 'pdf'
          },
          {
            fileName: '煤矿安全监管监察执法文书制作规范-（矿安〔2021〕172号）.pdf',
            url: './static/materials/supervision/standard172pdf.pdf',
            type: 'pdf'
          },
          {
            fileName: '煤矿安全监管行政执法文书样式-（矿安〔2021〕172号）.pdf',
            url: './static/materials/supervision/style172pdf.pdf',
            type: 'pdf'
          },
        ]
      } else {
        // 监察展示的学习资料
        fileList = [
          {
            fileName: '国家局印发文书样式规范和模板的通知（煤安监监察〔2018〕35号）.doc',
            url: './static/materials/monitor/35word.doc',
            type: 'doc'
          },
          {
            fileName: '国家局印发文书样式规范和模板的通知（煤安监监察〔2018〕35号）-附件1.pdf',
            url: './static/materials/monitor/35-1pdf.pdf',
            type: 'pdf'
          },
          {
            fileName: '国家局印发文书样式规范和模板的通知（煤安监监察〔2018〕35号）-附件2.pdf',
            url: './static/materials/monitor/35-2pdf.pdf',
            type: 'pdf'
          },
          {
            fileName: '国家局印发文书样式规范和模板的通知（煤安监监察〔2018〕35号）-附件3.pdf',
            url: './static/materials/monitor/35-3pdf.pdf',
            type: 'pdf'
          },
          {
            fileName: '国家煤矿安全监察执法文书样式-（矿安〔2021〕172号）.pdf',
            url: './static/materials/monitor/style172pdf.pdf',
            type: 'pdf'
          },
          {
            fileName: '煤矿安全监管监察执法文书制作规范-（矿安〔2021〕172号）.pdf',
            url: './static/materials/monitor/standard172pdf.pdf',
            type: 'pdf'
          },
        ]
      }
      return fileList
    }
  },
  created() {
  },
  methods: {
    async downloadFile (data) {
      // 下载文件
      console.log('data', data)
      this.fileSaver.saveAs(data.url, data.fileName)
    },
    async allDownLoad () {
      // 全部下载
      let zip = new this.pizzip()
      let promises = []
      for (let i = 0; i < this.fileList.length; i++) {
        let item = this.fileList[i]
        const promise = this.getFile(item).then(content => {
          zip.file(item.fileName, content)
        }).catch(error => {
          console.log('下载失败：', error)
        })
        promises.push(promise)
      }
      Promise.all(promises).then(() => {
        this.fileSaver.saveAs(zip.generate({type: "blob"}), '全部学习资料.zip')
      })
    },
    getFile(item) {
      let that = this
      return new Promise((resolve, reject) => {
        that.JSZipUtils.getBinaryContent(item.url).then(content => {
          resolve(content)
        }).catch(error => {
          reject(error.toString())
        })
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.learning-materials {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 1000px;
  overflow: auto;
  .learning-materials-main {
    height: 80%;
    width: 80%;
    margin: auto;
    background: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    border: 1px solid #DCDFE6;
    .learning-materials-title {
      height: 40px;
      display: flex;
      align-items: center;
      padding: 0 20px;
      background: #4f83e9;
      color: #fff;
      font-size: 18px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    .learning-materials-filelist-main {
      flex: 1;
      margin-top: 20px;
      overflow: auto;
      .learning-materials-filelist-filename {
        padding: 0 20px;
        height: 35px;
        border-bottom: 1px solid #DCDFE6;
        margin-bottom: 5px;
        line-height: 35px;
        display: flex;
        align-items: center;
        span {
          display: inline-block;
          margin-left: 7px;
          color: #606266;
          cursor: pointer;
          &:hover {
            color: #409EFF;
          }
        }
      }
    }
  }
}
</style>
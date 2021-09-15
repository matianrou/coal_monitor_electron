export function createHtml(paperDiv) {
  // 创建Html文本，用于文书保存时返回至服务端
  return `<html>
    <head>
      <style type="text/css">
        html, body {
          margin: 0 auto;
          width: 21cm;
          padding: 0;
          background-color: #e0e0e0;
          overflow-y: auto;
          counter-reset: page;
        }
        div,table,p{margin:0;padding:0;}
        table tr{margin:0;padding:0;}
        table td{margin:0;padding:0;}
        .page {
          position: relative;
          display: block;
          background: white;
          /*page-break-after: always;*/
          width: 21cm;
          /*height: 29.7cm;*/
          margin: 0 auto;
          // padding-bottom: 50px;
          min-height:calc(100vh - 106px)
        }
        .page-sizeA4 {
          width: 21cm;
        }
        .formHeader0 {
          margin: 0 auto;
          width: 19cm;
          font-size: 29.3px;
          font-family: 隶书;
          font-weight: bold;
          height: 1.5cm;
          line-height: 1.5cm;
          border-bottom: 1px solid #000;
        }
        .formHeader1 {
          margin: 0 auto;
          width: 19cm;
          font-size: 27px;
          font-family: 黑体;
          font-weight: bold;
          height: 1.5cm;
          line-height: 1.5cm;
          border-top: solid 1px #000;
          margin-top: 1px;
        }
        .formHeader2 {
          margin: 0 auto;
          width: 19cm;
          margin-top: 2px;
          border-top: solid 2px #000;
          font-size: 27px;
          font-family: 华文中宋,SimSun;
          font-weight: bold;
          height: 1.4cm;
          line-height: 1.4cm;
        }
        .formHeader3 {
          font-size: 27px;
          font-family: 华文中宋,SimSun;
          font-weight: bold;
          height: 1.4cm;
          line-height: 1.4cm;
        }
        .docTop {
          border-collapse: collapse;
          margin: 0 auto;
        }
        .docTop td {
          height: 1cm;
          line-height: 1cm;
        }
        .docBody {
          width: 19cm;
          margin: 0 auto;
          border-collapse: collapse;
          // margin-bottom: 10px;
        }
        .docBody td {
          height: 1cm;
          line-height: 1cm;
          display: inline-block;
        }
        .docBody.mutiLine td{
          line-height:0.7cm !important;
        }
        .docTextarea {
          width: 19cm;
          margin: 0 auto;
          line-height: 1cm;
          display: flow-root;
          position: relative;
          font-family: 仿宋;
          font-size: 16px;
          label {
            display: inline-block;
          }
          span {
            border-bottom: solid 1px #000;
            word-break: break-all;
            cursor: pointer;
          }
          .line {
            border-top: 1px solid ;
            height: 0px;
            position: absolute;
            bottom: 10px;
            width: 100%;
          }
          .no-line {
            position: relative;
            border-bottom: 1px solid rgba($color: #000000, $alpha: 0);
            height: 28px;
            bottom: 0;
            z-index: 99;
            display: inline-block;
            background-color: #fff;
            cursor: text;
          }
          .no-underline {
            border-bottom: 0px;
          }
        }
        .docHeader{
          width: 19cm;
          left: 1cm;
          height: 1cm;
          line-height: 1cm;
          padding-left:16px;
          margin: 0 auto;
          border-bottom: solid 1px #000;
        }
        .docFooter{
          position: absolute;
          bottom: 0;
          width: 19cm;
          left: 1cm;
          height: 1cm;
          line-height: 1cm;
          border-top: solid 2px #000;
        }
        .docFooter span.pageIdx::before {
          content: counter(page);
        }
        .oneLine {
          width: 100%;
          word-break: keep-all; /* 不换行 */
          white-space: nowrap; /* 不换行 */
          overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
          text-overflow: ellipsis; /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
        }
        .mutiLineArea {
          width: 19cm;
          margin: 0 auto;
          position: relative;
        }
        .mutiLineArea p {
          width: 100%;
          line-height: 9.6mm;
          white-space: pre-wrap;
          border-bottom: 1px solid #000;
          text-indent: 2em;
        }
        .mutiLineArea span{
          width: 100%;
          height: 9.6mm;
          line-height: 9.6mm;
        }
        .page-break-line {
          margin: 0 auto;
          height: 10px;
          /*border-top: dashed 1px #c0c0c0;
          border-bottom: dashed 1px #c0c0c0;*/
        }
        .stdRowH {
          height: 1cm;
          line-height: 1cm;
        }
        .halfRowH {
          height: 0.5cm;
          line-height: 0.5cm;
        }
        .cellInput {
          cursor: pointer;
          outline: none;
        }
        .cellInput:focus {
          /*border-bottom:solid 2px gold;*/
          background-color:yellow;
        }
        .textAlignCenter {
          text-align: center;
        }
        .textAlignLeft {
          text-align: left;
        }
        .textAlignRight {
          text-align: right;
        }
        .textVerticalTop {
          vertical-align: top;
        }
        .textPaddingLeft {
          padding-left:0px;
        }
        .textPaddingRight {
          padding-right: 6px;
        }
        .cellTopLine {
          border-top: solid 1px #000;
        }
        .cellBottomLine {
          border-bottom: solid 1px #000;
        }
        .cellRightLine {
          border-right: solid 1px #000;
        }
        .cellLeftLine {
          border-right: solid 1px #000;
        }
        .cellBorderRed {
          border: solid 1px red;
        }
        .show-danger-content {
          padding-bottom: 5px;
          line-height: 30px;
          text-indent: 2em;
        }
        .show-area-item-content {
          word-wrap: break-word;
          word-break: break-all;
          overflow: hidden;
        }
        .show-area-item-p {
          width: 100%;
          height: auto;
          word-wrap: break-word;
          word-wrap: break-all;
          overflow: hidden;
          text-indent: 2em;
        }
        .border-solid {
          border: solid 0px #000;
        }
        .cellLine {
          height: 1px;
          width: 100%;
          background: #000;
          position: absolute;
        }
      </style>
    </head>
    <body>
    ${paperDiv}
    </body>
  </html>`
}
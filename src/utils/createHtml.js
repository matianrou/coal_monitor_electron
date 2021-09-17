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
          min-height:calc(100vh - 106px);
          font-family: 仿宋;
          font-size: 16px;
        }
        #foot {
          position: fixed;
          bottom: 0;
          width: 21cm;
          height: 10px;
          z-index: 99999;
        }
        .page-sizeA4 {
          width: 21cm;
        }
        .page-sizeA3 {
          width: 29.7cm;
          height: 42cm;
        }
        .page-sizeA5 {
          width: 14.8cm;
          height: 21cm;
        }
        .formHeader0 {
          margin: 0 auto;
          width: 15.6cm;
          font-size: 29.3px;
          font-family: 华文中宋,SimSun;
          font-weight: bold;
          height: 1.5cm;
          line-height: 1.5cm;
          border-bottom: 1px solid #000;
        }
        .formHeader1 {
          margin: 0 auto 37px;
          width: 15.6cm;
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
          width: 15.6cm;
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
          width: 15.6cm;
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
        .docTextLine {
          width: 15.6cm;
          margin: 0 auto;
          line-height: 1cm;
          display: flex;
          font-family: 仿宋;
          font-size: 16px;
        }
        .docTextLine .line-div {
          flex: 1;
          border-bottom: solid 1px #000;
          cursor: pointer;
          word-break: break-all;
          word-wrap: break-word;
        }
        .docTextLine .no-line-div {
          flex: 1;
          cursor: pointer;
        }
        .paper-number-div {
          justify-content: right;
        }
        .paper-number-div span {
          border-bottom: solid 1px #000;
          word-break: break-all;
          cursor: pointer;
        }
        .docTextarea {
          width: 15.6cm;
          margin: 0 auto;
          line-height: 1cm;
          display: flow-root;
          position: relative;
          font-family: 仿宋;
          font-size: 16px;
        }
        .docTextarea label {
          display: inline-block;
        }
        .docTextarea span {
          border-bottom: 1px solid #000;
          word-break: break-all;
        }
        .docTextarea .line {
          border-top: 1px solid ;
          height: 0px;
          position: absolute;
          bottom: 10px;
          width: 100%;
        }
        .docTextarea .no-line {
          position: relative;
          border-bottom: 1px solid rgba($color: #000000, $alpha: 0);
          height: 28px;
          bottom: 0;
          z-index: 99;
          display: inline-block;
          background-color: #fff;
        }
        .docTextarea .no-underline {
          border-bottom: 0px;
        }
        .docHeader{
          width: 15.6cm;
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
          width: 15.6cm;
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
          word-break: keep-all; 
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .mutiLineArea {
          width: 15.6cm;
          margin: 0 auto;
          position: relative;
        }
        .mutiLineArea p {
          width: 100%;
          border-bottom: 1px solid #000;
          // height: 9.6mm;
          line-height: 9.6mm;
          white-space: pre-wrap;
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
          outline: none;
        }
        .cellInput:focus {
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
          border-top: 1px solid #000;
          width: 100%;
          position: absolute;
        }
        .checkTable table {
          border-collapse: collapse;
          margin: 0 auto;
          text-align: center;
        }
        .checkTable table td, table th {
          border: 1px solid #000;
        }
      </style>
    </head>
    <body>
    ${paperDiv}
    </body>
  </html>`
}
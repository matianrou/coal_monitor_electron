export function createHtml(paperDiv, corpData) {
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
          margin: 0 auto 30px;
          width: 15.6cm;
          font-size: 29.3px;
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
          font-size: 29.3px;
          font-family: 隶书;
          font-weight: bold;
          height: 1.0cm;
          line-height: 1.0cm;
        }
        .formHeader3 {
          margin: 0 auto 20px;
          width: 15.6cm;
          font-size: 29.3px;
          font-family: 黑体;
          font-weight: bold;
          height: 1.5cm;
          line-height: 1.5cm;
          border-bottom: solid 2px #000;
        }
        .formHeader4 {
          margin: 0 auto 20px;
          width: 15.6cm;
          font-size: 29.3px;
          font-family: 黑体;
          font-weight: bold;
          height: 1.5cm;
          line-height: 1.5cm;
        }
        .formHeader5 {
          margin: 0 auto 20px;
          width: 15.6cm;
          font-size: 18px;
          font-family: 宋体;
          font-weight: bold;
          border-bottom: solid 2px #000;
          display: flex;
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
          height: 0.69cm;
          cursor: pointer;
          word-break: break-all;
          word-wrap: break-word;
        }
        .docTextLine .no-line-div {
          flex: 1;
          cursor: pointer;
        }
        .docTextLine .center {
          ttext-align: center;
        }
        .paper-number-div {
          justify-content: flex-end;
        }
        .paper-number-div span {
          word-break: break-all;
        }
        .paper-number-div .line {
          border-bottom: solid 1px #000;
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
          border-bottom: solid 1px #000;
          word-break: break-all;
        }
        .docTextarea .line {
          border-top: 1px solid ;
          height: 0px;
          position: absolute;
          bottom: 10px;
          width: 100%;
        }
        .docTextarea .line1 {
          border-top: 1px solid ;
          height: 0px;
          position: absolute;
          bottom: 47px;
          width: 100%;
        }
        .docTextarea .no-line {
          position: relative;
          border-bottom: none;
          height: 28px;
          bottom: 0;
          z-index: 99;
          display: inline-block;
          background-color: #fff;
          cursor: text;
        }
        .docTextarea .no-underline {
          border-bottom: 0px;
        }
        .docTextarea .text-decoration {
          text-decoration: 1px solid;
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
          white-space: pre-wrap;
        }
        .mutiLineArea span{
          width: 100%;
          line-height: 2.25rem;
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
          overflow: hidden;
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
      <script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.0.272/jspdf.debug.js"></script>
      <script src="https://cdn.bootcss.com/html2canvas/0.5.0-alpha2/html2canvas.min.js"></script>
      <script>
        function downloadPDF(){
          var element = $("#paper"); // 这个dom元素是要导出pdf的div容器
          var w = element.width(); // 获得该容器的宽
          var h = element.height(); // 获得该容器的高
          var offsetTop = element.offset().top; // 获得该容器到文档顶部的距离
          var offsetLeft = element.offset().left; // 获得该容器到文档最左的距离
          var canvas = document.createElement("canvas");
          var abs = 0;
          var win_i = $(window).width(); // 获得当前可视窗口的宽度（不包含滚动条）
          var win_o = window.innerWidth; // 获得当前窗口的宽度（包含滚动条）
          if(win_o>win_i){
            abs = (win_o - win_i)/2; // 获得滚动条长度的一半
          }
          canvas.width = w * 2; // 将画布宽&&高放大两倍
          canvas.height = h * 2;
          var context = canvas.getContext("2d");
          context.scale(2, 2);
          context.translate(-offsetLeft-abs,-offsetTop);
          // 这里默认横向没有滚动条的情况，因为offset.left(),有无滚动条的时候存在差值，因此
          // translate的时候，要把这个差值去掉
          html2canvas(element).then(function(canvas) {
            var contentWidth = canvas.width;
            var contentHeight = canvas.height;
            //一页pdf显示html页面生成的canvas高度;
            var pageHeight = contentWidth / 592.28 * 841.89;
            //未生成pdf的html页面高度
            var leftHeight = contentHeight;
            //页面偏移
            var position = 0;
            //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
            var imgWidth = 595.28;
            var imgHeight = 592.28/contentWidth * contentHeight;

            var pageData = canvas.toDataURL('image/jpeg', 1.0);

            var pdf = new jsPDF('', 'pt', 'a4');

            //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
            //当内容未超过pdf一页显示的范围，无需分页
            if (leftHeight < pageHeight) {
              pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
            } else { // 分页
              while(leftHeight > 0) {
                pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                leftHeight -= pageHeight;
                position -= 841.89;
                //避免添加空白页
                if(leftHeight > 0) {
                  pdf.addPage();
                }
              }
            }
            pdf.save('${corpData && corpData.corpName ? corpData.corpName : ''}.pdf');
          })
        }
      </script>
    </head>
    <body>
      <div style="position: relative;">
        <div id='paper'>
          ${paperDiv}
        </div>
      </div>
    </body>
  </html>`
}


// <div style="width: 21cm; margin: 0 auto; text-align: right;">
// <a
//   href="javascript:void(0);"
//   style="background-color: #409EFF; border: 1px solid #409EFF; color: #fff; padding: 7px 15px; border-radius: 5px; text-decoration: none;"
//   onclick="downloadPDF()">
//   下载
// </a>
// </div>
// 获取当前日期Format: yyyy-MM-dd
export function getNowFormatDate() {
  let date = new Date();
  let seperator1 = "-";
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  let currentdate = year + seperator1 + month + seperator1 + strDate;
  return currentdate;
}

// 获取当前日期Format: yyyy年M月d日
export function getNowDate() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let strDate = date.getDate();
  // if (month >= 1 && month <= 9) {
  //   month = "0" + month;
  // }
  // if (strDate >= 0 && strDate <= 9) {
  //   strDate = "0" + strDate;
  // }
  let currentdate = year + '年' + month + '月' + strDate + '日';
  return currentdate;
}

// 获取当前时间Format：yyyy-MM-dd hh:mm:ss
export function getNowFormatTime() {
  let now = new Date();
  let year = now.getFullYear(); //得到年份
  let month = now.getMonth();//得到月份
  let date = now.getDate();//得到日期
  let hour = now.getHours();//得到小时
  let minu = now.getMinutes();//得到分钟
  let sec = now.getSeconds();//得到秒
  let MS = now.getMilliseconds();//获取毫秒
  month = month + 1;
  if (month < 10) month = "0" + month;
  if (date < 10) date = "0" + date;
  if (hour < 10) hour = "0" + hour;
  if (minu < 10) minu = "0" + minu;
  if (sec < 10) sec = "0" + sec;
  if (MS < 100) MS = "0" + MS;
  let time = "";
  time = year + "-" + month + "-" + date + " " + hour + ":" + minu + ":" + sec;
  return time;
}

// 获取当前时间Format:yyyyMMddhhmmss
export function getNowTime() {
  let now = new Date();
  let year = now.getFullYear(); //得到年份
  let month = now.getMonth();//得到月份
  let date = now.getDate();//得到日期
  let hour = now.getHours();//得到小时
  let minu = now.getMinutes();//得到分钟
  let sec = now.getSeconds();//得到秒
  let MS = now.getMilliseconds();//获取毫秒
  month = month + 1;
  if (month < 10) month = "0" + month;
  if (date < 10) date = "0" + date;
  if (hour < 10) hour = "0" + hour;
  if (minu < 10) minu = "0" + minu;
  if (sec < 10) sec = "0" + sec;
  if (MS < 100) MS = "0" + MS;
  let time = "";
  time = year + month + date + hour + minu + sec;
  return time;
}

// 获取当前日期Format:yyyyMMdd
export function getNowDay() {
  let now = new Date();
  let year = now.getFullYear(); //得到年份
  let month = now.getMonth();//得到月份
  let date = now.getDate();//得到日期
  month = month + 1;
  if (month < 10) month = "0" + month;
  if (date < 10) date = "0" + date;
  let time = "";
  time = year + month + date
  return time;
}

// 获取当前当年第一天
export function getYearFirstDate() {
  let date = new Date();
  let seperator1 = "-";
  let year = date.getFullYear();
  let currentdate = year + seperator1 + '01' + seperator1 + '01';
  return currentdate;
}

// 获取七天后日期
export function sevenafter(dayNums) {
  let date1 = new Date(),
    time1 = date1.getFullYear() + "-" + (date1.getMonth() + 1) + "-" + date1.getDate();//time1表示当前时间
  let date2 = new Date(date1);
  date2.setDate(date1.getDate() + dayNums);
  let time2 = date2.getFullYear() + "-" + (date2.getMonth() + 1) + "-" + date2.getDate();
  return time2;
}

// 整理日期范围字段：由日期范围数据（date字符串形式）
// YYYY年M月D日-YYYY年M月D日 spliteKey为中间连接符，比如‘-’
// 按逻辑转换为
// YYYY年M月D日至YYYY年M月D日或M月D日或D日
export function handleDate(date, spliteKey) {
  let dateList = date.split(spliteKey)
  let string0 = dateList[0]
  string0 = string0.replace('年', ' ').replace('月', ' ').replace('日', '')
  let string0List = string0.split(' ')
  let string1 = dateList[1]
  string1 = string1.replace('年', ' ').replace('月', ' ').replace('日', ' ')
  let string1List = string1.split(' ')
  let dateString = dateList[0] + '至'
  // 判断第二个日期，如果年份一样则不再展示，如果月份一样也同样不展示，不同时都展示
  if (string0List[0] !== string1List[0]) {
    dateString += string1List[0] + '年'
  }
  if (string0List[1] !== string1List[1]) {
    dateString += string1List[1] + '月'
  }
  if (string0List[2] !== string1List[2]) {
    dateString += string1List[2] + '日'
  }
  if (string0List[0] === string1List[0] && string0List[1] === string1List[1] && string0List[2] === string1List[2]) {
    dateString = dateString.substring(0, dateString.length - 1)
  }
  return dateString
}
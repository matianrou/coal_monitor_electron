import Cookies from 'js-cookie';
import store from '@/store';
import { getDatabase, setDatabase } from '@/utils/databaseOperation'

/**
 * 获取uuid
 */
export function getUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16);
  });
}

//获取指定位数的随机数
export function getRandom(num) {
  const len = num || 36;
  let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
  let maxPos = $chars.length;
  let pwd = '';
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}

//随机字符串
export function randomString(e) {
  e = e || 32;
  let t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
    a = t.length,
    n = "";
  for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n
}

/**
 * 权限
 * @param {*} key
 */
export function hasPermission(key) {
  return window.SITE_CONFIG['permissions'].indexOf(key) !== -1 || false;
}

/**
 * 树形数据转换
 * @param {*} data
 * @param {*} id
 * @param {*} pid
 */
export function treeDataTranslate(data, id = 'id', pid = 'parentId') {
  let res = [];
  let temp = {};//以自己id为索引
  for (let i = 0; i < data.length; i++) {
    temp[data[i][id]] = data[i];
  }
  for (let k = 0; k < data.length; k++) {
    //如果有父级且当前目标的id不等于parentId
    if (temp[data[k][pid]] && data[k][id] !== data[k][pid]) {
      //父级没有children
      if (!temp[data[k][pid]]['children']) {
        temp[data[k][pid]]['children'] = [];
      }
      if (temp[data[k][pid]].parentId === '0') {
        temp[data[k][pid]]['_level'] = 1;
      } else {
        temp[data[k][pid]]['_level'] = 2;
      }
      data[k]['_level'] = temp[data[k][pid]]._level + 1;
      if (Array.isArray(temp[data[k][pid]]['children'])) {
        temp[data[k][pid]]['children'].push(data[k]);
      }
      // temp[data[k][pid]]['children'].push(data[k]);
    } else {
      res.push(data[k]);
    }
  }
  return res;
}

/**
 * 层级选择数据转换
 * @param {*} data
 * @param {*} id
 * @param {*} pid
 */
export function cascaderDataTranslate(data, id = 'id', pid = 'parentId') {
  let res = [];
  let temp = {};
  for (let i = 0; i < data.length; i++) {
    data[i].value = data[i][id];
    data[i].label = data[i].arcName;
    temp[data[i][id]] = data[i];
  }
  for (let k = 0; k < data.length; k++) {
    if (temp[data[k][pid]] && data[k][id] !== data[k][pid]) {
      if (!temp[data[k][pid]]['children']) {
        temp[data[k][pid]]['children'] = [];
      }
      if (temp[data[k][pid]].parentId === '0') {
        temp[data[k][pid]]['_level'] = 1;
      } else {
        temp[data[k][pid]]['_level'] = 2;
      }
      data[k]['_level'] = temp[data[k][pid]]._level + 1;
      temp[data[k][pid]]['children'].push(data[k]);
    } else {
      res.push(data[k]);
    }
  }
  return res;
}

/**
 * 清除登录信息
 */
export function clearLoginInfo() {
  Cookies.remove('token');
  store.commit('resetStore');
}

// 数组排序：升序
// order为自定义排序规则，比如：order = ["1","2","0"]
export function sortbyAsc(name, order) {
  if (order) {
    return function (o, p) {
      var a, b;
      if (typeof o === "object" && typeof p === "object" && o && p) {
        a = o[name];
        b = p[name];
        if (a === b) {
          return 0;
        }
        if (typeof a === typeof b) {
          return order.indexOf(a) < order.indexOf(b) ? -1 : 1;
        }
        return typeof order.indexOf(a) < typeof order.indexOf(b) ? -1 : 1;
      } else {
        throw ("error");
      }
    }
  } else {
    return function (o, p) {
      var a, b;
      if (typeof o === "object" && typeof p === "object" && o && p) {
        a = o[name];
        b = p[name];
        if (a === b) {
          return 0;
        }
        if (typeof a === typeof b) {
          return a < b ? -1 : 1;
        }
        return typeof a < typeof b ? -1 : 1;
      } else {
        throw ("error");
      }
    }
  }
}

// 数组排序：降序
export function sortbyDes(name, order) {
  if (order) {
    return function (o, p) {
      if (typeof o === "object" && typeof p === "object" && o && p) {
        a = o[name];
        b = p[name];
        if (a === b) {
          return 0;
        }
        if (typeof a === typeof b) {
          return order.indexOf(a) > order.indexOf(b) ? -1 : 1;
        }
        return typeof order.indexOf(a) > typeof order.indexOf(b) ? -1 : 1;
      } else {
        throw ("error");
      }
    }
  } else {
    return function (o, p) {
      var a, b;
      if (typeof o === "object" && typeof p === "object" && o && p) {
        a = o[name];
        b = p[name];
        if (a === b) {
          return 0;
        }
        if (typeof a === typeof b) {
          return a > b ? -1 : 1;
        }
        return typeof a > typeof b ? -1 : 1;
      } else {
        throw ("error");
      }
    }
  }
}

//强制保留2位小数，如：2，会在2后面补上00.即2.00
export function toDecimal2(x) {
  let f1 = parseFloat(x);
  if (isNaN(f1)) {
    return false;
  }
  let f2 = Math.round(x * 100) / 100;
  let s = f2.toString();
  let rs = s.indexOf('.');
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + 2) {
    s += '0';
  }
  return s;
}

// 通过本地数据库拉取当前用的全省机构
export async function getAllProvinceOrg (userGroupId) {
  let org = await getDatabase('org')
  // 查询当前用户及全省机构信息
  let userGroup = {}
  if (org.length > 0) {
    if (store.state.user.userType === 'supervision') {
      // 监管时不过滤机构
      userGroup = org.find(item => {
        return item.delFlag !== "1" 
        && item.id === userGroupId
      })
    } else {
      // 监察时过滤机构
      userGroup = org.find(item => {
        return item.delFlag !== "1" 
        && item.id === userGroupId 
        // && (item.type === '3' || item.type === '4' || item.type === '11')
      })
    }
  }
  let arrOrg = []
  if (userGroup.id) {
    if (store.state.user.userType === 'supervision') {
      // 监管 为四级机构，不过滤type为3,4,11
      if (userGroup.grade === '1' || userGroup.grade === '2') {
        // 当前机构为国家级或省级时
        arrOrg = org.filter(item => {
          return item.delFlag !== "1" 
          && (item.id === userGroupId || item.parentIds.includes(userGroupId))
        });
      } else if (userGroup.grade === '3') {
        // 当前机构为市级时，首先获取上一级省级机构，然后获取下属所有机构
        let upGroup = org.find(item => {
          return item.delFlag !== "1" 
          && item.id === userGroup.parentId
        })
        arrOrg = org.filter(item => {
          return item.delFlag !== "1" 
          && (item.id === upGroup.id || item.parentIds.includes(upGroup.id))
        });
      } else if (userGroup.grade === '4') {
        // 县级时，逐步找到市级、省级机构，然后获取下属所有机构
        let upGroup = org.find(item => {
          return item.delFlag !== "1" 
          && item.id === userGroup.parentId
        })
        let provinceGroup = org.find(item => {
          return item.delFlag !== "1" 
          && item.id === upGroup.parentId
        })
        arrOrg = org.filter(item => {
          return item.delFlag !== "1" 
          && (item.id === provinceGroup.id || item.parentIds.includes(provinceGroup.id))
        });
      }
    } else {
      // 监察 为三级机构，并且过滤type为3,4,11
      if (userGroup.grade === '1' || userGroup.grade === '2') {
        // 当前机构为国家级或省级时
        arrOrg = org.filter(item => {
          return item.delFlag !== "1" 
          && (item.id === userGroupId || item.parentIds.includes(userGroupId))
          // && (item.type === '3' || item.type === '4' || item.type === '11')
        });
      } else if (userGroup.grade === '3') {
        // 当前机构为处室时，首先获取上一级省级机构，然后获取下属所有机构
        let upGroup = org.find(item => {
          return item.delFlag !== "1" 
          && item.id === userGroup.parentId
          // && (item.type === '3' || item.type === '4' || item.type === '11')
        })
        arrOrg = org.filter(item => {
          return item.delFlag !== "1" 
          && (item.id === upGroup.id || item.parentIds.includes(upGroup.id))
          // && (item.type === '3' || item.type === '4' || item.type === '11')
        });
      }
    }
  }
  arrOrg.sort(sortbyAsc('grade'))
  return arrOrg
}

// 判断是否为json
export function isJSON (str) {
  str = str.replace(/\s/g, '').replace(/\n|\r/, '');
  if (/^\{(.*?)\}$/.test(str))
    return /"(.*?)":(.*?)/g.test(str);
  if (/^\[(.*?)\]$/.test(str)) {
    return str.replace(/^\[/, '')
      .replace(/\]$/, '')
      .replace(/},{/g, '}\n{')
      .split(/\n/)
      .map(function (s) { return isJSON(s); })
      .reduce(function (prev, curr) { return !!curr; });
  }
  return false;
}

// 通过传入字符串获取数值
export function getMoney (str) {
  let money = 0
  if (str.includes('元')) {
    // 如果字符串中有元字，则检索最后一个元字的位置
    let yuanIndex = 0
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '元') {
        yuanIndex = i
      }
    }
    // 从最后一个元字位置开始往前逐个递减寻找金额
    // 对应金额码表
    let numberdict = [
      {
        label: '1',
        value: '1'
      }, 
      {
        label: '2',
        value: '2'
      }, 
      {
        label: '3',
        value: '3'
      }, 
      {
        label: '4',
        value: '4'
      }, 
      {
        label: '5',
        value: '5'
      }, 
      {
        label: '6',
        value: '6'
      }, 
      {
        label: '7',
        value: '7'
      }, 
      {
        label: '8',
        value: '8'
      }, 
      {
        label: '9',
        value: '9'
      }, 
      {
        label: '0',
        value: '0'
      }, 
      {
        label: '一',
        value: '1'
      }, 
      {
        label: '二',
        value: '2'
      }, 
      {
        label: '三',
        value: '3'
      }, 
      {
        label: '四',
        value: '4'
      }, 
      {
        label: '五',
        value: '5'
      }, 
      {
        label: '六',
        value: '6'
      }, 
      {
        label: '七',
        value: '7'
      }, 
      {
        label: '八',
        value: '8'
      }, 
      {
        label: '九',
        value: '9'
      }, 
      {
        label: '零',
        value: '0'
      }, 
      {
        label: '壹',
        value: '1'
      }, 
      {
        label: '贰',
        value: '2'
      }, 
      {
        label: '叁',
        value: '3'
      }, 
      {
        label: '肆',
        value: '4'
      }, 
      {
        label: '伍',
        value: '5'
      }, 
      {
        label: '陆',
        value: '6'
      }, 
      {
        label: '柒',
        value: '7'
      }, 
      {
        label: '捌',
        value: '8'
      }, 
      {
        label: '玖',
        value: '9'
      }, 
      {
        label: '两',
        value: '2'
      }
    ]
    // 对应节权位单位码表
    let unitDict1 = [
      {
        label: '万',
        value: 10000
      }, 
      {
        label: '亿',
        value: 1000000000
      },  
    ]
    // 对应节内位单位码表
    let unitDict2 = [
      {
        label: '十',
        value: 10
      }, 
      {
        label: '百',
        value: 100
      }, 
      {
        label: '千',
        value: 1000
      }, 
      {
        label: '拾',
        value: 10
      }, 
      {
        label: '佰',
        value: 100
      }, 
      {
        label: '仟',
        value: 1000
      }, 
    ]
    let allMoneyStr = ''
    // 获取整个金额字符串
    for (let i = yuanIndex - 1; i >= 0; i--) {
      // 判断是否对应金额码表，节权位码表和节内位码表，如果都不对应则退出循环查找
      let curNumber = numberdict.findIndex(item => item.label === str[i])
      let curdict1 = unitDict1.findIndex(item => item.label === str[i])
      let curdict2 = unitDict2.findIndex(item => item.label === str[i])
      if (curNumber === -1 && curdict1 === -1 && curdict2 === -1) {
        // 如果不在码表中则表示已经完成金额转换，则完成遍历，跳出循环
        break
      } else {
        allMoneyStr = str[i] + allMoneyStr
      }
    }
    if (allMoneyStr) {
      let moneyStr = ''
      for (let i = 0;  i < allMoneyStr.length; i++) {
        // 从正面遍历整个金额字符串
        let curdict1 = unitDict1.findIndex(item => item.label === allMoneyStr[i]) 
        if (curdict1 > -1) {
          // 如果是节权位
          let str1 = moneyStr ? Number(moneyStr) : 0
          let str2 = money ? money : 0
          money = ((str1 + str2) ? (str1 + str2) : 1) * unitDict1[curdict1].value
          moneyStr = ''
          continue
        }
        let curdict2 = unitDict2.findIndex(item => item.label === allMoneyStr[i]) 
        if (curdict2 > -1) {
          // 如果是节内位
          money = (moneyStr ? Number(moneyStr) : 1) * unitDict2[curdict2].value + (money ? money : 0)
          moneyStr = ''
          continue
        }
        let curNumber = numberdict.findIndex(item => item.label === allMoneyStr[i])
        if (curNumber > -1) {
          // 如果数值
          moneyStr += numberdict[curNumber].value
          continue
        }
      }
      if (moneyStr) {
        money += Number(moneyStr)
      }
    }
  }
  return money
}

// 模糊匹配：现场处理决定
// 逻辑：拆分传入字符串，匹配每一个字，选定匹配上字最多的选项，同样多的选择第一个
// str为传入的字符串
// dict为需要匹配的码表
export function fuzzyearch(str, dict, dictKey) {
  let dictItem = {count: 0}
  if (str) {
    str = str.replace('，','').replace('。', '').replace('、', '')
    for (let i = 0; i < dict.length; i++) {
      let count = 0
      for (let j = 0; j < str.length; j++) {
        if (dict[i][dictKey].includes(str[j])) count++
      }
      if (dictItem.count < count) {
        dictItem = Object.assign({}, dict[i], { count })
      }
    }
  }
  return dictItem
}

// 数字转换为中文大写文字
export function transformNumToChinese(data) {
  let num = parseFloat(data);
  let strOutput = "",
    strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';
  num += "00";
  let intPos = num.indexOf('.');
  if (intPos >= 0) {
    num = num.substring(0, intPos) + num.substr(intPos + 1, 2);
  }
  strUnit = strUnit.substr(strUnit.length - num.length);
  for (let i = 0; i < num.length; i++) {
    strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(num.substr(i, 1), 1) + strUnit.substr(i, 1);
  }
  return strOutput.replace(/零角零分$/, '整').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, "零元")
}

/**
 * 千分符转换
 * @param {Number} num  我们希望传一个数字参数
 * @param {Number} tofixed 这里是一个Number型参数，如果不传或者传null，我们不做保留小数处理
 * @param {Boolean} complete 默认false，表示只对整数部分做千分符处理，true表示小数部分也做千分处理
 */
 export function thousands (num, tofixed, complete = false) {
  if (num === null || num === undefined) {
    return num
  };
  let str = parseFloat(num)
  if (tofixed !== undefined && tofixed !== null) {
    str = str.toFixed(tofixed)
  }
  str = str + ''
  return complete
    ? str.replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
    : /\./.test(str)
      ? str.replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
      : str.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
}

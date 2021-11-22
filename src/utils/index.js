import Cookies from 'js-cookie';
import store from '@/store';
import GoDB from '@/utils/godb.min.js'

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
  let db = new GoDB(store.state.DBName);
  let orgInfo = db.table("orgInfo"); // 机构
  // 查询当前用户及全省机构信息
  let userGroup = await orgInfo.find(item => {
    return item.delFlag === "0" && item.no === userGroupId
  })
  let arrOrg = []
  if (userGroup && userGroup.no) {
    if (userGroup.grade === '1' || userGroup.grade === '2') {
      // 当前机构为国家级或省级时
      arrOrg = await orgInfo.findAll((item) => {
        return item.delFlag == "0" && (item.no === userGroupId || item.parentIds.includes(userGroupId))
      });
    } else if (userGroup.grade === '3') {
      // 当前机构为处室时，首先获取上一级省级机构，然后获取下属所有机构
      let upGroup = await orgInfo.find(item => {
        return item.delFlag === "0" && item.no === userGroup.parentId
      })
      arrOrg = await orgInfo.findAll((item) => {
        return item.delFlag == "0" && (item.no === upGroup.no || item.parentIds.includes(upGroup.no))
      });
    }
  }
  await db.close();
  // arrOrg.sort(sortbyAsc('grade'))
  return arrOrg
}

// 模糊查询
// word为用户输入
// key为校验对象
export function fuzzyearch (word, key) {
  let str = ['',...word,''].join('.*'); //转化成正则格式的字符串
  let reg = new RegExp(str) //正则
  return reg.test(key) //去匹配待查询的字符串
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
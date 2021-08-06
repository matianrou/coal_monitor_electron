import Cookies from 'js-cookie';
import store from '@/store';

/**
 * 获取uuid
 */
export function getUUID () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16);
  });
}

//获取指定位数的随机数
export function getRandom (num){
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
export function randomString (e) {
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
export function hasPermission (key) {
  return window.SITE_CONFIG['permissions'].indexOf(key) !== -1 || false;
}

/**
 * 树形数据转换
 * @param {*} data
 * @param {*} id
 * @param {*} pid
 */
export function treeDataTranslate (data, id = 'id', pid = 'parentId') {
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
      if(Array.isArray(temp[data[k][pid]]['children'])){
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
export function cascaderDataTranslate (data, id = 'id', pid = 'parentId') {
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
export function clearLoginInfo () {
  Cookies.remove('token');
  store.commit('resetStore');
  window.SITE_CONFIG['dynamicMenuRoutesHasAdded'] = false;
}
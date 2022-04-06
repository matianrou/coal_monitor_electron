import Vue from 'vue'

Vue.directive('load', {
  bind: function() {
    console.log('指令绑定到元素调用--', 'bind')
  },
  inserted: function(el) {
    // if (!el.style.position) {
    //   el.style.position = 'relative'
    // } 
    const loadDOM = document.createElement('div')
    loadDOM.setAttribute('class', 'load-class__hook')
    Object.assign(loadDOM.style, {
      // position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: '#191120',
      zIndex: '999',
      minHeight: '300px',
      textAlign: 'center'
    })
    let imgHTML = `<img  src="https://cdn.dribbble.com/users/374839/screenshots/1620553/fish_animation-hd.gif" />`
    loadDOM.innerHTML = imgHTML
    el.appendChild(loadDOM)
    console.log('被绑定的元素插入父节点')
  },
  // update: function(el) {
  //   const loadDOMs = el.getElementsByClassName('load-class__hook')
  //   if (loadDOMs.length > 0) {
  //     el.removeChild(loadDOMs[0])
  //   }
  // },
  componentUpdated: function(el) {
    console.log('VNode及其子VNode全部更新后调用')
    const loadDOMs = el.getElementsByClassName('load-class__hook')
    if (loadDOMs.length > 0) {
      console.log(loadDOMs)
      el.removeChild(loadDOMs[0])
    }
  },
  unbind: function() {
    console.log('指令与元素解绑时调用')
  }
})
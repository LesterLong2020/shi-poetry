/**
 * @Author lester
 * @Date 2020-12-22
 */


import { copy } from "lester-tools";
import Avatar from "src/assets/images/post6.png";
import style from './style.less';
// import '../Index/EventLoop';
// import '../Index/Promise';
// import '../Index/Test';
// import '../Index/CallApplyBind';
// import '../Index/New';
// import '../Index/DebounceThrottle';
// import '../Index/This';
// import '../Index/Http';
// import '../Index/Import';
// import '../Index/DataType';
// import '../Index/Array';
// import '../Index/Iterator';
// import '../Index/Generator';
// import '../Index/AsyncAwait';
// import '../Index/Class';

window.onload = function () {
  document.getElementById('name')?.addEventListener('click', () => {
    copy("我的名字");
  })
};


const render: () => string = () => {
  return (
    `<div class="${style.indexWrap}">` +
      `<div id="name" class="${style.name}">Hello Lester 夕宿君兮</div>` +
      `<input id="lester" />` +
      `<img class="${style.img}" src="${Avatar}" alt=""/>` +
    '</div>'
  )
};

export default render();

/**
 * react原理 nginx axios transform flex box-sizing
 * serverLess pwa service worker 路由 nodejs express
 *
 * call apply bind Promise Event Loop new操作 Reflect.construct vue 防抖节流 闭包 响应式弹性布局 this指向 CommonJS AMD CMD require import 判断数据类型
 * 数组扁平化去重排序 generator async await 跨域 http https原理 GET POST区别 class webpack常用配置
 */

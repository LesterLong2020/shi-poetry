/**
 * @Author lester
 * @Date 2020-12-22
 */


import { copy } from "lester-tools";
import Avatar from "src/assets/images/post6.png";
import style from './style.less';
// import '../Demo/EventLoop';
// import '../Demo/Promise';
// import '../Demo/Test';
// import '../Demo/CallApplyBind';
// import '../Demo/New';
// import '../Demo/DebounceThrottle';
// import '../Demo/This';
// import '../Demo/Http';
// import '../Demo/Import';
// import '../Demo/DataType';
// import '../Demo/Array';
// import '../Demo/Iterator';
// import '../Demo/Generator';
// import '../Demo/AsyncAwait';
// import '../Demo/Class';

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

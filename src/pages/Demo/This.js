/**
 * @Author lester
 * @Date 2021-01-12
 */

const arrowFn = () => {
  console.log(this)
};

const fn = function () {
  console.log(this)
};

// arrowFn();
// fn();

window.name = 'the Window';

const obj = {
  name: 'lester',
  sayName () {
    console.log(this.name);
    setTimeout(  function() {
      console.log('setTimeout ' + this.name)
    }, 10);
    setTimeout(  () => {
      console.log('setTimeout arrow ' + this.name)
    }, 10);
    (() => {
      console.log('arrow ' + this.name)
    })()
  },
};

// obj.sayName();
// obj.sayNameArrow();

const sayName = obj.sayName;
const sayNameArrow = obj.sayNameArrow;

sayName();
// sayNameArrow();

/*
const obj = {
  name: 'lester',
  sayName () {
    console.log(this.name);
    setTimeout(  function() {
      console.log('setTimeout ' + this.name)
    }, 10);
    setTimeout(  () => {
      console.log('setTimeout arrow ' + this.name)
    }, 10);
    (() => {
      console.log('arrow ' + this.name)
    })()
  },
  sayNameArrow: () => {
    console.log(this)
  },
  info: {
    name: 'LesterInfo',
    age: 26,
    sayName () {
      console.log(this);
      setTimeout(() => {
        console.log(this)
      }, 10);
      setTimeout(function() {
        console.log(this)
      }, 10);
    },
    sayNameArrow: () => {
      console.log(this);
      setTimeout(() => {
        console.log(this)
      }, 10);
      setTimeout(function() {
        console.log(this)
      }, 10);
    },
  }
};
*/


// obj.sayName();
// obj.sayNameArrow();
// obj.info.sayName();
// obj.info.sayNameArrow();

// const fnSayName = obj.sayName;
// const fnSayNameArrow = obj.sayNameArrow;

// fnSayName();
// fnSayNameArrow();

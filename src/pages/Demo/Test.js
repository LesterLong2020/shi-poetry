/**
 * @Author lester
 * @Date 2021-01-08
 */

const xhr_1 = new XMLHttpRequest(); // 请求1

xhr_1.onreadystatechange = function () {
  if (xhr_1.readyState === 4 && xhr_1.status === 200) {
    console.log(xhr_1.responseText);
    const xhr_2 = new XMLHttpRequest(); // 请求2
    xhr_2.onreadystatechange = function () {
      if (xhr_2.readyState === 4 && xhr_2.status === 200) {
        console.log(xhr_2.responseText);
        const xhr_3 = new XMLHttpRequest(); // 请求3
        xhr_3.onreadystatechange = function () {
          if (xhr_3.readyState === 4 && xhr_3.status === 200) {
            console.log(xhr_3.responseText);
          }
        }
      }
    }
  }
}

async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2');
}

console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0)

async1();

new Promise(function(resolve) {
  console.log('promise1');
  resolve();
}).then(function() {
  console.log('promise2');
});
console.log('script end');


// 常见知识点
const myArr = [20, 13, 45, 1, 2, [3, 4, 1, 23, 15, [67, 23, 32], 5], 6, [1, 6]];
console.log(myArr.flat(Infinity));
console.log(myArr.flat(3));
console.log(Array.from(new Set(myArr.flat(Infinity))).sort((a, b) => a - b));
console.log(Array.from(new Set(myArr.toString().split(',').map(Number))).sort((a, b) => a - b));



const fun_1 = function (x, y) {
  console.log(arguments);
  console.log(arguments.callee, arguments.callee === fun_1);
  fun_2()
};

const fun_2 = function () {
  console.log(arguments, fun_2.caller, arguments.callee.caller)
};


fun_1(1, 2);

function Lester(name, age) {
  this.name = name;
  this.age = age;
}

function _new(constructor, ...args) {
  const obj = Object.create(constructor.prototype);
  const res = constructor.apply(obj, args);
  return Object.prototype.toString.call(res) === '[object Object]' ? res : obj;
}

const nativeNew = new Lester('lester', 26);

console.log(nativeNew, nativeNew.__proto__, nativeNew.__proto__ === Lester.prototype, nativeNew.__proto__.constructor === Lester);
console.log(nativeNew instanceof Lester);

const myNew = _new(Lester,'lester', 26);

console.log(myNew, myNew.__proto__, myNew.__proto__ === Lester.prototype, myNew.__proto__.constructor === Lester);
console.log(myNew instanceof Lester);
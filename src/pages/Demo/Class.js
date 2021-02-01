/**
 * @Author lester
 * @Date 2021-01-21
 */


class Person {
 constructor(name, word) {
   this.name = name;
   this.word = word;
   // console.log(Person.name, new.target === Person)
 }

 sayName() {
   console.log(`Hello ${this.name} ${this.word}`)
 }
}

// console.log(Person.prototype)

class Lester extends Person {
  constructor(name, word, otherInfo) {
    super(name, word);
    this.name = 'test';
    this.declaration = otherInfo;
  }
}

const obj = {};
let name = 'lester';

Object.defineProperty(obj, 'name', {
  enumerable : true,
  configurable : true,
  get() {
    console.log('读取了')
    return name;
  },
  set(val) {
    console.log('修改了', val)
    name = val;
  }
});
// obj.name = 'Roy';
// console.log(obj.name)
// console.log(obj)
let lester = new Lester('lester', 'run', '奔跑吧');
// console.log(Lester, Lester.prototype);
// lester.sayName()

const myData = {
  name: 'lester',
  age: 26,
  info: {
    declaration: '出于无奈'
  },
  arr: [1, 2]
};

observer(myData);

function observer(data) {
  if (Object.prototype.toString.call(data) === '[object Object]') {
    Object.keys(data).forEach(key => {
      defineObject(data, key);
    });
  }
  if (Object.prototype.toString.call(data) === '[object Array]') {
    defineArray(data);
  }
}

function defineObject(obj, key, val) {
  if (arguments.length === 2) {
    val = obj[key];
  }
  if (typeof val === 'object') {
    observer(val);
  }
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      console.log('获取 ', val);
      return val;
    },
    set(newVal) {
      console.log('修改 ', newVal);
      val = newVal;
    }
  })
}

function defineArray (data) {
  const arrayProto = Array.prototype;
  const arrayMethod = Object.create(arrayProto);
  const methodToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];

  methodToPatch.forEach(method => {
    const origin = arrayProto[method];
    Object.defineProperty(arrayMethod, method, {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function (...args) {
        console.log('数组变化了');
        return origin.apply(this, args);
      }
    })
  });
  data.__proto__ = arrayMethod;
}

// console.log(myData.name);
// console.log(myData.age);
// myData.info.declaration = '荆棘丛中 非鸾凤所栖之所';
// console.log(myData.info.declaration);
myData.arr.push(3, 4, 5, 6);
console.log(myData.arr);
// myData.name = 'Kerry';
// console.log(myData.name);

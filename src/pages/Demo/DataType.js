/**
 * Created by Lester on 2021/1/16
 */

/*
console.log(typeof 1);
console.log(typeof NaN);
console.log(typeof Infinity);

console.log(typeof 'lester');
console.log(typeof true);
console.log(typeof undefined);

console.log(typeof Symbol());
console.log(typeof null);
console.log(typeof function () {});

console.log(typeof {});
console.log(typeof []);
console.log(typeof new Date());
*/

/*const Person = function (name) {
    this.name = name;
};

const person = new Person();

console.log(person.constructor === Person);
console.log(person.constructor === Object);

console.log('-----');

console.log({}.constructor === Object);
console.log([].constructor === Array);
console.log([].constructor === Object);

console.log('-----');

console.log('123'.constructor === String);
console.log(true.constructor === Boolean);
console.log(Symbol().constructor === Symbol);*/

// console.log(123.constructor === Number);

// const obj = {};
// const arr = [];
// const date = new Date();
// const fn = function () {};

/*console.log(person instanceof Person);
console.log(person instanceof Object);

Person.prototype = {};

console.log(person instanceof Person);
console.log(person instanceof Object);*/

// console.log(obj instanceof Object);
//
// console.log(arr instanceof Array);
// console.log(arr instanceof Object);

// console.log(date instanceof Date);
// console.log(date instanceof Object);

// console.log(fn instanceof Function);
// console.log(fn instanceof Object);

// console.log(document instanceof HTMLDocument);
// console.log(document instanceof Object);

/*
console.log('-----');

console.log('' instanceof String);
console.log(1 instanceof Number);
console.log(true instanceof Boolean);
console.log(Symbol() instanceof Symbol);

console.log('-----');

console.log(new String('') instanceof String);
console.log(new Number(1) instanceof Number);
console.log(new Boolean(true) instanceof Boolean);
*/

/*
const iframe = document.createElement("iframe");
document.body.appendChild(iframe);
iframeArray = window.frames[0].Array;
const arr = new iframeArray(1,2);
console.log(arr instanceof Array);
console.log(arr instanceof iframeArray);*/

/*
console.log(Object.prototype.toString.call());
console.log(Object.prototype.toString.call(undefined));
console.log(Object.prototype.toString.call(null));

console.log('-----');

console.log(Object.prototype.toString.call("a"));
console.log(Object.prototype.toString.call(1));
console.log(Object.prototype.toString.call(true));
console.log(Object.prototype.toString.call(Symbol()));

console.log('-----');

console.log(Object.prototype.toString.call([]));
console.log(Object.prototype.toString.call(new Date()));
console.log(Object.prototype.toString.call(document));
console.log(Object.prototype.toString.call(function a(){}));
console.log(Object.prototype.toString.call({}));*/

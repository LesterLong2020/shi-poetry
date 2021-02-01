/**
 * Created by Lester on 2021/1/9
 */


window.name = 'window';

const myObj = {
  name: 'lester'
};

function sayHello (word, type) {
    console.log(word + ' ' + type + ' ' + this.name)
}


sayHello('hi', 'native');

sayHello.call(myObj, 'hello', 'call');
sayHello.apply(myObj, ['hello', 'apply']);
sayHello.bind(myObj, 'hello')('bind');


Function.prototype.callLester = function (context, ...args) {
    context = context || window || global;
    context.fn = this;
    const res = context.fn(...args);
    delete context.fn;
    return res;
};

Function.prototype.applyLester = function (context, args) {
    context = context || window || global;
    context.fn = this;
    const res = context.fn(...args);
    delete context.fn;
    return res;
};

Function.prototype.bindLester = function (context, ...args) {
    context = context || window || global;
    context.fn = this;

    return function (...nextArgs) {
        const res = context.fn(...args, ...nextArgs);
        delete context.fn;
        return res;
    };
};


sayHello.callLester(myObj, 'hello', 'callLester');
sayHello.applyLester(myObj, ['hello', 'applyLester']);
sayHello.bindLester(myObj, 'hello')('bindLester');

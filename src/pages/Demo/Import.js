/**
 * Created by Lester on 2021/1/16
 */

import Person, { name } from './ImportTest';

(function() {
    Person.sayHello();
    console.log(name, 'import now');
    setTimeout(() => {
        Person.sayHello();
        console.log(name, 'import setTimeout');
    }, 1000);
})();

/*
const rt = require('./RequireTest');
const sayHi = rt.sayHi;
const name = rt.name;
sayHi();
console.log(name, 'require now');
setTimeout(() => {
    sayHi();
    console.log(name, 'require setTimeout');
}, 1000);*/

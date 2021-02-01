/**
 * Created by Lester on 2021/1/11
 */

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const SiLee = new Person('李四', 26);

console.log(SiLee);

function _new(constructor, ...args) {
    const obj = Object.create(constructor.prototype);
    const res = constructor.apply(obj, args);
    return typeof res === 'object' ? res : obj;
}

const newSiLee = _new(Person, '李四', 26);

console.log(newSiLee);
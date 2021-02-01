/**
 * Created by Lester on 2021/1/17
 */

const iteratorFn = arr => {
    let index = 0;
    return {
        next: () => {
            return index < arr.length ?
                {value: arr[index++], done: false} :
                {value: undefined, done: true};
        }
    };
};

// const iterator = iteratorFn(['a', 'b', 'c']);

/*
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
*/

/*
const obj = {
    [Symbol.iterator] : function () {
        return {
            next: function () {
                return {
                    value: 1,
                    done: true
                };
            }
        };
    }
};
*/

// const arr = [1, 2, 3];
// const it = arr[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

/*
const generator = function* () {
    yield 1;
    yield* [2,3,4];
    yield 5;
};

const iterator = generator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
*/

/*
const word = "hello";
console.log(typeof word[Symbol.iterator]);

const iterator = word[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());*/

const myIterable = {
    [Symbol.iterator]: function* () {
        yield 1;
        yield 2;
        yield 3;
    }
};
console.log([...myIterable]);

// 或者采用下面的简洁写法

const obj = {
    * [Symbol.iterator]() {
        yield 'hello';
        yield 'world';
    }
};

for (let val of obj) {
    console.log(val);
}

const myArr = [1, 2, 3];

for (let i in myArr) {
    console.log(i, myArr[i]);
}
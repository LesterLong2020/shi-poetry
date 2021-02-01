/**
 * Created by Lester on 2021/1/17
 */

function* wordGenerator() {
    yield console.log('hello');
    yield 'world';
    return 'ending';
}

const wordIterator = wordGenerator();
// console.log(wordIterator.next());
// console.log(wordIterator.next());
// console.log(wordIterator.next());
// console.log(wordIterator.next());

/*
function* foo(x) {
    let y = 2 * (yield (x + 1));
    let z = yield (y / 3);
    return (x + y + z);
}

const a = foo(5);
console.log(a.next());
console.log(a.next());
console.log(a.next());

const b = foo(5);
console.log(b.next());
console.log(b.next(12));
console.log(b.next(8));*/

/*function* dataConsumer() {
    console.log('Started');
    console.log(`1. ${yield}`);
    console.log(`2. ${yield}`);
    return 'result';
}

let genObj = dataConsumer();
genObj.next();*/
// Started
// genObj.next('a')
// // 1. a
// genObj.next('b')

/*function* fibonacci() {
    let [prev, curr] = [0, 1];
    for (;;) {
        yield prev;
        [prev, curr] = [curr, prev + curr];
    }
}

for (let v of fibonacci()) {
    if (v > 100) {
        break;
    }
    console.log(v);
}*/

/*
(function fibonacciA(prev, curr) {
    if (prev === 0) {
        console.log(prev);
    }
    if (curr < 100) {
        console.log(curr);
        arguments.callee(curr, prev + curr);
    }
})(0, 1);*/


/*
function* gErr () {
    try {
        yield;
    } catch (e) {
        console.log('内部捕获', e);
    }
}
const tErr = gErr();
tErr.next();

try {
    tErr.throw('a');
    tErr.throw('b');
} catch (e) {
    console.log('外部捕获', e);
}*/

/*
function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const iterator = gen();

console.log(iterator.next());
console.log(iterator.return('Ending'));
console.log(iterator.next());
*/

/*
function* numbers () {
    console.log(this)
    yield 1;
    try {
        yield 2;
        yield 3;
    } finally {
        yield 4;
        yield 5;
    }
    yield 6;
}
var g = numbers();
g.next() // { value: 1, done: false }
g.next() // { value: 2, done: false }
g.return(7) // { value: 4, done: false }
g.next() // { value: 5, done: false }
g.next() // { value: 7, done: true }*/

/*
function* main() {
    const result = yield request("http://some.url");
    const res = JSON.parse(result);
    console.log(res.data);
}

function request(url) {
    ajaxCall(url, function(response){
        it.next(response);
    });
}

const it = main();
it.next();
*/

function* gen() {
    const res1 = yield 1;
    const res2 = yield res1 + 2;
    const res3 = yield res2 + 3;
    const res4 = yield res3 + 4;
    const res5 = yield res4 + 5;
    return res5 + 6;
}

function run(fn) {
    const it = fn();
    (function next(err, data) {
        const res = it.next(data);
        console.log(res);
        if (!res.done) {
           arguments.callee(null, res.value);
        }
    })()
}

run(gen);


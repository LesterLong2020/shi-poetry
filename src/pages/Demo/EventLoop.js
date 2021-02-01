/**
 * Created by Lester on 2021/1/7
 */

console.log('start script');

setTimeout(() => {
    console.log('timeout');
}, 0);

new Promise((resolve) => {
    console.log('promise 1');
    setTimeout(() => {
        console.log('timeout 2');
    }, 0);
    resolve(1);
}).then(() => {
    console.log('promise 1-1');
}).then(() => {
    console.log('promise 1-2');
}).then(() => {
    console.log('promise 1-3');
});

new Promise((resolve) => {
    console.log('promise 2');
    resolve(2);
}).then(() => {
    console.log('promise 2-1');
}).then(() => {
    console.log('promise 2-2');
});

console.log('end script');
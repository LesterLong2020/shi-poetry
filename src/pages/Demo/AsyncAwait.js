/**
 * @Author lester
 * @Date 2021-01-18
 */

const doSomething = function (time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 0,
        data: {},
        msg: 'ok',
        time
      });
    }, time);
  })
};

const gen = function* () {
  const res1 = yield doSomething(1000);
  console.log('1s后 ', res1);
  const res2 = yield doSomething(2000);
  console.log('再2s后 ', res2);
  return 'That is ok';
};

async function func1(args) {
  // ...
}

// 等价于
function func2(args) {
  return run(function* () {
    // ...
    const res1 = yield doSomething(1000);
    console.log('1s后 ', res1);
    const res2 = yield doSomething(2000);
    console.log('再2s后 ', res2);
    return 'That is ok';
  })
}

function run(fn) {
  const it = fn();
  return new Promise((resolve, reject) => {
    (function next(err, data) {
      const res = it.next(data);
      if(res.value instanceof Promise) {
        res.value.then(response => {
          if (!res.done) {
            arguments.callee(null, response);
          }
          // console.log(response);
        }, error => {
          // console.warn(error);
          reject(error);
        })
      } else {
        // console.log(res.value);
        resolve(res.value);
        if (!res.done) {
          arguments.callee(null, res.value);
        }
      }
    })()
  })
}

func2().then(res => console.log('result', res));

// run(gen);

/*const asyncFn = async function () {
  const res1 = await doSomething(1000);
  console.log('1s后 ', res1);
  const res2 = await doSomething(2000);
  console.log('再2s后 ', res2);
  return 'ok'
};

asyncFn().then(res => {
  console.log(res)
});*/

/*
const asyncFn = async () => {
  await Promise.reject(new Error('error happened'))
};

asyncFn().then(res => console.log(res), err => console.log(err));
*/

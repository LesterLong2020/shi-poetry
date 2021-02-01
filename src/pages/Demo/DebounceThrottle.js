/**
 * Created by Lester on 2021/1/11
 */

window.addEventListener('load', function () {

    function sayHello (name, count) {
        console.log('Hello ' + name + ' 第' + count + '次');
    }

    function debounceFn () {
        let count = 1;
        let timer = null;

        return function (e) {
            window.clearTimeout(timer);
            timer = setTimeout(() => {
                sayHello(e.target.value, count);
                count++;
            }, 1000);
        }
    }

    function throttle() {
        let count = 1;
        let flag = true;
        return function (e) {
           if (flag) {
               flag = false;
               setTimeout(() => {
                   sayHello(e.target.value, count);
                   count++;
                   flag = true
               }, 1000);
           }
        }
    }

    document.getElementById('lester').addEventListener('input', throttle());
});
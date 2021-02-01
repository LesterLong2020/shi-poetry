/**
 * Created by Lester on 2021/1/16
 */

const myArr = [20, 13, 45, 1, 2, [4, 23, 15, [67, 23, 32], 5], 6, [1, 6]];
// console.log(myArr.flat(Infinity));
// console.log(myArr.flat(3));


const newArr = [];

const handleArr = function(data) {
    if (!Array.isArray(data)) {
        return []
    }
    data.forEach(val => {
        if (Array.isArray(val)) {
            arguments.callee(val)
        } else {
            newArr.push(val);
        }
    })
};

const handleArrByReduce = function(data) {
    if (!data) {
        return [];
    }
    return data.reduce((res, item) => res.concat(Array.isArray(item) ?
        arguments.callee(item) : item), [])
};


console.log(Array.from(new Set(myArr.flat(Infinity))).sort((a, b) => a - b));
console.log(Array.from(new Set(myArr.toString().split(',').map(Number))).
sort((a, b) => a - b));
console.log(Array.from(new Set(handleArrByReduce(myArr))).sort((a, b) => a - b));

// handleArr(myArr);
// console.log(newArr);
// console.log(Array.from(new Set(newArr)).sort((a, b) => a -b));
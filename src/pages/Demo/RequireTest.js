/**
 * @Author lester
 * @Date 2021-01-14
 */
let name = 'lester';

const sayHi = () => {
  console.log('Hi', name)
};


setTimeout(() => {
  name = 'Kate';
}, 500);

module.exports = {
  sayHi,
  name
};

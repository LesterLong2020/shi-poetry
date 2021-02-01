/**
 * Created by Lester on 2021/1/16
 */

const person = {
  name: 'lester',
  sayHello () {
      console.log('Hello', this.name)
  }
};

setTimeout(() => {
    person.name = 'Royal';
    name = 'Royal';
}, 500);


export let name = 'lester';
export default person;



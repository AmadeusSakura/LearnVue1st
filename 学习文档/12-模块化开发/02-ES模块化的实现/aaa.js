let name = '小明'
let age = 18
let flag = true

function sum(num1, num2) {
  return num1 + num2
}

if (flag) {
  console.log(sum(20, 30));
}

// 1.导出方式一：
export {
  flag, sum, age, name
}

// 2.导出方式二：
export let num1 = 1000;

// 3.导出函数/类
export function mu1(num1, num2) {
  return num1 * num2
}

export class Person {
  run() {
    console.log('在奔跑');
  }
}

// 5.export default
// 某些情况下，一个模块中包含某个的功能，我们并不希望给这个功能命名，而且让导入者可以自己来命名
//    这个时候就可以使用export default
// 另外，需要注意：
//    export default在同一个模块中，不允许同时存在多个。
// const address = '北京市'
// export default address
export default function (argument) {
  console.log(argument);
}

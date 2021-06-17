// 1.导入的{}中定义的变量
import {flag, sum} from "./aaa.js";

if (flag) {
  console.log('小明是天才，哈哈哈');
  console.log(sum(20, 30));
}

// 2.直接导入export定义的变量
import {num1} from "./aaa.js";

console.log(num1);

// 3.导入export的function
import {mu1, Person} from "./aaa.js";

console.log(mu1(30, 50));
const p = new Person();
p.run()

// 4.导入 export default中的内容
import add from "./aaa.js";

add('你好');

// 5.统一全部导入
import * as aaa from './aaa.js'

console.log(aaa.flag);
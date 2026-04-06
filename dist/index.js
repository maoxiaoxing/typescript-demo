"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { greet, calculate } = require('./overload');
const hello = "Hello, TypeScript!";
console.log(hello);
// 测试函数重载
const result1 = greet('Alice');
const result2 = greet('Bob', 30);
const result3 = calculate(1, 2);
const result4 = calculate('Hello', ' World');
console.log('Function overload test results:');
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
//# sourceMappingURL=index.js.map
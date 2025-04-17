// file-name : operations.js
'use strict';
export default function operations(ops) {
  let result = null;
  let arr = [];
  ops = ops.split(' ');
  for (let i = 0; i < ops.length; i++) {
    let op = ops[i];
    (!isNaN(Math.trunc(op)) && arr.push(Math.trunc(op))) ||
      (op === 'D' && arr.push(arr[arr.length - 1] * 2)) ||
      (op === 'R' && arr.pop()) ||
      (op === '+' && arr.push(arr[arr.length - 1] + arr[arr.length - 2]));
    // console.log(!isNaN(Math.trunc(op)));
  }
  //   console.log(arr);
  result = arr.reduce((a, b) => a + b, 0);
  return result;
}

console.log(`-------------------------- 5 ---------------------------`);

console.log(operations('-2 5 D + R'));
console.log(operations('2 2 3 D +'));
console.log(operations('3 6 D +'));
console.log(operations('10 2 R D +'));

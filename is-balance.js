// file-name: is-balance.js
'use strict';
export default function isBalance(input) {
  let result = null;
  const arr = [];
  const symbols = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  for (const char of input) {
    if (['(', '{', '['].includes(char)) {
      arr.push(char);
    } else if ([')', '}', ']'].includes(char)) {
      if (arr.pop() !== symbols[char]) {
        return false;
      }
    }
  }
  result = arr;
  return result.length === 0;
}

console.log(`-------------------------- 1 ---------------------------`);

console.log(isBalance('(Hello [world])!'));
console.log(isBalance('function test() { return [1, 2, 3]; }'));
console.log(isBalance('if (a > b) { console.log("a is greater");'));
console.log(isBalance('let arr = [1, 2, 3;'));
console.log(isBalance(''));

// file-name: get-repeated-info.js
'use strict';
export default function getRepeatedInfo(number) {
  let result = {};
  const digits = number.toString().split('');

  digits.forEach(digit => {
    if (!result[digit]) {
      result[digit] = '';
    }
    result[digit] += digit.repeat(parseInt(digit));
  });

  return result;
}

console.log(`-------------------------- 2 ---------------------------`);

console.log(getRepeatedInfo(125));
console.log(getRepeatedInfo(5125));
console.log(getRepeatedInfo(12333));
console.log(getRepeatedInfo(0));
console.log(getRepeatedInfo(''));

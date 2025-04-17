// file-name: remove-repetitive.js
'use strict';
function removerRepetitive(string) {
  let result = '';
  // for (let i = 0; i < string.length; i++) {
  //   string[i] === string[i - 1] ? null : (result += string[i]);
  // }
  const noRepeat = [...new Set(string)].join('');
  result = noRepeat.split(' ').join('');
  return result;
}

console.log(`-------------------------- 4 ---------------------------`);

console.log(removerRepetitive('Hello world'));
console.log(removerRepetitive('Hossein'));
console.log(removerRepetitive('aabbcddsdkj'));

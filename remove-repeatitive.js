// file-name: remove-repetitive.js
'use strict';
export default function removerRepetitive(string) {
  let result = null;
  const noRepeat = [...new Set(string)].join('');
  result = noRepeat.split(' ').join('');
  return result;
}

console.log(`-------------------------- 4 ---------------------------`);

console.log(removerRepetitive('Hello world'));
console.log(removerRepetitive('Hossein'));
console.log(removerRepetitive('aabbcddsdkj'));

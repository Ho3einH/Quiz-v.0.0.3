// file-name: encoder.js
'use strict';
function encoder({ inputString, repeatCount }) {
  let result = null;
  function shift(str) {
    str = str[str.length - 1] + str.slice(0, str.length - 1);
    return str
      .split('')
      .map(char => {
        return char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1);
      })
      .join('');
  }

  result = inputString;
  for (let i = 0; i < repeatCount; i++) {
    result = shift(result);
  }
  return result;
}

console.log(`-------------------------- 3 ---------------------------`);

console.log(encoder({ inputString: 'nrrdhmg', repeatCount: 1 }));
console.log(encoder({ inputString: 'abcd', repeatCount: 1 }));
console.log(encoder({ inputString: 'helloworld', repeatCount: 1 }));
console.log(encoder({ inputString: 'mynameishossein', repeatCount: 1 }));
console.log(encoder({ inputString: 'howareyou', repeatCount: 1 }));

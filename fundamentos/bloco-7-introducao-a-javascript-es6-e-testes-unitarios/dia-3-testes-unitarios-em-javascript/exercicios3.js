const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
const expected = myRemoveWithoutCopy([1, 2, 3, 4], 3);
assert.deepStrictEqual(expected, [1, 2, 4] );
assert.notDeepStrictEqual(expected, [1, 2, 3, 4] );

const myList = [5, 6, 7, 8];
myRemoveWithoutCopy(myList, 6)
assert.deepStrictEqual(myList, [5, 7, 8] );

const anotherList = [1, 2, 3, 4]
myRemoveWithoutCopy(anotherList, 5);
assert.deepStrictEqual(anotherList, [1, 2, 3, 4] );

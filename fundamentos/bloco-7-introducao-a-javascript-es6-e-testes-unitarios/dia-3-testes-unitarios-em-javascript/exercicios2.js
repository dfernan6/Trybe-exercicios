const assert = require('assert');
const { throws } = require('assert/strict');
function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
        if (item !== arr[index]) {
            newArr.push(arr[index]);
        }
    }
    return newArr;
}
// implemente seus testes aqui
const expected = myRemove([1, 2, 3, 4], 3);
assert.strictEqual(typeof myRemove, 'function', 'Feito a remoção do item');//colocado primeiramente o typo da função
assert.deepStrictEqual(expected, [ 1, 2, 4 ], 'Feito a remoção do item');
assert.notDeepStrictEqual(expected, [1, 2, 3, 4], 'há diferenças');

const myList = [5, 6, 7, 8];
myRemove(myList, 5)
assert.deepStrictEqual( [5, 6, 7, 8], [5, 6, 7, 8]);

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
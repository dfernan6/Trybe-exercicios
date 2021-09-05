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
myRemove([1, 2, 3, 4], 3);
assert.notStrictEqual([1, 2, 4], 3, 'Feito a remoção do item');
assert.strictEqual([1, 2, 3, 4], 3, 3, 'Feito a remoção do item');
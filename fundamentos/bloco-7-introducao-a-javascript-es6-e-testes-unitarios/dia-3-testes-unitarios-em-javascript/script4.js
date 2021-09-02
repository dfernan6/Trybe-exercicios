const assert = require('assert');
function myFunction(){
    return "Sou uma função"
}
console.log(myFunction());
assert.strictEqual(typeof myFunction, 'function');
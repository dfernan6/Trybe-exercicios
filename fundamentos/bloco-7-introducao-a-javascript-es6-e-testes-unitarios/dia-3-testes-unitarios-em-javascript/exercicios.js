//ex 1 A função sum(a, b) retorna a soma do parâmetro a com o

const assert = require('assert');
const  { throws } = require('assert/strict');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
const expected = sum(1, 2)

// implemente seus testes aqui
assert.ok(expected === 3, 'Um mais dois é igual a três'); // Checa se o primeiro argumento é verdadeiro
assert.strictEqual(expected, 3, 'Um mais dois é igual a três'); // Checa se o primeiro e segundo argumentos são iguais em valor e tipo (===)
assert.equal(expected, '3', 'Um mais dois é igual a três'); // não faz check se esse valor é string
assert.notStrictEqual(expected, 4, 'Um mais dois é igual a três (e não quatro!)'); // Checa se o primeiro e segundo argumentos são diferentes (!==)
assert.throws(() => { sum(1, "2"); }), /parameters must be numbers/ // OK

const testingScope = (escopo) => {
    if (escopo === true) {
      var ifScope = `Não devo ser utilizada fora do meu escopo (if)';
       ótimo, fui utilizada no escopo !`;
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
}
  testingScope(true);

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  function compararNumeros(a, b) {
    return a - b;
  }
  oddsAndEvens.sort(compararNumeros)// Seu código aqui.

  console.log(`Ordenando esses números ${oddsAndEvens} e também
  adicionando template string`); // será necessário alterar essa linha 😉
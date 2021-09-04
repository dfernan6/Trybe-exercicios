
const fatorial = (n) => {
    if (n == 0) {
        return 1;
    }
    var resp = n;
    while (n > 2) {
        resp *= --n;
    }
    return resp;
}
console.log(fatorial(6)) //Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N .
// Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

 var longestWord = "Antônio foi no banheiro e não sabemos o que aconteceu";
 console.log(longestWord.slice());
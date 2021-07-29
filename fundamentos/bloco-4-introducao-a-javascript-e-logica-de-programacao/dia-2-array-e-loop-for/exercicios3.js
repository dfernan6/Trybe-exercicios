let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let qtdeDeValores = numbers.length;
let menorValor = numbers[0];
for (var i=1 ; i<=numbers.length ; i+=1){
    if ( menorValor < numbers[i]) {
        menorValor = numbers[i];
    }
}
console.log("O menor valor é " + menorValor)
// verificar o menor valor 
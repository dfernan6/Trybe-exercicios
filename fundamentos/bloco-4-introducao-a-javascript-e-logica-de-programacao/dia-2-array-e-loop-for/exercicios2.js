let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;
for (let index=0;index<numbers.length;index+=1) {
    media += numbers[index];
   let total = media / numbers.length 
    console.log(total);
 } 
if ( total > 20 ){
console.log("valor maior que 20")
}
else {
    console.log("valor menor ou igual a 20")  
}

let qtdeDeValores = numbers.length;
let maiorValor = numbers[0];
for (var i=1 ; i<=numbers.length ; i+=1){
    if ( maiorValor < numbers[i]) {
        maiorValor = numbers[i];
    }
}
console.log("O maior valor é " + maiorValor) // calculando o maior valor
 
let valoresImpares = numbers[0];
for (let index=0;index<numbers.length;index+=1) {
    let valor = numbers[index] % 2;
   if (valor === 1 || valor === 3){
 valoresImpares = numbers[index];
 console.log("Valores impares encontrados "+ valoresImpares)
   }
 else{
     console.log("não há valores ìmpares")
    }
   } // verificando valores impares
  
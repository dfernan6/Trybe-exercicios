
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers)

let soma = 0;
for (let index=0;index<numbers.length;index+=1) {
  soma += numbers[index];
  console.log(soma); //soma todos elementos da array
}

let media = 0;
for (let index=0;index<numbers.length;index+=1) {
    media += numbers[index];
   let total = media / numbers.length 
    console.log(total);
 } // calcular a media aritmetica do array

 
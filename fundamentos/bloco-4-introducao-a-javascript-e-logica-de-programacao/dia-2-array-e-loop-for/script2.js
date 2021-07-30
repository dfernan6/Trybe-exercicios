let numero = 7;

for ( let index = 0;index <= 10;index++){
    console.log("7x" + index + "=" + index*numero) // tabuada do 7
}

let cars = ["Saab", "Volvo", "BMW"];

for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]) // verificando carros
};

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0;index <= groceryList.length;index++){
    console.log(groceryList[index]); 
    }// verificando a lista de comida
   // FOR/OF
    let numeros = [1,2,3,4,5];
    for(let numero of numeros) {
      console.log(numero);
    }
    let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
console.log(arrOfNumbers);

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for ( let element of names){
console.log(element) // of para apresentar os elementos
}
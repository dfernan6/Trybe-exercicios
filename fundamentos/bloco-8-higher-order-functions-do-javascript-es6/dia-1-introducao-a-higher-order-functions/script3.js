const numberGenerator = () => {
    return Math.random() * 100;
  }
  
  console.log(numberGenerator(1));

const wakeUp = () => "Acordando!";
const coffee = () => "Bora tomar café!!";
const sleep = () => "Partiu dormir!!";
const doingThings = (wakeUp) => {
    return wakeUp
}
// Ao chamar a função doingThings:
console.log(doingThings(wakeUp()));
console.log(doingThings(coffee()));
console.log(doingThings(sleep()));
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const myWebpage = document.getElementById('my-spotrybefy');
const input = document.getElementById('"Texto alterado"');
/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/
let primeiroTexto = document.getElementsByClassName("tech")[0];
primeiroTexto.addEventListener("click", resetText)
function resetText(event) {
  event.target.innerText = "Texto alterado";
  console.log(event.target);
  console.log(event.type);
}
let terceiroTexto = document.getElementsByClassName("tech")[2];
terceiroTexto.addEventListener("dblclick", doubleClick)
function doubleClick(top3){
top3.target.innerHTML = "https://dfernan6.github.io";
console.log(top3.target);
console.log(top3.type);
}
terceiroTexto.addEventListener("mouseenter", alterandoCores)
function alterandoCores(altera){
  altera.target.style.backgroundColor = "green";
  console.log(altera.target);
  console.log(altera.type);
}
terceiroTexto.addEventListener("mouseout", retornandoCores)
function retornandoCores(retorna){
  retorna.target.style.backgroundColor = "purple";
  console.log(retorna.target);
  console.log(retorna.type);
}
// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
let filhinho = "Beware!";
let textinho = "Hello Friends";
let textoInserido = document.querySelector("#elementoOndeVoceEsta");
let creatingBrother = document.createElement("p");
creatingBrother.innerText = textinho;
textoInserido.appendChild(creatingBrother);
let marcandoFilhos = document.querySelector("#primeiroFilhoDoFilho");
let creatingChild = document.createElement("p");
creatingChild.innerText = filhinho;
let textinho = "Hello Friends";

let textoInserido = document.querySelector("#elementoOndeVoceEsta");
let creatingBrother = document.createElement("p");
creatingBrother.innerText = textinho;
textoInserido.appendChild(creatingBrother)
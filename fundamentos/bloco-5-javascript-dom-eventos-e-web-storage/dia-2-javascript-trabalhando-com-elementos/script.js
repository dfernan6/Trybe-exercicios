let filhinho = "Beware!";
let textinho = "Hello Friends";
let textoInserido = document.querySelector("#elementoOndeVoceEsta");
let creatingBrother = document.createElement("p");
creatingBrother.innerText = textinho;
textoInserido.appendChild(creatingBrother);
let marcandoFilhos = document.querySelector("#primeiroFilhoDoFilho");
let creatingChild = document.createElement("p");
creatingChild.innerText = filhinho;

function apagaFilhos(pai) {
    const children = pai.children
    for (let index = 0; index < children.length; index += 1) {
      child = children[index]
      childName = child.id
      if (childName === 'pai' || childName === 'elementoOndeVoceEsta' || childName === 'primeiroFilhoDoFilho') {
        apagaFilhos(child)
      } else {
        child.remove()
        index -= 1
      }
    }
  }
  console.log(apagaFilhos());


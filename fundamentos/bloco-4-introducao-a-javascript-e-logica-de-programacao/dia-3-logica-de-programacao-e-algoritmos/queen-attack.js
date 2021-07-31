//posição da rainha 
let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;

//posição da peça
let posicaoPecaLinha = 5;
let posicaoPecaColuna = 7;

// identifica se o ataque bem sucedido
let ataqueBemSucedido = false;

// ataques 

//Como posso verificar se a peça esta na mesma linha que a rainha? E se estiver, ataque bem sucedido

if(posicaoRainhaLinha === posicaoPecaLinha){
  ataqueBemSucedido = true;
  console.log("Ataque bem sucedido na mesma linha");
}

// Se a peça estiver na mesma coluna, ataque bem sucedido 

if(posicaoRainhaColuna === posicaoPecaColuna){
  ataqueBemSucedido = true;
  console.log("Ataque bem sucedido na mesma coluna");
}

//DIagonal inferior esquerda
// for(inicia, momento de parada, de quanto em quanto ele roda)

for(let inferiorEsquerda = 1; inferiorEsquerda < 8; inferiorEsquerda += 1){
  let linhaAtualRainha = posicaoRainhaLinha - inferiorEsquerda;
  let colunaAtualRainha = posicaoRainhaColuna - inferiorEsquerda;

  //Se a linha atual da rainha for igual a linha atual da peça E coluna atual da rainha for igual a coluna atual da peça, ataque bem sucedido

  if(linhaAtualRainha === posicaoPecaLinha && colunaAtualRainha === posicaoPecaColuna){
    ataqueBemSucedido = true;
    console.log("Ataque bem sucedido na diagonal inferior esquerda");
    break;
  }

  // Se a posição linha da rainha for menor 1 ou a coluna for menor que 1, o tabuleiro terminou

  if(linhaAtualRainha < 1 || colunaAtualRainha < 1){
    break;
  }
}

//Diagonal superior esquerda
for( let superiorEsquerda = 1; superiorEsquerda < 8; superiorEsquerda += 1){

  let linhaAtualRainha = posicaoRainhaLinha + superiorEsquerda;
  let colunaAtualRainha = posicaoRainhaColuna - superiorEsquerda;

  //Se a posição atual da rainha em linha for igual a posição da peça em linha E a posição da coluna atual da rainha for igual a posição da peça em coluna, ataque bem sucedido é igual a true

  if((linhaAtualRainha === posicaoPecaLinha) && (colunaAtualRainha === posicaoPecaColuna)){
    console.log("Ataque bem sucedido na diagonal superior esquerda");
    ataqueBemSucedido = true;
    break;
  }

  //Se a posição atual da rainha for maior que oito ou coluna menor que 1, para o loop

  if(linhaAtualRainha > 8  || colunaAtualRainha < 1) {
    break;
  }
}

//Diagonal superior direita 

for(let superiorDireita = 1 ;  superiorDireita < 8; superiorDireita += 1){
  let linhaAtualRainha = posicaoRainhaLinha + superiorDireita;
  let colunaAtualRainha = posicaoRainhaColuna + superiorDireita;

  // Se a posição  atual da rainha em linha for igual a posição da peça em linha EEEEE a posição atual da rainha em coluna for igual a posição da peça em coluna, ATAQUE BEM SUCEDIDO

  if(linhaAtualRainha === posicaoPecaLinha && colunaAtualRainha === posicaoPecaColuna){
    ataqueBemSucedido = true;
    console.log("Ataque bem sucedido na diagonal superior direita");
  }
}


//DIAGONAL INFERIOR DIREITA
for(let inferiorDireita = 1; inferiorDireita < 8; inferiorDireita += 1){
  let linhaAtualRainha = posicaoRainhaLinha - inferiorDireita;

  let colunaAtualRainha = posicaoRainhaColuna + inferiorDireita;

  // Se a posição  atual da rainha em linha for igual a posição da peça em linha EEEEE a posição atual da rainha em coluna for igual a posição da peça em coluna, ATAQUE BEM SUCEDIDO

  if(linhaAtualRainha === posicaoPecaLinha && colunaAtualRainha === posicaoPecaColuna){
    ataqueBemSucedido = true;
    console.log("Ataque bem sucedido na diagonal inferior direita");
  }
}

//Se o ataque não for bem sucedido, a peça se safa

if(ataqueBemSucedido === false){
  console.log("A peça não pode ser atacada pela a Rainha. Se safou dessa vez :D");
}
let statusCarro = "desligado"
let velocidadeCarro = 0;
let rotatoria = 0;

function ligarDesligar(){
    if ( statusCarro === "desligado"){
        statusCarro = "ligado";
    }
    else {
        statusCarro = "desligado"
    }
    return "Seu carro acabou de ser " + statusCarro;
}
function acelerar(incremento){
    velocidadeCarro = velocidadeCarro + incremento;
    return "Você está a " + velocidadeCarro + "km/h acho bom frear hein!" 
}
function frear(decremento){
    velocidadeCarro = velocidadeCarro - decremento;
    return "Você está a " + velocidadeCarro + " acho bom acelerar hein!"
}
function direcao(rotatoria){
    if (rotatoria >= 0){
        return "Você está virando pra direita"
    }
    else {
        return "Você esta virando à esquera"
    }
}
console.log(ligarDesligar());
console.log(frear(30));
console.log(direcao(10));
let numero = 30;
let porcentagem = 100;
let numeroCalc = numero * porcentagem;
let resultado = porcentagem / 100 * numeroCalc;

if (resultado >= 90 && resultado <= 100){
    console.log("A")
}
else if (resultado >= 80){
    console.log("B")
}
else if (resultado >= 70){
    console.log("C")
}
else if (resultado >= 60){
    console.log("D")
}
else if (resultado >= 50){
    console.log("E")
}
else if (resultado > 0 && resultado < 50 ){
    console.log("F")
}
else {
    console.log("ERRO")
}
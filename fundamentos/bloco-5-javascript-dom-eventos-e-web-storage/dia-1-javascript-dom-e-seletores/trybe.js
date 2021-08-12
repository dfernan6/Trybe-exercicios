
let pilotosDeF1 = document.getElementsByClassName("cpiloto-f1-atual")

for (let index = 0; index < pilotosDeF1.length; index += 1){
    pilotosDeF1[index].innerText = "Lewis Hammilton";
}

let primeiroPiloto = document.getElementsByClassName("cpiloto-f1-atual")[0];
primeiroPiloto.style.color= "white";

let pilotoDivino = document.getElementsByTagName("p")[0];
pilotoDivino.style.color= "white";
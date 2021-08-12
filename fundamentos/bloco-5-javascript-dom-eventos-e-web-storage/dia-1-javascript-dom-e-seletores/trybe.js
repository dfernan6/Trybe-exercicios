console.log(document.getElementById("iTextoTopo").innerHTML="Aprendizado da <b>aula</b> de hoje");
let paragraph = document.getElementById("paragraph");
paragraph.style.color="blue";
let paragraph2 = document.getElementById("second-paragraph");
paragraph2.style.color="green";

let pilotosDeF1 = document.getElementsByClassName("cpiloto-f1-atual")

for (let index = 0; index < pilotosDeF1.length; index += 1){
    pilotosDeF1[index].innerText = "Lewis Hammilton";
}
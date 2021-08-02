let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
}
  console.log("A jogadora " + player["name"] + " " +
   player["lastName"] + " " + "tem " + player["age"] +
   " anos de idade e foi considerada a melhor do mundo em " + 
   player["bestInTheWorld"] + " ou seja, a jogadora " +
    player["name"] + " " + player["lastName"] + " " +
     "tem " + player.bestInTheWorld.length + " titulos mundiais."); 
  console.log("A jogadora possui " + medals["golden"] +

  " medalhas de ouro e " + medals["silver"] + " medalhas de prata." );
  // objeto feito acima player
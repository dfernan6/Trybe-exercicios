let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };
  console.log("Bem vinda " + info["personagem"]);
  console.log(info);
  console.log(info["recorrente"]);
  for ( let value in info){
      console.log(value);
  }
  for ( let value in info){
      console.log(info[value])
  }
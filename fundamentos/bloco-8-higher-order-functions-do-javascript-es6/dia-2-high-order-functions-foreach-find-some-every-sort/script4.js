const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => names.some((name) => name === 'Ana');
  //Adicione seu código aqui

console.log(hasName(names, 'Ana'))

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => Object.values(arr).every((minimumAge) => minimumAge >= 18);
    //Adicione seu código aqui
  
  console.log(verifyAges(people, 18));
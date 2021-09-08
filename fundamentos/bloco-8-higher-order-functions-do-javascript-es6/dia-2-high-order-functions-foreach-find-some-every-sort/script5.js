const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  // Adicione se código aqui
  people.sort(function(a,b) {
    if(a.age < b.age) return -1;
    if(a.age > b.age) return 1;
});
  console.log(people);
  people.sort(function(a,b) {
    if(a.age < b.age) return 1;
    if(a.age > b.age) return -1;
});
  console.log(people);
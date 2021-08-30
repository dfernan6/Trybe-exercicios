// pt 1 Add novas chaves
const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};
console.log(customer)

//adicionando sobrenome ao objeto
customer.lastName = 'Faria';

console.log(customer);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

console.log(customer2);
//adicionando sobrenome ao objeto
customer2['lastName'] = 'Silva';

console.log(customer2);

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);
//No exemplo acima, eu vi que há diferentes formas de associar chaves e valores a um objeto.

// pt 2 Object.keys

const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };
  console.log(coolestTvShow);

// utilizando a estrutura de repetição for...in
for (const property in coolestTvShow) {
    console.log(property);
  }
  
// maneira mais robusta de trabalhar com objetos e seus valores
  console.log(Object.keys(coolestTvShow));

  const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

  const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for(index in arrayOfSkills){
      console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
  };
  
  console.log('Estudante 1');
  listSkills(student1);
  
  console.log('Estudante 2');
  listSkills(student2);
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
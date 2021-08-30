if (true) {
    // inicio do escopo do if
    var userAge = "20";
    console.log(userAge); // 20
    // fim do escopo do if
  }
  console.log(userAge); // 20

  const userInfo = {
    name: "Cláudio",
    id: "5489-2",
    email: "claudio@email.com"
  };
  userInfo.name = "João"
  
  console.log(userInfo) // { name: "João", id: "5483-2", email: "claudio@email.com }

  const technologies = ['Javascript', 'CSS', 'HTML'];
  technologies.push('React');
  console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]
  
  /*technologies = ['Javascript', 'CSS', 'HTML', 'React']
  console.log(technologies);  Erro*/


  // template literals
  const myName = "Isabella"
  console.log(`Welcome ${myName}!`);

  // Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
)

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n')

//operadores ternários
// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression) // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression) // isso é mentira

// Situação em que é mais simples usar o operador ternário:
const checkIfElse = (age) => {
  if (age >= 18) {
    return `Você tem idade para dirigir!`;
  } else {
    return `Você ainda não tem idade para dirigir...`;
  }
};

const checkTernary = (age) => (
  age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`
);

// ------------------------

// Situação em que usar o operador ternário não faz muito sentido:

const checkIfElse = (fruit) => {
  if (fruit === `maçã`) {
    return `Essa fruta é vermelha`;
  } else if (fruit === `banana`) {
    return `Esta fruta é amarela`;
  } else {
    return `Não sei a cor`;
  }
}; 

const checkTernary = (fruit === `maçã`) ? `Essa fruta é vermelha` 
  : ((fruit === `banana`) ? `Esta fruta é amarela` : `Não sei a cor`);

// Aninhar operadores  ternários, como no exemplo acima, não é uma boa prática,
// pois torna o seu código truncado e difícil de ler, tirando todo o sentido de um
// operador cujo objetivo é facilitar a sua vida e a da pessoa que lerá seu código
// no futuro!


//arrow functions
const printName = () => "Lucas";
console.log(printName());

const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));
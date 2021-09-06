const sum = (number1, number2) => {
    return number1 + number2;
  }
  
  const sumVariable = sum(1, 2);
  
  console.log(sumVariable);
  //  [Function: sum]

  const sayHello = () => {
    return ('hello trybers');
  }
  //Passar funções como argumento para outras funções:
  const printGreeting = (callback) => {
      console.log(callback());
  }
  //Retornar uma função de outra função:
  printGreeting(sayHello);

  const sumFixAmount = (amount) => {
    return (number) => amount + number;
  }
  
  const initialSum = sumFixAmount(15)
  console.log(initialSum(5));
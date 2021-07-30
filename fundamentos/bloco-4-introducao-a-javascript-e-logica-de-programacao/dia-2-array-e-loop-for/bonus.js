let numbers = [5,4,7,8];

for (let index = 0; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
  console.log(numbers)
  // feito o bubble sort em ordem crescente

  for (let index = 0; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
  console.log(numbers)
  // feito o bubble sort em ordem decrescente


  for (let index=1;index<numbers.length;index+=1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    let mult = index * secondIndex;
     numbers
    console.log(numbers);
}
  } // fazer a correção
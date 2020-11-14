function times(number1, number2) {
  let result = number1 * number2;
  console.log(result)
  return result;
}

let numbers = [1, 2, 3, 4, 5,] 
let rootNumber = times(numbers[0], numbers[0])
let expansion1 = times(numbers[0], numbers[1])
let expansion2 = times(numbers[2], expansion1)
let expansion3 = times(numbers[3], expansion2)
let expansion4 = times(numbers[4], expansion3)


function multiply() {
  let rlSync = require('readline-sync');
  let firstNumber = rlSync.question('Enter First Name ');
  let secondNumber = rlSync.question('Enter Second Number ');
  let multiple = firstNumber * secondNumber;
  console.log(`${firstNumber} * ${secondNumber} = ${multiple}`)
}
multiply()

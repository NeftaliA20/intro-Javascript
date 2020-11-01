let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you? '));
let ten = 10 + age ;
let twenty = 20 + age;
let thirty = 30 + age;
let forty = 40 + age;

console.log(`
  You are ${age} years old
  In 10 years, you will be ${ten} years old
  In 20 years, you will be ${twenty} years old
  In 30 years, you will be ${thirty} years old
  In 40 years, you will be ${forty} years old
`);

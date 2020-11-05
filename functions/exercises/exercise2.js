let rlSync = require('readline-sync');
function fullName() {
 let firstName = rlSync.question("What's your first name? ");
 let lastName = rlSync.question("What's your last name? ");
 console.log(`Welcome, ${firstName} ${lastName}!`);
}
fullName()
function evenOrOdd(value) {
  if (!Number.isInteger(value)) {
    console.log('Sorry, this is not an Integer');
    return;
  }
  if (value % 2 === 0) {
    console.log('This number is even');
  } else {
    console.log('This number is odd');
  } 
}

evenOrOdd('2');
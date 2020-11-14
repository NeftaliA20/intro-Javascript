function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

The above code logs nothing and a error message because the
return method cancels the function before logging anything.
function fibs (num) {
  // create empty fib array
  // if counter is 0, push 0 to array
  // else if counter is 1, push 1 to array
  // else push arr[counter-2] + arr[counter - 1] to fib
  // return fibonacci

  let fibonacci = [];
  for(let counter = 0; counter < num; counter++) {
    if(counter === 0) fibonacci.push(0);
    else if (counter === 1) fibonacci.push(1);
    else fibonacci.push(fibonacci[counter - 1] + fibonacci[counter - 2]);
  }
  return fibonacci;
}

function fibsRec (n) {
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    return [ ...fibsRec(n - 1), fibsRec(n - 1)[fibsRec(n - 1).length - 1] + fibsRec(n - 2)[fibsRec(n - 2).length - 1] ];
  }
}

console.log(fibs(8));
console.log(fibsRec(8));

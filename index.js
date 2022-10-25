// for
let number = 10;
let factorial = 1;
for (let i = 1; i <= number; i++) {
  factorial *= i;
}
console.log(factorial);

//while
let numero = 10;
let factor = numero;
while (numero > 1) {
  numero--;
  factor *= numero;
  console.log(factor);
}

// break

let num = 10;
let fact = num;
while (true) {
  num--;
  fact *= num;
  if (num === 1) 
  break;
}
console.log(fact);

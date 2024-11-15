// factorial

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

//fibonachi

function fibonachi(n) {
  if (n <= 1) return 1;
  return fibonachi(n - 1) + fibonachi(n - 2);
}

console.log(fibonachi(8));

// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5a99a03e4a6b34bb3c000124

function numPrimorial(n) {
  let num = [];
  let number = 0;

  while (num.length < n) {
    if (cekPrime(number)) {
      num.push(number);
    }

    number++;
  }

  return num.reduce((a, b) => a * b, 1);
}

function cekPrime(n) {
  for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
    if (n % i === 0) return false;
  }
  return n >= 2;
}

console.log({ "": numPrimorial(5) });

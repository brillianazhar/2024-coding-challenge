// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/556deca17c58da83c00002db

function tribonacci(signature, n) {
  while (signature.length < n) {
    signature = [...signature, signature.slice(-3).reduce((a, b) => a + b, 0)];
  }
  return signature.slice(0, n);
}

console.log({ "": tribonacci([1, 1, 1], 10) });

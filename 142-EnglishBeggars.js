// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/59590976838112bfea0000fa

function beggars(values, n) {
  return Array.from({ length: n }, (_, i) => i).map((index) => {
    let num = [];
    for (let i = index; i <= values.length; i += n) {
      num.push(values[i] || 0);
    }
    return num.reduce((a, b) => a + b, 0);
  });
}

console.log({ "": beggars([1, 2, 3, 4, 5], 2) });

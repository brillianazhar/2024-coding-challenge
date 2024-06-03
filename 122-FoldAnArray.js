// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/57ea70aa5500adfe8a000110

function foldArray(array, runs) {
  let num = [...array];
  for (let i = 0; i < runs; i++) {
    for (let j = 0; j < Math.floor(num.length / 2); j++) {
      num[j] += num[num.length - 1 - j];
    }
    num = num.slice(0, Math.ceil(num.length / 2));
  }
  return num;
}

console.log({ "": foldArray([1, 2, 3, 4, 5], 2) });

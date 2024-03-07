// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5813d19765d81c592200001a

function dontGiveMeFive(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => i + start).filter(
    (num) => !String(num).includes("5")
  ).length;
}

console.log(dontGiveMeFive(4, 17));

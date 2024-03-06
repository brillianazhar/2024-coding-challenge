// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/57f609022f4d534f05000024

function stray(numbers) {
  return numbers.find(
    (number) => numbers.indexOf(number) === numbers.lastIndexOf(number)
  );
}

console.log(stray([1, 2, 1]));

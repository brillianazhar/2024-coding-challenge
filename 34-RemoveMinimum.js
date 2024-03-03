// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/563cf89eb4747c5fb100001b

function removeSmallest(numbers) {
  //   num = [...numbers];
  //   num.length === 0 ? [] : num.splice(num.indexOf(Math.min(...num)), 1);
  //   return num;

  // Cara lain
  return numbers.filter((n, i) => i !== numbers.indexOf(Math.min(...numbers)));
}

console.log(removeSmallest([1, 2, 3, 4, 5]));

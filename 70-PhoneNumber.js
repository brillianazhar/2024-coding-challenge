// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/525f50e3b73515a6db000b83

function createPhoneNumber(numbers) {
  //   return `(${numbers.slice(0, 3).join("")}) ${numbers
  //     .slice(3, 6)
  //     .join("")}-${numbers.slice(6, 10).join("")}`;

  // Cara lain
  return numbers.join("").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
}

console.log({ "": createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) });

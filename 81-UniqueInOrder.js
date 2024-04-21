// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/54e6533c92449cc251001667

const uniqueInOrder = function (iterable) {
  //   const result = [];
  //   [...iterable].map((item, i) =>
  //     item !== iterable[i - 1] ? result.push(item) : false
  //   );
  //   return result;

  // Cara lain
  return [...iterable].filter((item, i) => item !== iterable[i - 1]);
};

console.log({ "": uniqueInOrder("ABBCcAD") });

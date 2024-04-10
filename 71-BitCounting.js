// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/526571aae218b8ee490006f4

const countBits = function (n) {
  //   return [...n.toString(2)].filter((bin) => bin === "1").length;

  // Cara lain
  return n.toString(2).split("0").join("").length;
};

console.log({ "": countBits(9) });

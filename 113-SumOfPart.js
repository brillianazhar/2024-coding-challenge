// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5ce399e0047a45001c853c2b

function partsSums(ls) {
  //   let total = 0;
  //   return Array.from({ length: ls.length + 1 }, (_, i) => {
  //     if (i === 0) return 0;
  //     total += ls[ls.length - i];
  //     return total;
  //   }).reverse();

  //Cara lain
  ls.unshift(0);
  let total = ls.reduce((a, b) => a + b);
  return ls.map((n) => (total = total - n));
}

console.log({ "": partsSums([1, 2, 3, 4, 5, 6]) });

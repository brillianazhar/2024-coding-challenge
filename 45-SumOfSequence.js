// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/586f6741c66d18c22800010a

const sequenceSum = (begin, end, step) => {
  //   let sum = 0;
  //   for (let i = begin; i <= end; i += step) {
  //     sum += i;
  //   }
  //   return sum;

  // Cara lain
  if (begin > end) return 0;
  return Array.from(
    { length: Math.ceil(end / step) + 1 },
    (_, i) => begin + i * step
  )
    .filter((num) => num <= end)
    .reduce((a, b) => a + b);
};

console.log(sequenceSum(2, 6, 2));

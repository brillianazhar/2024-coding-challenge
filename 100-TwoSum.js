// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/52c31f8e6605bcc646000082

function twoSum(numbers, target) {
  let result = [];
  numbers.map((n, i) =>
    numbers.find((n2, index) => {
      if (n + n2 === target && i !== index) {
        result.push([i, index]);
      }
    })
  );
  return result[0];
}

console.log({ "": twoSum([1234, 5678, 9012], 14690) });

// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5226eb40316b56c8d500030f

function pascalsTriangle(n) {
  let result = [];
  Array.from({ length: n }, (_, i) => {
    if (i === 0) {
      result.push(1);
    } else {
      let current = [];
      for (let index = 0; index <= i; index++) {
        if (index === 0 || index === i) {
          current.push(1);
        } else {
          current.push(result[i - 1][index - 1] + result[i - 1][index]);
        }
      }
      result.push(current);
    }
  });
  return result.flat();
}

console.log({ "": pascalsTriangle(5) });

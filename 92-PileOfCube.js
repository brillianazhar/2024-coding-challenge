// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5592e3bd57b64d00f3000047

function findNb(m) {
  //   const n = Math.floor(Math.cbrt(m) / 2);
  //   console.log({ "": n });
  //   let result = [];
  //   for (let i = 1; i <= n + 1; i++) {
  //     result[i] = i ** 3;
  //     if (result.reduce((a, b) => a + b) >= m) {
  //       return result.reduce((a, b) => a + b) === m ? result.length - 1 : -1;
  //     }
  //   }
  //   return -1;

  //Cara lain
  let n = 0;
  let sum = 0;

  while (sum < m) {
    n++;
    sum += n ** 3;
  }

  return sum === m ? n : -1;
}

console.log({ "": findNb(1071225) });

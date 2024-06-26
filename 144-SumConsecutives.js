// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/55eeddff3f64c954c2000059

function sumConsecutives(s) {
  //   let result = [];
  //   let current = 0;
  //   s.map((n, i) => {
  //     if (i === 0 || n === s[i - 1] || n === s[i + 1]) {
  //       current += n;
  //       if (i === s.length - 1 || s[i + 1] !== n) {
  //         result.push(current);
  //         current = 0;
  //       }
  //     } else {
  //       current += n;
  //       result.push(current);
  //       current = 0;
  //     }
  //   });
  //   return result;

  // Cara lain
  return s.reduce((prev, curr, i, arr) => {
    if (curr !== arr[i - 1]) prev.push(curr);
    else prev[prev.length - 1] += curr;
    return prev;
  }, []);
}

console.log({ "": sumConsecutives([1, 4, 4, 4, 0, 4, 3, 3, 1]) });

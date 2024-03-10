// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/566fc12495810954b1000030

function nbDig(n, d) {
  // let result = 0;
  // Array.from({ length: n + 1 }, (_, i) => i * i)
  //   .filter((num) => String(num).includes(`${d}`))
  //   .map((nums) => {
  //     let a = nums.toString();
  //     for (let i = 0; i < a.length; i++) {
  //       if (a[i] === d.toString()) {
  //         result++;
  //       }
  //     }
  //   });
  // return result;

  //Cara lain
  return Array.from({ length: n + 1 }, (_, i) => i * i)
    .toString()
    .split("")
    .filter((num) => num === `${d}`).length;
}

console.log(nbDig(25, 1));

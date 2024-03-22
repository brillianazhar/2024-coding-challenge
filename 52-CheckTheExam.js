// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5a3dd29055519e23ec000074

function checkExam(array1, array2) {
  //   let point = 0;
  //   for (let i = 0; i <= array1.length - 1; i++) {
  //     array2[i] !== ""
  //       ? array1[i] === array2[i]
  //         ? (point += 4)
  //         : (point -= 1)
  //       : false;
  //   }
  //   return point < 0 ? 0 : point;

  // Cara lain
  const point = array2
    .map((item, index) => (item === "" ? 0 : item === array1[index] ? 4 : -1))
    .reduce((a, b) => a + b);

  return point < 0 ? 0 : point;
}

console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]));

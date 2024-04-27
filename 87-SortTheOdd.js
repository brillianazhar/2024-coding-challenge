// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(array) {
  //   let index = 0;
  //   const odd = array.filter((num) => num % 2).sort((a, b) => a - b);
  //   return array.map((num) => {
  //     if (num % 2) {
  //       index++;
  //       return odd[index - 1];
  //     } else {
  //       return num;
  //     }
  //   });

  // Cara lain
  const odd = array.filter((num) => num % 2).sort((a, b) => a + b);
  return array.map((x) => (x % 2 ? odd.pop() : x));
}

console.log({ "": sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]) });

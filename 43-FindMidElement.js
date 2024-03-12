// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/545a4c5a61aa4c6916000755

function gimme(triplet) {
  //   return triplet.findIndex(
  //     (mid) => mid < Math.max(...triplet) && mid > Math.min(...triplet)
  //   );

  //Cara lain
  return triplet.indexOf([...triplet].sort((a, b) => a - b)[1]);
}

console.log(gimme([5, 10, 14]));

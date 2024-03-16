// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/57cc981a58da9e302a000214

function smallEnough(a, limit) {
  return a.find((num) => num > limit) ? false : true;
}

console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));

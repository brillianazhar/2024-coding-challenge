// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004

function highestRank(arr) {
  let highest = 0;
  let highestNum = 0;
  [...new Set(arr)].map((n) => {
    const total = arr.filter((num) => num === n).length;
    if (total > highest || (total === highest && n > highestNum)) {
      highestNum = n;
      highest = total;
    }
  });
  return highestNum;
}

console.log({ "": highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]) });

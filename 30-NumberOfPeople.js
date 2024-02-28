// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

var number = function (busStops) {
  return busStops.map((a) => a[0] - a[1]).reduce((a, b) => a + b);
  //   const left = busStops.map((num) => num[0]).reduce((a, b) => a + b);
  //   const right = busStops.map((num) => num[1]).reduce((a, b) => a + b);
  //   return left - right;
};

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);

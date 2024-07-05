// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5966847f4025872c7d00015b

function averageString(str) {
  //   const num = {
  //     one: 1,
  //     two: 2,
  //     three: 3,
  //     four: 4,
  //     five: 5,
  //     six: 6,
  //     seven: 7,
  //     eight: 8,
  //     nine: 9,
  //     zero: 0,
  //   };
  //   const numStrList = str.split(" ");
  //   const average = Math.floor(
  //     numStrList.reduce((a, b) => a + num[b], 0) / numStrList.length
  //   );
  //   if (str.length <= 0) return "n/a";
  //   const avgStr = (avgNum) =>
  //     Object.keys(num).filter((key) => num[key] === avgNum);
  //   return avgStr(average)[0];

  // Cara lain
  const num = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const nums = str.split(" ").map((n) => num.indexOf(n));
  if (nums.includes(-1)) return "n/a";
  const total = nums.reduce((a, b) => a + b);
  return num[Math.floor(total / nums.length)];
}

console.log({ "": averageString("zero nine five two") });

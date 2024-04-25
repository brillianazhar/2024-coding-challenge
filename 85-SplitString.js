// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

function solution(str) {
  //   let result = [];
  //   for (let i = 0; i < str.length; i += 2) {
  //     result.push(str[i] + (i === str.length - 1 ? "_" : str[i + 1]));
  //   }
  //   return result;

  return str
    .split("")
    .map((s, i) => (i % 2 ? false : str[i] + (str[i + 1] || "_")))
    .filter((el) => el);
}

console.log({ "": solution("abcdefg") });

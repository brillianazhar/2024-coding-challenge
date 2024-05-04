// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5208f99aee097e6552000148

function solution(string) {
  return string.split(/(?=[A-Z])/).join(" ");

  // Cara lain
  //   return string.replace(/([A-Z])/g, " $1");
}

console.log({ "": solution("camelCasingTest") });

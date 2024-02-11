// Codewars Coding Challenge 2024
//https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str) {
  return [...str].filter((char) => char === "x").length ===
    [...str].filter((char) => char === "o").length
    ? true
    : false;
}

console.log(XO("xxOo"));

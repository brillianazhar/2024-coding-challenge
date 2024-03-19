// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/539ee3b6757843632d00026b/javascript

const capitals = (word) => {
  return [...word.replace(/[a-z]/g, "")].map((char) => word.indexOf(char));
};

console.log(capitals("CodEWaRs"));

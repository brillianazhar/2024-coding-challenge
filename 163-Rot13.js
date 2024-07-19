// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/530e15517bc88ac656000716

function rot13(message) {
  return [...message]
    .map((str) => {
      if (/[a-z]/g.test(str)) {
        return String.fromCharCode(((str.charCodeAt() - 97 + 13) % 26) + 97);
      } else if (/[A-Z]/g.test(str)) {
        return String.fromCharCode(((str.charCodeAt() - 65 + 13) % 26) + 65);
      } else {
        return str;
      }
    })
    .join("");
}

console.log({ "": rot13("#pB]~") });

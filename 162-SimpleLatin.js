// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str) {
  return str
    .split(" ")
    .map((s) => {
      const text = s.slice(1, s.length);
      return /^[a-zA-Z0-9]/g.test(s) ? `${text}${s[0]}ay` : s;
    })
    .join(" ");
}

console.log({ "": pigIt("This is my string !") });

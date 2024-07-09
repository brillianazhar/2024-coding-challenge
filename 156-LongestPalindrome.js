// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/54bb6f887e5a80180900046b

function longestPalindrome(s) {
  if (!s) return 0;
  for (let i = s.length; i > 0; i--) {
    for (let j = 0; j <= s.length - i; j++) {
      let str = s.substr(j, i);
      if (str === str.split("").reverse().join("")) return str.length;
    }
  }
}

console.log({ "": longestPalindrome("baa") });

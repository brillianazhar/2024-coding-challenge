// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/52efefcbcdf57161d4000091

function count(string) {
  let counts = {};
  string.split("").forEach((char) => (counts[char] = (counts[char] || 0) + 1));
  // string.split("").forEach((char) => (counts[char] ? counts[char]++ : (counts[char] = 1)));
  return counts;
}

console.log({ "": count("ada") });

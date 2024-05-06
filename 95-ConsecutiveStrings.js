// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/56a5d994ac971f1ac500003e

function longestConsec(strarr, k) {
  if (k > strarr.length || k <= 0) return "";
  return strarr
    .map((a, i) => (k === 1 ? a : strarr.slice(i, i + k).join("")))
    .slice(0, strarr.length - k + 1)
    .sort((a, b) => b.length - a.length)[0];

  //Cara lain
  //   if (k > strarr.length || k <= 0) return "";
  //   return strarr.reduce((prev, curr, i) => {
  //     const currentString = strarr.slice(i, i + k).join("");
  //     return currentString.length > prev.length ? currentString : prev;
  //   }, "");
}

console.log({
  "": longestConsec(
    ["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"],
    2
  ),
});

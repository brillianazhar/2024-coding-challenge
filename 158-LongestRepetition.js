// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/586d6cefbcc21eed7a001155

function longestRepetition(s) {
  if (!s) return ["", 0];
  let res = [];
  let curr = "";
  [...s].map((char, i) => {
    if (i === 0) {
      curr += char;
    } else {
      if (char === s[i - 1]) {
        curr += char;
      } else {
        res.push({
          char: s[i - 1],
          length: curr.length,
        });
        curr = char;
      }

      if (i === s.length - 1) {
        res.push({
          char,
          length: curr.length,
        });
      }
    }
  });

  const result = res.sort((a, b) => b.length - a.length)[0];
  return [result.char, result.length];
}

console.log({ "": longestRepetition("") });

// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

function longest(s1, s2) {
  return Array.from(new Set([...arguments].join("")))
    .sort()
    .join("");

  // Cara lain
  // return [...new Set(s1+s2)].sort().join('')
  // return Array.from(new Set(s1 + s2)).sort().join('');
}

console.log(longest("aretheyhere", "yestheyarehere"));

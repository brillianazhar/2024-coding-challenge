// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b

function reverseLetter(str) {
  return str
    .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ 0-9]/g, "")
    .split("")
    .reverse()
    .join("");
}

console.log(reverseLetter("ultr53o?n"));

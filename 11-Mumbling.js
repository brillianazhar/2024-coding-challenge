// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/javascript

function accum(s) {
	return [...s.toLowerCase()].map((letters,i)=> [...letters.repeat(i+1)].map((letter,i) => i===0 ? letter.toUpperCase() : letter).join("")).join("-");
}

console.log(accum("abc"));
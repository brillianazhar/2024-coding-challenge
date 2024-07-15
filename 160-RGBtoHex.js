// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/513e08acc600c94f01000001

function rgb(r, g, b) {
  return [r, g, b]
    .map((col) => {
      if (col < 0) {
        return "00";
      } else if (col > 255) {
        return "FF";
      } else {
        return ("0" + col.toString(16)).slice(-2).toUpperCase();
      }
    })
    .join("");
}

console.log({ "": rgb(255, 255, 255) });

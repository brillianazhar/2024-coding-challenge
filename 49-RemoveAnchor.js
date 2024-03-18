// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b

function removeUrlAnchor(url) {
  // return url.indexOf("#") !== -1 ? url.slice(0, url.indexOf("#")) : url;

  // Cara lain
  return url.split("#")[0];
}

console.log(removeUrlAnchor("www.codewars.com#about"));

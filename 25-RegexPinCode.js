// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

function validatePIN(pin) {
  return (pin.length === 4 || pin.length === 6) && /^[0-9]+$/.test(pin);

  //Cara lain
  // return /^(\d{4}|\d{6})$/.test(pin)
}

console.log(validatePIN("123456"));

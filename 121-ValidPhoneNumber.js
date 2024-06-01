// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/525f47c79f2f25a4db000025

function validPhoneNumber(phoneNumber) {
  //   return phoneNumber.match(/^[(][0-9]{1,4}[)][\s]{1}[0-9]{3}[-]{0,1}[0-9]{4}$/)
  //     ? true
  //     : false;

  //Cara lain
  return /^\(\d{3}\) \d{3}\-\d{4}$/.test(phoneNumber);
}

console.log({ "": validPhoneNumber("(098) 123 4567") });

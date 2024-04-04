// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/539de388a540db7fec000642

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  //   return enteredCode !== correctCode
  //     ? false
  //     : new Date(currentDate).getTime() <= new Date(expirationDate).getTime();

  // Cara lain
  return (
    enteredCode === correctCode &&
    Date.parse(currentDate) <= Date.parse(expirationDate)
  );
}

console.log({
  "": checkCoupon("123", "123", "September 5, 2014", "October 1, 2014"),
});

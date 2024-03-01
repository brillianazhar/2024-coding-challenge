// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/544aed4c4a30184e960010f4

function divisors(integer) {
  //   const num = Array.from({ length: integer }, (_, i) => i + 1);
  //   const divisor = num.filter((a) => integer % a == 0);
  //   return divisor.length === 2
  //     ? `${integer} is prime`
  //     : divisor.filter((a) => a !== 1 && a !== integer);

  // Cara lain
  const num = Array.from({ length: integer - 1 }, (_, i) => i + 1)
    .slice(1)
    .filter((a) => integer % a === 0);
  return num.length ? num : `${integer} is prime`;
}

console.log(divisors(15));

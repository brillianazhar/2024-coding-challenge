// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/57b06f90e298a7b53d000a86

function queueTime(customers, n) {
  const till = Array(n).fill(0);
  customers.forEach((element) => {
    const nextCust = till.indexOf(Math.min(...till));
    till[nextCust] += element;
  });
  return Math.max(...till);
}

console.log({ "": queueTime([2, 3, 10, 2], 2) });

// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/52ea928a1ef5cfec800003ee

function ipToInt32(ip) {
  const bin = ip
    .split(".")
    .map((int) => `00000000${Number(int).toString(2)}`.slice(-8))
    .join("");

  return parseInt(bin, 2);
}

console.log({ "": ipToInt32("128.32.10.1") });

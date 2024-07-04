// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/56af1a20509ce5b9b000001e

function travel(r, zipcode) {
  const address = r.split(",");
  const filteredAddress = address
    .filter((a) => a.substring(a.length - 8, a.length) === zipcode)
    .map((a) => a.split(" "));
  const result = filteredAddress
    .map((r) => r.slice(1, r.length - 2).join(" "))
    .join();
  const number = filteredAddress.map((n) => n[0]).join(",");
  if (filteredAddress.length <= 0 || zipcode === "") return `${zipcode}:/`;
  return `${zipcode}:${result}/${number}`;
}

const r =
  "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432";
console.log({ "": travel(r, "OH 43071") });

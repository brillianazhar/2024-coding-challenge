// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/550554fd08b86f84fe000a58

function inArray(array1, array2) {
  //   return array1.filter((item) => array2.join(" ").includes(item)).sort();

  return array1.filter((item1) =>
    array2.find((item2) => item2.includes(item1))
  );
}

console.log({
  "": inArray(
    ["arp", "live", "strong"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  ),
});

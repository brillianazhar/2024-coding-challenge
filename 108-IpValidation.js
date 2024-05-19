// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/515decfd9dcfc23bb6000006

function isValidIP(str) {
  return (
    str.split(".").length === 4 &&
    str
      .split(".")
      .filter((s) => Number(s) < 0 || Number(s) > 255 || `${Number(s)}` !== s)
      .length === 0
  );
}

console.log({ "": isValidIP("0.0.0.0") });

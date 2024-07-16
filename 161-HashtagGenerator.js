// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag(str) {
  //   if (str === "") return false;
  //   const arr = str
  //     .trim()
  //     .split(" ")
  //     .filter((s) => s !== "");
  //   const result = arr.map((s) => s[0].toUpperCase() + s.slice(1)).join("");
  //   return result.length >= 140 || result === "" ? false : `#${result}`;

  //Cara lain
  if (!str.trim()) return false;

  const result =
    "#" +
    str
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join("");

  return result.length > 140 ? false : result;
}

console.log({ "": generateHashtag("asdasd      asdasd") });

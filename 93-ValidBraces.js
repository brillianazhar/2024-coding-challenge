// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5277c8a221e209d3f6000b56

function validBraces(braces) {
  //   while (
  //     braces.indexOf("{}") != -1 ||
  //     braces.indexOf("()") != -1 ||
  //     braces.indexOf("[]") != -1
  //   ) {
  //     braces = braces.replace("{}", "").replace("()", "").replace("[]", "");
  //   }
  //   return braces.length == 0;

  // Cara lain
  let matches = { "(": ")", "{": "}", "[": "]" };
  let stack = [];
  let currentChar;

  for (let i = 0; i < braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) {
      stack.push(currentChar);
    } else {
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log({ "": validBraces("(({{[[]]}}))") });

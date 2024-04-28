// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5839edaa6754d6fec10000a2

function findMissingLetter(array) {
  const char =
    array
      .filter(
        (a, i) => a.charCodeAt() !== array[i > 0 ? i - 1 : i].charCodeAt() + 1
      )[1]
      .charCodeAt() - 1;
  return String.fromCharCode(char);

  //Cara lain
  //   let i = array[0].charCodeAt();
  //   return String.fromCharCode(
  //     array.find((a) => a.charCodeAt() !== i++).charCodeAt() - 1
  //   );
}

console.log({ "": findMissingLetter(["a", "b", "c", "d", "f"]) });

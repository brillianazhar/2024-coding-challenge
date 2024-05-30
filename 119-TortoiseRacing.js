// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/55e2adece53b4cdcb900006c

function race(v1, v2, g) {
  //   if (v1 >= v2) return null;
  //   const time = Math.floor(g / (v2 / 3600 - v1 / 3600));
  //   const hour = Math.floor(time / 3600);
  //   const minute = Math.floor((time % 3600) / 60);
  //   const second = Math.floor(time % 60);
  //   return [hour, minute, second];

  //Cara lain
  const time = g / (v2 - v1);
  return v2 >= v1
    ? [
        Math.floor(time),
        Math.floor((time * 60) % 60),
        Math.floor((time * 3600) % 60),
      ]
    : null;
}

console.log({ "": race(80, 91, 37) });

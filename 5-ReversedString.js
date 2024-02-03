// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/javascript

function solution(str){
    const abc = [];
    for (const iterator of str) {
        abc.push(iterator);
    }
    return abc.reverse().join('');
}

//Cara Lain
// const solution = (str) => a = str.split("").reverse().join("");

console.log(solution("Asbahbas"));
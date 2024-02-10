// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/54ba84be607a92aa900000f1/javascript

function isIsogram(str){
    return [...str.toLowerCase()].map(a => [...str.toLowerCase()].filter(b => a===b).length).find(a => a===2)? false : true;

    // Cara 2
    // return !str.match(/([a-z]).*\1/i);
}

console.log(isIsogram("moOse"));
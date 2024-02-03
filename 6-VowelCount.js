// Codewars Coding Challenge 2024
// https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
    let total = 0;
    const vowels = ["a","i","u","e","o"];
    str.toLowerCase().split("").filter(letter => {
        vowels.forEach(vowel => {
            letter === vowel ? total+=1 : false;
        });
    });
    return total;
}

// Cara Lain
// const getCount = str => (str.match(/[aeiou]/ig)||[]).length;

console.log(getCount("abracadabra"));
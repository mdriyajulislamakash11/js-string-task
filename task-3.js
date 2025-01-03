// ask-3:
// Check whether a string contains all the vowels a, e, i, o, u

const count = "a e i o u";
const vowels = count.match(/[aeiou]/gi).length; 
console.log(vowels)
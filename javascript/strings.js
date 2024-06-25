
const name = "Ali"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Perfect method to display string

const gameName = new String('Ali-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);   To find string length
// console.log(gameName.toUpperCase());  convert string to uppercase
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Ali    "
console.log(newStringOne);
console.log(newStringOne.trim());  // to remove extra spaces


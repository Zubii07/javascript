
// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["Quaid-e-Azam", "Sir Syad"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]); 

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) place element at beginning of array
// myArr.shift()    remove element from beginning of array

// console.log(myArr.includes(9)); find element is include in array or not
// console.log(myArr.indexOf(3));  tell the index of array

 // const newArr = myArr.join()   Adds all the elements of an array into a string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // 3 not included 

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // splice removes element from index 1 to index 3 and print remaining numbers
console.log("C ", myArr);
console.log(myn2);


// Array part 2


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Ali"))
console.log(Array.from("Ali")) // convert elements into array
console.log(Array.from({name: "Ali"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

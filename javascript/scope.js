/* 
   Scope determines where variables are accessible and how long they exist in a program.
   Global scope in JavaScript is where a variable is available throughout the entire program.
   Local scope refers to the limited range where a variable is accessible, such as within a function.
   The "let" keyword in JavaScript helps control variable scope, preventing unintended consequences in code.
   let and const are block scope that means they are stored in separate memory space which is reserved for this block.
   let and const are not accessable out of block i-e.{}. on the other hand var can b accessable out of block.
*/

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Ali"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "Ali"
    if (username === "Ali") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){   // first syntax 
    return num + 1
}



addTwo(5)
const addTwo = function(num){   // second syntax: store function in a variable 
    return num + 2 
}

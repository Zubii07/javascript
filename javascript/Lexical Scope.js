// A variable defined outside a function can be accessible inside another function
// defined after the variable declaration.

/* function outerFunc(){
    let x = 10;
    let y = 5;
     function innerFunc(){
        console.log(x);
        
     }
     innerFunc();
}*/


// Coding Example: What will be the output of given code?

let greet = "Hello";

 function Changegreet(){
    let greet = "Pakistan";
    console.log(greet);

     function Innergreet(){
        console.log(greet);
     }

     Innergreet();

 }
  console.log(greet);
  Changegreet();

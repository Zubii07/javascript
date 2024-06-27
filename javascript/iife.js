
// Immediately Invoked Function Expressions (IIFE)

   /*  IIFEs are used in JavaScript for several reasons:

Prevent global pollution: Variables and functions inside stay private, avoiding conflicts with other code.
Create modules: Encapsulate code to organize and isolate functionality.
Run code immediately: Useful for initialization tasks or ensuring execution on page load.
Control `this` behavior: Bind `this` explicitly within the IIFE for specific scenarios.

Think of IIFEs as self-contained bubbles for your code, keeping it tidy and organized! */

   
// example of named iife function 
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

  
// example of unamed Iife function 

(() =>{
    console.log("Hello Universe")
   
} )();

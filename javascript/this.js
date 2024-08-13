/*1. "this" in global scope always points to the globalObject (globalObject depends on javascript runtime env)
2. "this" in a function depends on 2 things
    a. strict / non strict mode (in strict mode, "this" is undefined, in non strict mode, "this substitution"
        takes place and "this" points to globalObject)
    b. how the function is being invoked (if we invoke the function using the global object in strict mode, 
       then "this" will point to that globalObject)
3. "this" in a method always points to the object that is used to invoke the method.
4. call, apply & bind are used to share a method with another object (hence the "this" keyword 
     reference would also change accordingly)
5. "this" inside arrow function refers to the enclosing lexical context
6. "this" in DOM points to the HTML element itself on which it is being used */
/* 7 types of primitive data types are:
   String, Number, Boolean, null, undefined,
   symbol, BigInt */

   const score = 100;
   const ScoreValue = 100.5;

   const isloggedIn = false;
   const outsideTemp = null;
   let userEmail; // undefined

   const Id = Symbol('123')
   const anotherId  = Symbol('123') 
   console.log(Id === anotherId) // output will be false


   /* Reference( Non-primitive data type)
    Arrays, Object, Functions*/

    const Heroes = [" Quaid-e-Azam", "Allama Iqbal", "Sir Syed"] ; // Arrays 

    let myObj = {
        name: "Zohaib",
        age: 21,

    }


    /*  
        Return type of variables in JavaScript
     1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

    2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       */

// All About Functions

// Function Statment OR Function Declaration
   //A normal function that we create using Naming convention. & By this we can do the Hoisting.

   // a(); we can call this function after body of function or before func statement
  function a(){
    console.log("a is called.");
  }
  a();


  // Function Expression
     //When we assign a function into a variable that is Function Expression.
     // We can not do Hoisting by this becz it acts like variable.

     // b(); we can't call this function here, due to hoisting
     var b = function(){
        console.log("b is called.")
     }
     b();

 
  /* Anonymous Function
      A Function without the name is known as Anonymous Function.
      It is used in a place where function are treated as value.
      function(){
      }   */


  /* Named Function Expression
       A function with a name is known as Named Function Expression. First give name to a function i.e function xyz
       then store it in variable i.e var a = function xyz(){}
       In this case you cannot call function by its name in outer scope!! (Scope Chain)
       
       var a = function xyx(){
                            console.log("Named Function Expression");
                     }    

  

  /* Difference b/w Parameters and Arguments ?
      When we creating a function  & put some variabels in this ( ) that is our Parameters.
      
        function ab( param1, param2 ){
                              console.log("
                      }
       & When we call this function & pass a variabel in this ( ) that is our Arguments
        ab( 4, 5 ); */



  /* first class Functions / first class citizens : 
       1) used as values
       2) can be passed as argument
       3) can be executed inside a closured function
       4) can be taken as return

           var b = function(param){
                             return function xyz(){
                                     console.log(" F C F ");
                             }
                     } */

function sayMyName(){
    console.log("A");
    console.log("L");
    console.log("I");
    
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "saim"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Ahmad",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "saim",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

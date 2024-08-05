//The global setTimeout() method sets a timer which executes a function or specified piece of code
// once the timer expires.

// setTimeout stores the function in a different place and attached a timer to it, when the timer 
//is finished it rejoins the call stack and executed.


/*function x(){
    for(var i = 1; i<=5; i++){
        setTimeout(function () {
            console.log(i);
        }, i*1000);
    }
    console.log("Time, tide and JS wait for none");
}
x(); */


/* output will be:
       Time, tide and JS wait for none
          6
          6
          6
          6
          6
  it is because Without closure the var reference gives the latest value as it does not retain
  the original value but rather has the reference so any update in value after timeout will be shown.

  If we want to fix it using var so we have to form a closure */

  
  /* function x(){
    for(var i = 1; i<=5; i++){

        function close(i){
            setTimeout(function () {
                console.log(i);
            }, i*1000);
        }
      close(i);
    }
    console.log("Time, tide and JS wait for none");
}
x(); */

// If we use let because they have block scope, every time a new copy of variable is attached,
// thus this can be done without closure.

function x(){
    for(let i = 1; i<=5; i++){
        setTimeout(function () {
            console.log(i);
        }, i*1000);
    }
    console.log("Time, tide and JS wait for none");
}
x();
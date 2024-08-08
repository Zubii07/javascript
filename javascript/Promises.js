
 /*
  1. Before promise we used to depend on callback functions which would result in 
       1.) Callback Hell (Pyramid of doom) | 2.) Inversion of control

  2. Inversion of control is overcome by using promise.
    2.1) A promise is an object that represents eventual completion/failure of an asynchronous operation.
    2.2) A promise has 3 states: pending | fulfilled | rejected.
    2.3)  As soon as promise is fulfilled/rejected => It updates the empty object which is assigned
           undefined in pending state.
    2.4) A promise resolves only once and it is immutable. 
    2.5) Using .then() we can control when we call the cb(callback) function.
  
  3. To avoid callback hell (Pyramid of doom) => We use promise chaining. This way our code expands
     vertically instead of horizontally. Chaining is done using '.then()'
  4. A very common mistake that developers do is not returning a value during chaining of promises.
     Always remember to return a value. This returned value will be used by the next .then() */

function SaveToDb(data){
    return new Promise ((resolve, reject) =>{
        let InternetSpeed = Math.floor(Math.random()*10)+1;
        if(InternetSpeed > 4){
            resolve("Success: Data Saved");
        } else{
            reject("Failure: weak connection");
        }
    });
  } 


  // Another Method: then() , catch()

  SaveToDb("Pakistan") // Suppose we have a function to call
    .then( () =>{
        console.log("Promise was resolved");
    })

    .catch( ()=>{
        console.log("Promise was rejected");
    });



    // Improved Version OR Efficient Way
    SaveToDb("Pakistan")
       .then( (result)=>{
        console.log("result:",result);
        console.log("Promise was resolved");
        return SaveToDb("Hello World"); // other data saved
       })

       .then( (result)=>{
        console.log("result:",result);
        console.log("Promise was resolved");
        return SaveToDb("History"); // other data saved
       })

       .then( (result)=>{
        console.log("result:",result);
        console.log("Data3 saved");
        
       })
        .catch( (error)=>{
            console.log("error:",error);
            console.log(" Promise was rejected");
        })


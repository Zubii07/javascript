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


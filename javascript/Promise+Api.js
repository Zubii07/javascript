/*
There are 4 promises Api which are most important to learn:
 1) Promise.all()    2) Promise.allSetteled()   3) promise.race()   4) promise.amy() */

/*1. Promise.all 

a. In case of success : 
  Wait for all to finish then so output.
b. In case of failure :
  If any one fail then QUICKLY show error it's not wait for other to finish.

  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P1 Success"),3000);
  })

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P2 Success"),1000);
  // setTimeout(() => reject("P2 fail"),1000);
  })

  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P3 Success"),2000);
  })

  promise.all([p1,p2,p3]).then(res =>{
    console.log(res);
    
  })
  .catch((err) => {
    console.error(err);
    
  }); */


/*2. Promise.allSettled ( BEST AMONG ALL 4 )
     Wait for all promises to get vsettle and then it will collect all the rsults and will get to you back.

a. In case of success : 
  Wait for all to finish then so output. 
b. In case of failure :
  If any one fail then still wait other to finish then return result. [val1 , err2 , val3] 
  
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P1 Success"),3000);
  })

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P2 Success"),1000);
  // setTimeout(() => reject("P2 fail"),1000);
  })

  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P3 Success"),2000);
  })

  promise.allSettled([p1,p2,p3]).then(res =>{
    console.log(res);
    
  })
  .catch((err) => {
    console.error(err);
    
  }); */
  



/*3. Promise.race

-> First settled ( whether it's success or failure )
    return result of first settled promise.
like if ok then ok or if fail then fail

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P1 Success"),3000);
  })

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P2 Success"),1000);
  // setTimeout(() => reject("P2 fail"),1000);
  })

  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P3 Success"),2000);
  })

  promise.race([p1,p2,p3]).then(res =>{
    console.log(res);
    
  })
  .catch((err) => {
    console.error(err);
    console.log(err.errors);
    
  });



  
4. Promise.any

-> return first settled RESOLVED(success).
-> If fail then still wait for other.

-> In case of all promise reject then return AGGREGRATE ERROR with value.
 [err1,err2,err3]
 

*/


// Typo of naming convesnion

/* 
           Settled         -> got our result
        /          \
    resolve    or     reject
    success    or     failure
    fulfiled   or     reject
*/
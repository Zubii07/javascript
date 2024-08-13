const p1 = new Promise( (resolve, reject) =>{ 
    setTimeout(() =>{
        resolve("Promise Resolved Value 1!")
    }, 10000);
  });
  
  const p2 = new Promise( (resolve, reject) =>{ 
    setTimeout(() =>{
        resolve("Promise Resolved Value 2!")
    }, 5000);
  });
  
  async function handlePromise(){
      console.log("Hello World(display Imediately)!")
      const val = await p1;
      console.log(" Javascript 1")
      console.log(val)
  
      const val2 = await p2;
      console.log(" Javascript 2")
      console.log(val2)
  }
  
  handlePromise();
  
  /*In the above condition, when p1 will resolve after 10 seconds, and p2 will resolve after 5 seconds
  then we see that after 10 seconds it will resolve both value. 
  As p2's setTimeout value is lesser(5 Seconds) than p1.(10 Seconds)
  
  As you said when JavaScript fetch or reach the line of handlePromise function the following this will be happen.
  
  1. In call stack first handlePromise is loaded and it console log the "Hello World !!"
  2. Then it go to the next line, finds that there has been await p1.
  3. When it saw await p1, handlePromise Function remove from call stack.
  4. After the 10 seconds over, then Function go to call stack and start execution from where it is left.
  5. Now the "Namaste Javascript" is print and also the val value i.e. "Promise Resolved Value!!" */
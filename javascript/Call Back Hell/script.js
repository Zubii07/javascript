
// Function that is passed on as argument to another function is called callback function.

/* 1 - Callback hell
When a function is passed as an argument to another function, it becomes a callback function. This process continues and there are many callbacks inside another's Callback function.
This grows the code horizontally instead of vertically. That mechanism is known as callback hell. 

2 - Inversion of control
The callback function is passed to another callback, this way we lose the control of our code. We don't know what is happening behind the scene and the program becomes very difficult to maintain. 
That process is called inversion of control.*/


h1 = document.querySelector("h1");
function ChangeColor(color, delay, nextColorChange){
    setTimeout( ()=> {
        h1.style.color = color;
        nextColorChange();
        }, delay);
}

ChangeColor("red",1000, ()=>{
    ChangeColor("green",1000, ()=>{
        ChangeColor("blue",1000, ()=>{
            ChangeColor("gray",1000, ()=>{
               
            });
        });
        
    }); 
});

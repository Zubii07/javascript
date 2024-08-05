
// Function that is passed on as argument to another function is called callback function.

//Event listeners consume a lot of memory which can potentially slow down the website 
//therefore it is good practice to remove if it is not used.


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

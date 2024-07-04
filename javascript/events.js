/* Events in JavaScript are invoked on specific activities such as mouse click or key press.
   The three approaches discussed are: 1) Using the current approach reduces code. 
   2) The second approach involves selecting elements by ID and adding an onClick event. 
   3) The best approach is using event listeners for more features. */





<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>HTML Events</title>
</head>
<body style="background-color: #414141; color: aliceblue;">
    <h2>Amazing image</h2>
    <div>
        <ul id="images">
            <li><img width="200px" id="photoshop" src="https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="photoshop"></img></li>
            <li><img width="200px" id="japan" src="https://images.pexels.com/photos/3532553/pexels-photo-3532553.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="japan"></img></li>
            <li><img width="200px" id="river" src="https://images.pexels.com/photos/3532551/pexels-photo-3532551.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="river"></img></li>
            <li><img width="200px" id="owl" src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="owl"></img></li>
            <li><img width="200px" id="prayer" src="https://images.pexels.com/photos/2522671/pexels-photo-2522671.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="prayer"></img></li>
            <li><a style="color: aliceblue;" href="https://google.com" id="google">Google</a></li>
        </ul>
    </div>
    <script>
    // document.getElementById('owl').onclick = function(){
    //     alert("owl clicked")
    // }

     // attachEvent()
    // jQuery - on

    // type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode

    // document.getElementById('images').addEventListener('click', function(e){
    //     console.log("clicked inside the ul");
    // }, false)

    // document.getElementById('owl').addEventListener('click', function(e){
    //     console.log("owl clicked");
    //     e.stopPropagation()
    // }, false)
    
    // document.getElementById('google').addEventListener('click',function(e){
    //     e.preventDefault();
    //     e.stopPropagation()
    //     console.log("google clicked");
    // }, false)
   
        document.querySelector('#images').addEventListener('click', function(e) {
            console.log(e.target.tagName);
            if (e.target.tagName === 'IMG') {
                console.log(e.target.id);
                let removeIt = e.target.parentNode;
                removeIt.remove();
            }
        });

        document.getElementById('google').addEventListener('click', function(e) {
            e.preventDefault();
            console.log("google clicked");
        }, false);
    </script>
</body>
</html>

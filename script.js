var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var body = document.getElementById("Gradient");
var random = document.querySelector("#random");
body.style.background="linear-gradient(to right, "
+ color1.value
+", "
+color2.value+")";
h3.textContent = body.style.background + ";";
var randomNumber=[6];

function setColor(){
    body.style.background =
    "linear-gradient(to right, "
    + color1.value
    +", "
    +color2.value+")";
    /* h3.innerHTML="linear-gradient(to right, "
    + color1.value
    +", "
    +color2.value+")";*/

    h3.textContent = body.style.background + ";";
}



color1.addEventListener("input", setColor);

color2.addEventListener("input", setColor);

console.log(color1.value);

random.addEventListener("click", function(){
    color1.value='#'+(Math.random()*0xFFFFFF<<0).toString(16);

    color2.value="#"+Math.round(Math.random()*89+10)+""+Math.round(Math.random()*89+10)+""+Math.round(Math.random()*89+10);

    setColor();
    //body.style.background
    console.log(body.style.background);

})


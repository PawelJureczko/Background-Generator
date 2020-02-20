var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var body = document.getElementById("Gradient");
body.style.background="linear-gradient(to right, "
+ color1.value
+", "
+color2.value+")";

function setColor(){
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value
    +", "
    +color2.value+")";
}

color1.addEventListener("input", setColor);

color2.addEventListener("input", setColor);


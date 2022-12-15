var randomVariable1 = Math.ceil(Math.random()*6);
var randomDiceImage1 = "images/dice" + randomVariable1 +".png";
document.querySelector(".img1").setAttribute("src", randomDiceImage1);

var randomVariable2 = Math.ceil(Math.random()*6);
var randomDiceImage2 = "images/dice" + randomVariable2 +".png";
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

if(randomVariable1 > randomVariable2){
    document.querySelector("h1").innerHTML = "🥇 Player 1 is Winner";
} else if(randomVariable1 < randomVariable2){
    document.querySelector("h1").innerHTML = "Player 2 🥇 is Winner";
} else{
    document.querySelector("h1").innerHTML = "Try your luck again guys";
}
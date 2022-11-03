var Player1 = prompt("Enter the name of Player1 :")
var Player2 = prompt("Enter the name of Player2 :")
document.querySelector(".player1").innerHTML=Player1;
document.querySelector(".player2").innerHTML=Player2;

var randomNum1 = Math.floor((Math.random()*6)+1);
var source1="images/dice"+randomNum1+".png";
document.querySelectorAll(".dice1")[0].setAttribute("src", source1);

var randomNum2 = Math.floor((Math.random()*6)+1);
var source2="images/dice" + randomNum2 + ".png";
document.querySelectorAll(".dice2")[0].setAttribute("src", source2);

if (randomNum1>randomNum2)
{
    document.querySelector("h1").innerHTML=Player1 + " Wins!";
}
else if (randomNum1==randomNum2)
{
    document.querySelector("h1").innerHTML="Draw!";
}
else{
    document.querySelector("h1").innerHTML=Player2 + " Wins!";
}

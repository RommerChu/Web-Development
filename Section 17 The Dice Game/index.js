var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
document.getElementsByTagName("img")[0].setAttribute("src", randomImageSource1);

console.log(randomNumber1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.getElementsByTagName("img")[1].setAttribute("src", randomImageSource2);

//If a player wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!"; //Player 1 wins
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"; //Player 2 wins
} else {
  document.querySelector("h1").innerHTML = "Draw!"; //Draw
}

//document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
//var randomNumber1 = Math.floor(Math.random() * 6) + 1; //get randon number
//var randomDiceImage = "dice" + randomNumber1; //dice1.png
//var randomImageSource = "images/" + randomDiceImage + ".png"; //image/dice1.png
//var image1 = document.querySelectorAll("img")[0];
//image1.setAttribute("src", randomImageSource);

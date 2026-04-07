var numOfButton = document.querySelectorAll(".drum").length;

for (let x = 0; x < numOfButton; x++) {
  document.querySelectorAll(".drum")[x].addEventListener("click", function () {
    console.log(this);

    //alert("Test");
  });
}
//var sound = new Audio("sounds/crash.mp3");
// if (sound == numOfButton[1]) {
//   sound.play();
// }

var numOfButton = document.querySelectorAll(".drum").length;

for (let x = 0; x < numOfButton; x++) {
  document.querySelectorAll(".drum")[x].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;

    switch (buttonInnerHtml) {
      case "w":
        var sound = new Audio("sounds/tom-1.mp3");
        sound.play();
        break;
      case "a":
        var sound = new Audio("sounds/tom-2.mp3");
        sound.play();
        break;
      case "s":
        var sound = new Audio("sounds/tom-3.mp3");
        sound.play();
        break;
      case "d":
        var sound = new Audio("sounds/tom-4.mp3");
        sound.play();
        break;
      case "j":
        var sound = new Audio("sounds/crash.mp3");
        sound.play();
        break;
      case "k":
        var sound = new Audio("sounds/snare.mp3");
        sound.play();
        break;
      case "l":
        var sound = new Audio("sounds/kick-bass.mp3");
        sound.play();
        break;

      default:
        console.log(this.buttonInnerHtml);
        break;
    }

    //if(buttonInnerHtml == "w"){
    // var sound = new Audio("sounds/tom-1.mp3");
    //       sound.play();
    //}

    //console.log(this.);
    //alert("Test");
  });
}

document.addEventListener("keydown", (event) => {
  //alert("key word press!");
  console.log(event);
});

// var sound = new Audio("sounds/crash.mp3");
// sound.play();

//this.style.color = "white";

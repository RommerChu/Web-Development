//document.querySelector("h1").innerHTML = "Hello Rommer!";
//$("h1").html("Mr. Rommer");

//Buttons
// for (let i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     document.querySelector("h1").style.color = "red";
//   });
// }

//CSS color red
// $("button").click(() => {
//   $("h1").css("color", "red");
// });

//REMOVE BUTTONS
// $("button").click(() => {
//   $("h1").remove();
// });

//HIDE BUTTONS
// $("button").click(() => {
//   $("h1").hide();
// });

//TOGGLE BUTTONS
// $("button").click(() => {
//   $("h1").toggle();
// });

//FADE-TOGGLE BUTTONS
$("button").click(() => {
  $("h1").fadeToggle();
});

//Input
// $("input").keypress(function (e) {
//   console.log(e.key);
// });

//Return result to H1 .text
$("input").keypress(function (e) {
  //console.log(e.key);
  $("h1").text(e.key);
});

//ADD new Button BEFORE
$("h1").before("<button>New Before</button>");

//ADD new Button PREPEND
$("h1").prepend("<button>New Prepend</button>");

//ADD new Button APPEND
$("h1").append("<button>New Append</button>");

//ADD new Button AFTER
$("h1").append("<button>New After</button>");

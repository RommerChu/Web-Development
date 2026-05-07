const gamePattern = [randomChosenColour];

const buttonColurs = ["Red", "Blue", "Green", "Yellow"];

const randomChosenColour = Math.random(buttonColurs);

function nextSequence() {
  const randomNumber = Math.random(0, 3);
  console.log(randomNumber);
}
nextSequence();

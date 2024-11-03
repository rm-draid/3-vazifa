const randomNumber = Math.floor(Math.random() * 10) + 1;
const guessInput = document.getElementById("guessInput");
const checkButton = document.getElementById("checkButton");
const resultMessage = document.getElementById("resultMessage");

checkButton.addEventListener("click", function () {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    resultMessage.textContent = "Iltimos, 1 dan 10 gacha son kiriting!";
    return;
  }

  if (userGuess === randomNumber) {
    resultMessage.textContent = "Ura, siz topdingiz, yutdingiz!";
    resultMessage.style.color = "green";
  } else if (userGuess < randomNumber) {
    resultMessage.textContent =
      "Topomadingiz, men o'ylagan son siz aytgandan kattaroq.";
    resultMessage.style.color = "orange";
  } else {
    resultMessage.textContent =
      "Topomadingiz, men o'ylagan son siz aytgandan kichikroq.";
    resultMessage.style.color = "orange";
  }
});

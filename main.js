import "./style.css";

const start = document.getElementById("start");
const initGame = document.getElementById("initGameContainer");
const startGame = document.getElementById("startGameContainer");
const inputNumber = document.getElementById("number");
const submit = document.getElementById("try");
const responsText = document.getElementById("displayResponsText");
const score = document.getElementById("score");
const displayRespons = document.querySelector(".dp");

start.addEventListener("click", () => {
  initGame.style.display = "none";
  startGame.style.display = "block";
});

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

const isValidNumber = (num) => {
  return !Number.isNaN(num) && num >= 0 && num <= 500;
};

const guessNumber = () => {
  const randomNumber = getRandomNumber(501);
  console.log(randomNumber);
  let count = 0;

  submit.addEventListener("click", () => {
    const numberChoice = Number(inputNumber.value);

    if (!isValidNumber(numberChoice)) {
      responsText.style.color = "red";
      responsText.innerHTML = `
      <p>Veuillez choisir un chiffre entre 0 et 500</p>`;
      inputNumber.value = "";
      return;
    }

    if (randomNumber < numberChoice) {
      count++;
      responsText.style.color = "black";
      responsText.innerHTML = `
      <p>Veuillez choisir un nombre plus petit que ${numberChoice}</p>`;
      inputNumber.value = "";
      displayRespons.textContent = "x";
      displayRespons.style.color = "red";
      displayRespons.style.left = `${numberChoice}px`;
    }

    if (randomNumber > numberChoice) {
      count++;
      responsText.style.color = "black";
      responsText.innerHTML = `
      <p>Veuillez choisir un nombre plus grand que ${numberChoice}</p>`;
      inputNumber.value = "";
      displayRespons.textContent = "x";
      displayRespons.style.color = "red";
      displayRespons.style.left = `${numberChoice}px`;
    }

    if (randomNumber === numberChoice) {
      count++;
      responsText.style.color = "green";
      responsText.innerHTML = `
    
    <p> Bravo vous avez trouvé le chiffre en ${count} coups !</p>
    `;
      inputNumber.value = "";
      displayRespons.style.color = "green";
      displayRespons.textContent = "x";
      displayRespons.style.left = `${numberChoice}px`;
    }

    score.textContent = `Score : ${count} coups`;
  });
};

guessNumber();

const restartGame = () => {
  guessNumber();
};

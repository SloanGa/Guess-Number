import "./style.css";

const start = document.getElementById("start");
const initGame = document.getElementById("initGameContainer");
const startGame = document.getElementById("startGameContainer");
const inputNumber = document.getElementById("number");
const submit = document.getElementById("try");
const responsText = document.getElementById("displayResponsText");
const score = document.getElementById("score");
const displayRespons = document.querySelector(".dp");
const restart = document.getElementById("restart");
let count = 0;

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};
let randomNumber = getRandomNumber(501);
console.log(randomNumber);

const isValidNumber = (num) => {
  return !Number.isNaN(num) && num >= 0 && num <= 500;
};

start.addEventListener("click", () => {
  initGame.style.display = "none";
  startGame.style.display = "block";
});

submit.addEventListener("click", () => {
  guessNumber();
});

const restartGame = () => {
  randomNumber = getRandomNumber(501);
  console.log(randomNumber);
  count = 0;
  score.textContent = "";
  displayRespons.textContent = "";
  responsText.textContent = "";
  restart.style.display = "none";
};

const guessNumber = () => {
  const subtmitHandler = () => {
    const numberChoice = Number(inputNumber.value);
    console.log(numberChoice);
    if (!isValidNumber(numberChoice) || !numberChoice) {
      responsText.style.color = "red";
      responsText.innerHTML = `
      <p>Veuillez choisir un chiffre entre 1 et 500</p>`;
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

      restart.style.display = "block";
    }
    score.textContent = `Score : ${count} coup(s)`;
  };

  subtmitHandler();
};

restart.addEventListener("click", restartGame);

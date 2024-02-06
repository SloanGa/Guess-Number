import "./style.css";

const initGame = document.getElementById("initGameContainer");
const startGame = document.getElementById("startGameContainer");
const explain = document.querySelector(".explain");
const showAnswer = document.getElementById("showAnswerContainer");
const listNumber = document.querySelector(".list");
const inputNumber = document.getElementById("number");
const submit = document.getElementById("try");
const responsText = document.getElementById("displayResponsContainer");
const score = document.getElementById("score");
const restart = document.getElementById("restart");
const levelContainer = document.getElementById("level");
const levelOne = document.getElementById("level1");
const levelTwo = document.getElementById("level2");
const levelThree = document.getElementById("level3");
const levelFour = document.getElementById("level4");

const levels = [levelOne, levelTwo, levelThree, levelFour];

let count;
let selectedLevel;
let startNumber;
let endNumber;
let difficult;

document.querySelector("#menu").addEventListener("click", () => {
  location.reload();
});




const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};
let randomNumber = "";

const isValidNumber = (num, min, max) => {
  return !Number.isNaN(num) && num >= min && num <= max;
};



levels.forEach((level) => {
  level.addEventListener("click", () => {
    count = 0;
    selectedLevel = level.id;
    initGame.style.display = "none";
    levelContainer.style.display = "none";
    startGame.style.display = "block";
    showAnswer.style.display = "flex";
    
    

    switch (selectedLevel) {
      case "level1":
        startNumber = 1;
        endNumber = 50;
        difficult = "Facile";
        randomNumber = getRandomNumber(51);
        // console.log(randomNumber);
        break;
      case "level2":
        startNumber = 1;
        endNumber = 200;
        difficult = "Intermediaire";
        randomNumber = getRandomNumber(201);
        // console.log(randomNumber);
        break;
      case "level3":
        startNumber = 1;
        endNumber = 500;
        randomNumber = getRandomNumber(501);
        difficult = "Difficile";
        // console.log(randomNumber);
        break;
      case "level4":
        startNumber = 1;
        endNumber = 1000;
        difficult = "Cauchemardesque";
        randomNumber = getRandomNumber(1001);
        // console.log(randomNumber);
        break;
      default:
        return;
    }

    explain.innerHTML = `<p>J'ai genéré un nombre entre ${startNumber} et ${endNumber}. Essaye de le trouver.</p>
    <strong>Niveau : ${difficult}</strong>`;
  });
});

submit.addEventListener("click", () => {
  guessNumber();
});

const guessNumber = () => {
  const subtmitHandler = () => {
    // console.log(randomNumber);
    const numberChoice = Number(inputNumber.value);
    // console.log(numberChoice);
    if (!isValidNumber(numberChoice, startNumber, endNumber) || !numberChoice) {
      responsText.style.color = "red";
      responsText.innerHTML = `
      <p>Choisis un nombre entre ${startNumber} et ${endNumber}</p>`;
      inputNumber.value = "";
      return;
    }

    if (randomNumber < numberChoice) {
      count++;
      responsText.style.color = "black";
      responsText.innerHTML = `
      <p>Choisis un nombre plus petit que ${numberChoice}</p>`;
      inputNumber.value = "";
    }

    if (randomNumber > numberChoice) {
      count++;
      responsText.style.color = "black";
      responsText.innerHTML = `
      <p>Choisis un nombre plus grand que ${numberChoice}</p>`;
      inputNumber.value = "";
    }

    if (randomNumber === numberChoice) {
      count++;
      responsText.style.color = "green";
      responsText.innerHTML = `
      
      <p> Bravo tu as trouvé le chiffre en ${count} coups !</p>
      `;
      inputNumber.value = "";
   
      
      restart.style.display = "block";
    }
    score.textContent = `Score : ${count} coup(s)`;
    
    
    
const liste = document.createElement("div");
liste.classList.add("liste");
document.querySelector(".showAnswer").appendChild(liste);
liste.innerHTML = `
<ul class = "list">${numberChoice}</ul>

`;
  
  };
  subtmitHandler();
};
const restartGame = () => {
  //levelContainer.style.display = "grid";
  //levelContainer.style.alignItems = "center";
  //levelContainer.style.justifyItems = "center";
  //levelContainer.style.justifyContent = "center";
  //levelContainer.style.alignContent = "center";
  //levelContainer.style.position = "absolute";
  //levelContainer.style.left = "50%";
  //levelContainer.style.transform = "translate(-50%)";
  //levelContainer.style.height = "400px";
  //levelContainer.style.width = "400px";
  //levelContainer.style.background = "#d6dee7";
  //levelContainer.style.zIndex = 2;

 // startGame.style.display = "none";
  //score.textContent = `Score : `;
  //responsText.textContent = "";
  //restart.style.display = "none";
  //showAnswer.style.display = "none"
  location.reload();
  
};

restart.addEventListener("click", restartGame);

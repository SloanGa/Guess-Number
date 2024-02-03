import './style.css'

const start = document.getElementById('start')
const initGame = document.getElementById("initGameContainer")
const startGame = document.getElementById("startGameContainer")


start.addEventListener("click", ()=>{
  initGame.style.display = "none"
  startGame.style.display = "block"
})

const randomNumber = Math.floor(Math.random()*501)
console.log(randomNumber);







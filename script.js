// Complete game function
const game = () => {
    let playerScore = 0;
    let computerScore = 0;

//Function to grab user input and run function to evaluate choices
    const playGame = () => {
      const rockBtn = document.querySelector('.rock');
      const paperBtn = document.querySelector('.paper');
      const scissorBtn = document.querySelector('.scissor');

    }
}
let pScoreboard = document.querySelector('.p-count');
let pScoreboard = document.querySelector('.c-count');
let roundResult = document.querySelector('.result');

let playerScore = 0;
let computerScore = 0;
//initializing Global variables to store user and computer selections
let compChoice;
let playerChoice;

//function to randomly generate a choice for the computer,
function computerChoice() {
  const computerOptions = ["rock", "paper", "scissor"];
  const randomNum = Math.floor(Math.random() * 3);
  compChoice = computerOptions[randomNum];
}

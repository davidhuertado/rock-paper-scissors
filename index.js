const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

//EventListener al clickear botones
rockButton.addEventListener("click", function () {
  playRound("ROCK", computerPlay());
});
paperButton.addEventListener("click", function () {
  playRound("PAPER", computerPlay());
});
scissorsButton.addEventListener("click", function () {
  playRound("SCISSORS", computerPlay());
});

//Funciones para sumar puntos
function sumarPuntoPlayer(yourScore) {
    
    yourScore = parseInt(yourScore);

    
      return  yourScore += 1;
    
  }

  function sumarPuntoComputer(computerScore) {
    
    computerScore = parseInt(computerScore);

    
     return computerScore += 1;
    
  }

// FUncion para decision de la computadora
function computerPlay() {
  //generar un numero random
  let numeroRandom = Math.floor(Math.random() * 3);

  if (numeroRandom === 0) return "Rock";
  else if (numeroRandom === 1) return "Paper";
  else return "Scissors";
}

//Funcion que juega cada round
function playRound(playerSelection, computerSelection) {
  
//Variables de los puntos
  let yourScore = document.querySelector("#your-score").textContent;
  let computerScore = document.querySelector("#computer-score").textContent;

  
  let upperPlayerSelection = playerSelection.toUpperCase();
  let upperComputerSelection = computerSelection.toUpperCase();

//Condicionales para saber quien gana cada ronda

  if (
    upperPlayerSelection === "ROCK" &&
    upperComputerSelection === "SCISSORS"
  ) {
    yourScore = sumarPuntoPlayer(yourScore);
    document.querySelector("#your-score").textContent = yourScore;

    if (yourScore === 5) return alert("You Win");
    else return;
    
    
    
  } else if (
    upperPlayerSelection === "PAPER" &&
    upperComputerSelection === "ROCK"
  ) {
    
     yourScore = sumarPuntoPlayer(yourScore);
     document.querySelector("#your-score").textContent = yourScore;
     if (yourScore === 5) return alert("You Win");
    else return;
    
  } else if (
    upperPlayerSelection === "SCISSORS" &&
    upperComputerSelection === "PAPER"
  ) {
    
    yourScore = sumarPuntoPlayer(yourScore);
    document.querySelector("#your-score").textContent = yourScore;
    if (yourScore === 5) return alert("You Win");
    else return;
    
  } else if (
    upperPlayerSelection === "ROCK" &&
    upperComputerSelection === "PAPER"
  ) {
    
    computerScore = sumarPuntoComputer(computerScore);
    document.querySelector("#computer-score").textContent = computerScore;
   if (computerScore === 5) return alert("You lose");
   else return;
    
  } else if (
    upperPlayerSelection === "PAPER" &&
    upperComputerSelection === "SCISSORS"
  ) {
    
     computerScore = sumarPuntoComputer(computerScore);
     document.querySelector("#computer-score").textContent = computerScore;
     if (computerScore === 5) return alert("You lose");
     else return;
    
  } else if (
    upperPlayerSelection === "SCISSORS" &&
    upperComputerSelection === "ROCK"
  ) {
    
   computerScore = sumarPuntoComputer(computerScore);
   document.querySelector("#computer-score").textContent = computerScore;
   if (computerScore === 5) return alert("You lose");
   else return;

  } else {
    // return draw;
    return alert("DRAW");
  }
}

// function game() {
//   //Contadores
//   let playerScore = 0;
//   let computerScore = 0;

//   //Loop de 5 rondas
//   // for (let i = 1; i <= 5; i++) {
//   let playerSelection = prompt("Rock, Paper or Scissors");
//   let computerSelection = computerPlay();

//   let resultEachRound = playRound(playerSelection, computerSelection);

//   if (resultEachRound === 1) {
//     playerScore++;
//     console.log(
//       "You win the round. " +
//         playerSelection.toUpperCase() +
//         " beats " +
//         computerSelection.toUpperCase()
//     );
//   } else if (resultEachRound === 0) {
//     computerScore++;
//     console.log(
//       "You lose the round. " +
//         computerSelection.toUpperCase() +
//         " beats " +
//         playerSelection.toUpperCase()
//     );
//   } else if (resultEachRound === 3) {
//     console.log("Draw");
//   }
//   // }

//   if (playerScore > computerScore) return console.log("You win");
//   else if (computerScore > playerScore) return console.log("You lose");
//   else return console.log("Draw");
// }




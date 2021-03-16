function computerPlay() {
    //generar un numero random
    let numeroRandom = Math.floor(Math.random() * 3);

    if (numeroRandom === 0) return "Rock";
    else if (numeroRandom === 1) return "Paper";
    else return "Scissors"; 

}

function playRound(playerSelection, computerSelection) {
    //Poner todo en Mayuscula 
    let upperPlayerSelection = playerSelection.toUpperCase();
    let upperComputerSelection = computerSelection.toUpperCase();

    //Mensaje de resultado
    let playerWins = 1;
    let computerWins = 0;
    let draw = 3;

    if (upperPlayerSelection === "ROCK" && upperComputerSelection === "SCISSORS") {
        return playerWins; 
    }
    else if (upperPlayerSelection === "PAPER" && upperComputerSelection === "ROCK") {
        return playerWins;
    }
    else if (upperPlayerSelection === "SCISSORS" && upperComputerSelection === "PAPER") {
        return playerWins;
    }
    else if (upperPlayerSelection === "ROCK" && upperComputerSelection === "PAPER") {
        return computerWins;
    }
    else if (upperPlayerSelection === "PAPER" && upperComputerSelection === "SCISSORS") {
        return computerWins;
    }
    else if (upperPlayerSelection === "SCISSORS" && upperComputerSelection === "ROCK") {
        return computerWins;
    }

    else {
        return draw;
    }

}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors");
        let computerSelection = computerPlay();

       let resultEachRound = playRound(playerSelection, computerSelection);

       if (resultEachRound === 1) {
           playerScore++;
           console.log("You win the round. " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase());
       }
       else if (resultEachRound === 0) {
           computerScore++;
           console.log("You lose the round. " + computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase());
       }
       else if (resultEachRound === 3) {
           console.log("Draw");
       }
    }

    if (playerScore > computerScore) return console.log("You win");
    else if (computerScore > playerScore) return console.log("You lose");
    else return console.log("Draw");
}
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
    let playerWins = "You win! " + upperPlayerSelection +  " beats " + upperComputerSelection;
    let computerWins = "You lose! " + upperComputerSelection +  " beats " + upperPlayerSelection;
    let draw = "Draw";

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
    
}
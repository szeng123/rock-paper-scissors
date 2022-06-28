let playerVictory = 0;
let computerVictory = 0;
let roundNumber = 1;

//Get selections from button clicks
let rockSelection = document.getElementById('rock-button');
let paperSelection = document.getElementById('paper-button');
let scissorsSelection = document.getElementById('scissors-button');

// Use of anoymous functions to call a function with parameters
rockSelection.addEventListener('click', function() {
    playRound('rock', computerPlay())
});
paperSelection.addEventListener('click', function() {
    playRound('paper', computerPlay())
});
scissorsSelection.addEventListener('click', function() {
    playRound('scissors', computerPlay())
});

let roundText = document.getElementById('game-text-dialogue');
let button = document.getElementsByClassName('selector');

let gameResult = document.getElementById('game-text-result');
let playerScore = document.getElementById('score-text-player');
let computerScore = document.getElementById('score-text-computer');


/*
    do {
        roundText.textContent = 'Round ' + roundNumber.toString() + '! Please choose between "Rock", "Paper" and "Scissors"';
        roundNumber++;
        // Button presses perform playRound function
        if ((playerVictory == 5)||(computerVictory == 5)) {
        break;
        }
        } while ((playerVictory < 5)||(computerVictory < 5)) */
// Alert messages announcing winner of 5 rounds. Prompt for new game via page refresh
        if (playerVictory == 5) {
            console.log('Winner!');
            /*
            if(confirm('You are the winner of the rock paper scissors game! Play again? ')){}
            else window.location.reload();
            */
       } else if (computerVictory > playerVictory) {
            if(confirm('The computer is the winner of the rock paper scissors game! Play again? ')){}
            else window.location.reload();}; 


function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}
 
 function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
            gameResult.textContent = "Player chose " + playerSelection + ". Computer chose " + computerSelection + ". Player also chooses " + playerSelection +  ". It's a draw!";
    } else if ((playerSelection === 'paper' && computerSelection === 'rock')||(playerSelection === 'scissors' && computerSelection === 'paper')||(playerSelection === 'rock' && computerSelection === 'scissors')) {
            gameResult.textContent = 'Player chose ' + playerSelection + '. Computer chose ' + computerSelection + '. You win! ' + playerSelection + ' beats ' + computerSelection + '!';
            playerVictory++;

            playerScore.textContent = playerVictory;  
    } else {
            gameResult.textContent = 'Player chose ' + playerSelection + '. Computer chose ' + computerSelection + '. You lose! ' + computerSelection + ' beats ' + playerSelection  + '!';
            computerVictory++;
            computerScore.textContent = computerVictory;
    }
        }


let playerVictory = 0;
let computerVictory = 0;
let roundNumber = 1;

//Get selections from button clicks
const rockSelection = document.getElementById('rock-button');
const paperSelection = document.getElementById('paper-button');
const scissorsSelection = document.getElementById('scissors-button');

// Use of anoymous functions to call a function with parameters
rockSelection.addEventListener('click', function() {
    playRound('rock', computerPlay())
    gameRoundText(roundNumber)
    roundNumber++;
});
paperSelection.addEventListener('click', function() {
    playRound('paper', computerPlay())
    gameRoundText(roundNumber)
    roundNumber++;
});
scissorsSelection.addEventListener('click', function() {
    playRound('scissors', computerPlay())
    gameRoundText(roundNumber)
    roundNumber++;
});

const roundText = document.getElementById('game-text-dialogue');

const gameResult = document.getElementById('game-text-result');
const playerScore = document.getElementById('score-text-player');
const computerScore = document.getElementById('score-text-computer');



function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}
 
 function playRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                gameResult.textContent = "Player chose " + playerSelection + ". Computer chose " + computerSelection + ". Player also chooses " + playerSelection +  ". It's a draw!";
            } else if ((playerSelection === 'paper' && computerSelection === 'rock')||(playerSelection === 'scissors' && computerSelection === 'paper')||(playerSelection === 'rock' && computerSelection === 'scissors')) {
                playerWin(playerSelection,computerSelection);
            } else {
                computerWin(playerSelection,computerSelection);
            }
    }


function playerWin(playerSelection,computerSelection) {
    gameResult.textContent = 'Player chose ' + playerSelection + '. Computer chose ' + computerSelection + '. You win! ' + playerSelection + ' beats ' + computerSelection + '!';
    playerVictory++;
    playerScore.textContent = playerVictory;
        if ((playerVictory == 5) && (playerVictory > computerVictory)) {
            if(!confirm('You are the winner of the rock paper scissors game! Play again? ')){
                document.getElementById('rock-button').disabled = true;
                document.getElementById('paper-button').disabled = true;
                document.getElementById('scissors-button').disabled = true;
            } else window.location.reload();
        }  
}

function computerWin(playerSelection,computerSelection) {
    gameResult.textContent = 'Player chose ' + playerSelection + '. Computer chose ' + computerSelection + '. You lose! ' + computerSelection + ' beats ' + playerSelection  + '!';
    computerVictory++;
    computerScore.textContent = computerVictory;
        if ((computerVictory == 5) && (computerVictory > playerVictory)) {
            if(!confirm('The computer is the winner of the rock paper scissors game! Play again? ')){
                document.getElementById('rock-button').disabled = true;
                document.getElementById('paper-button').disabled = true;
                document.getElementById('scissors-button').disabled = true;
        } else window.location.reload();
    }
}

function gameRoundText(roundNumber) {
        roundText.textContent = 'Round ' + roundNumber.toString() + '! Please choose between "Rock", "Paper" and "Scissors".';
}

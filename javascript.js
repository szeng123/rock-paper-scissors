let playerVictory = 0;
let computerVictory = 0;
let roundNumber = 2; //Start round count at 2 as text for round 1 exists before button clicks

//Get selections from button clicks
const rockSelection = document.getElementById('rock-button');
const paperSelection = document.getElementById('paper-button');
const scissorsSelection = document.getElementById('scissors-button');

const playerBox = document.getElementById('weapon-player');
const computerBox = document.getElementById('weapon-computer');

// Use of anoymous functions to call a function with parameters
rockSelection.addEventListener('click', function() {
    playRound('rock', computerPlay())
    playerBox.innerHTML = "<img src = ../rock-paper-scissors/icons/rock.png>";
    gameRoundText(roundNumber)
    roundNumber++;
});
paperSelection.addEventListener('click', function() {
    playRound('paper', computerPlay())
    playerBox.innerHTML = "<img src = ../rock-paper-scissors/icons/paper.png>";
    gameRoundText(roundNumber)
    roundNumber++;
});
scissorsSelection.addEventListener('click', function() {
    playRound('scissors', computerPlay())
    playerBox.innerHTML = "<img src = ../rock-paper-scissors/icons/scissors.png>";
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
    if (choice == options[0]){
        computerBox.innerHTML = "<img src = ../rock-paper-scissors/icons/rock.png>";
    } else if (choice == options[1]) {
        computerBox.innerHTML = "<img src = ../rock-paper-scissors/icons/paper.png>";
    } else  computerBox.innerHTML = "<img src = ../rock-paper-scissors/icons/scissors.png>";
    return choice;
}
 
 function playRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                gameResult.textContent = "Player chose " + playerSelection + ". Computer also chose " + computerSelection + ". It's a draw!";
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
            playerScore.textContent = playerVictory;
            document.getElementById('rock-button').disabled = true;
            document.getElementById('paper-button').disabled = true;
            document.getElementById('scissors-button').disabled = true;
            setTimeout(function() 
            {
                alert('You are the winner of the rock paper scissors game! Play again? ');
                location.reload();
            }, 500);
        }  
}

function computerWin(playerSelection,computerSelection) {
    gameResult.textContent = 'Player chose ' + playerSelection + '. Computer chose ' + computerSelection + '. You lose! ' + computerSelection + ' beats ' + playerSelection  + '!';
    computerVictory++;
    computerScore.textContent = computerVictory;
        if ((computerVictory == 5) && (computerVictory > playerVictory)) {
            computerScore.textContent = computerVictory;
            document.getElementById('rock-button').disabled = true;
            document.getElementById('paper-button').disabled = true;
            document.getElementById('scissors-button').disabled = true;
            setTimeout(function() 
            {
                alert('The computer is the winner of the rock paper scissors game! Play again? ');
                location.reload();
            }, 500);

    }
}

function gameRoundText(roundNumber) {
        roundText.textContent = 'Round ' + roundNumber.toString() + '! Please choose between "Rock", "Paper" and "Scissors".';
}

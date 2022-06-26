let playerVictory = 0;
let computerVictory = 0;

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
/*
let startMatch = game()

function game() {
    
        do {
            console.log('Round ' + i.toString() + '~' );
            let input = prompt('Round ' + i.toString() + '! Please choose between "Rock", "Paper" and "Scissors" by typing in your option'); 
            let selection = input.toLowerCase();
            playerChoice = selection;
       
            if ((playerChoice == "rock")||(playerChoice == "paper")||(playerChoice == "scissors")) {
                break;
            }
        } while ((playerChoice != "rock")||(playerChoice != "paper")||(playerChoice != "scissors"));

        playRound(playerChoice, computerPlay())
        console.log('Player Score: ' +  playerVictory.toString() + ' Computer Score: ' + computerVictory.toString());
    

    if (playerVictory > computerVictory) {
        console.log('You are the winner of the rock paper scissors game!');
    } else if (computerVictory > playerVictory) {
        console.log('The computer is the winner of the rock paper scissors game!');
    } else {
        console.log('Wow! A draw from all 5 rounds! A miracle!');
    }
}

*/
function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}
 

 function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
            console.log('Player chose ' + playerSelection + ', Computer chose ' + computerSelection);
            console.log("Player also chooses " + playerSelection +  " It's a draw!");
    } else if ((playerSelection == 'paper' && computerSelection == 'rock')||(playerSelection == 'scissors' && computerSelection == 'paper')||(playerSelection == 'rock' && computerSelection == 'scissors')) {
            console.log('Player chose ' + playerSelection + ', Computer chose ' + computerSelection);
            console.log('You win! ' + playerSelection + ' beats ' + computerSelection + '!');
            return playerVictory++;  
    } else {
            console.log('Player chose ' + playerSelection + ', Computer chose ' + computerSelection);
            console.log('You lose! ' + computerSelection + ' beats ' + playerSelection  + '!');
            return computerVictory++;
    }
        }


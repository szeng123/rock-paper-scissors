let playerVictory = 0;
let computerVictory = 0;
let numberOfRounds = 5; 

let startMatch = game()

function game() {

    for (let i = 1; i <= numberOfRounds ; i++) {
        do {
            console.log('Round ' + i.toString() + '~' );
            let input = prompt('Round ' + i.toString() + '! Please choose between "Rock", "Paper" and "Scissors" by typing in your option'); 
            let selection = input.toLowerCase();
            playerChoice = selection[0].toUpperCase() + selection.slice(1);
       
            if ((playerChoice == "Rock")||(playerChoice == "Paper")||(playerChoice == "Scissors")) {
                break;
            }
        } while ((playerChoice != "Rock")||(playerChoice != "Paper")||(playerChoice != "Scissors"));

        playRound(playerChoice, computerPlay())
        console.log('Player Score: ' +  playerVictory.toString() + ' Computer Score: ' + computerVictory.toString());
    }
    
    if (playerVictory > computerVictory) {
        console.log('You are the winner of the rock paper scissors game!');
    } else if (computerVictory > playerVictory) {
        console.log('The computer is the winner of the rock paper scissors game!');
    } else {
        console.log('Wow! A draw from all 5 rounds! A miracle!');
    }
}


function computerPlay(choice) {
    const options = ['Rock', 'Paper', 'Scissors'];
    choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}
 

 function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
            console.log('Player chose ' + playerSelection + ', Computer chose ' + computerSelection);
            console.log("Player also chooses " + playerSelection +  " It's a draw!");
    } else if ((playerSelection == 'Paper' && computerSelection == 'Rock')||(playerSelection == 'Scissors' && computerSelection == 'Paper')||(playerSelection == 'Rock' && computerSelection == 'Scissors')) {
            console.log('Player chose ' + playerSelection + ', Computer chose ' + computerSelection);
            console.log('You win! ' + playerSelection + ' beats ' + computerSelection + '!');
            return playerVictory++;  
    } else {
            console.log('Player chose ' + playerSelection + ', Computer chose ' + computerSelection);
            console.log('You lose! ' + computerSelection + ' beats ' + playerSelection  + '!');
            return computerVictory++;
    }
        } 
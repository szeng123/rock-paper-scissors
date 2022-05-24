let playerVictory = 0;
let computerVictory = 0;
let numberOfRounds = 5; 

let startMatch = game()

function game() {

    for (let i = 1; i <= numberOfRounds ; i++) {
        playerChoice = prompt('Round ' + i.toString() + ' ! Please choose between "Rock", "Paper" and "Scissors" by typing in your option'); 
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
       let result = playerSelection.toLowerCase();
       result = result[0].toUpperCase() + result.slice(1);
        if (result == 'Rock' || result == 'Paper' || result == 'Scissors') {
                if (result == computerSelection) {
                    console.log('Player chose ' + result + ', Computer chose ' + computerSelection);
                    console.log("Player also chooses " + result +  " It's a draw!");
                } else if ((result == 'Paper' && computerSelection == 'Rock')||(result == 'Scissors' && computerSelection == 'Paper')||(result == 'Rock' && computerSelection == 'Scissors')) {
                    console.log('Player chose ' + result + ', Computer chose ' + computerSelection);
                    console.log('You win! ' + result + ' beats ' + computerSelection + '!');
                    return playerVictory++;  
                } else {
                    console.log('Player chose ' + result + ', Computer chose ' + computerSelection);
                    console.log('You lose! ' + computerSelection + ' beats ' + result  + '!');
                    return computerVictory++;
            }
        } else {
            console.log('Please enter a valid option!')
        }
     } 
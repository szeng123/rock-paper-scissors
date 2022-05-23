function computerPlay(choice) {
    const options = ['Rock', 'Paper', 'Scissors'];
    choice = options[Math.floor(Math.random()*options.length)];
    return choice;
 }
 

 function playRound(playerSelection, computerSelection) {

 // playerSelection = prompt('Please choose between "Rock", "Paper" and "Scissors" by typing in your option'); //
       let result = playerSelection.toLowerCase();
       result = result[0].toUpperCase() + result.slice(1);
        if (result === 'Rock' || result === 'Paper' || result === 'Scissors') {
                if (result === computerSelection) {
                    return "Player also chooses " + result +  " It's a draw!";
                } else if ((result === 'Paper' && computerSelection === 'Rock')||(result === 'Scissors' && computerSelection === 'Paper')||(result === 'Rock' && computerSelection === 'Scissors')) {
                    text
                    return 'You win! ' + result + ' beats ' + computerSelection + '!';  
                } else {
                    return 'You lose! ' + computerSelection + ' beats ' + result  + '!';
            }
        } else {
            console.log('PLease enter a valid option!')
        }
     } 

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));   

function game() {
    
}
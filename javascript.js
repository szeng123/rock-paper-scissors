function computerPlay(choice) {
    const options = ['Rock', 'Paper', 'Scissors'];
    choice = options[Math.floor(Math.random()*options.length)];
    return choice;
 }
 console.log(computerPlay())
 
 function playRound(playerSelection, computerSelection) {
    
  playerSelection = prompt('Please choose between "Rock", "Paper" and "Scissors" by typing in your option'); 
       let result = String(playerSelection).toLowerCase();
       result = result[0].toUpperCase() + result.slice(1);

        if (result == 'Rock' || result == 'Paper' || result == 'Scissors') {
            let computerSelection = computerPlay();
            
            if (result == computerSelection) {
                console.log("It's a draw!");
            } else if ((result == 'Paper' && computerSelection == 'Rock')||(result == 'Scissors' && computerSelection == 'Paper')||(result == 'Rock' && computerSelection == 'Scissors')) {
              console.log('You win! ' + result + ' beats ' + computerSelection + '.');   
            } else {
                console.log('You lose! ' + computerSelection + ' beats ' + result  + '.')
            }
        } else {
            console.log('PLease enter a valid option!')
        }
     
         
     
         
     } 

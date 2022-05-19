function computerPlay(choice) {
   const options = ['Rock', 'Paper', 'Scissors'];
   choice = options[Math.floor(Math.random()*options.length)];
   return choice;
}
console.log(computerPlay())

function playRound(playSelection, computerSelection) {
   playSelection = prompt('Please choose between "Rock", "Paper" and "Scissors" by typing in your option', result);
        result = result.toLowerCase();
        result = result[0].toUpperCase() + result.slice(1);

    let computerSelection = computerPlay();
        
    if (result === 'Rock' && computerSelection === 'Paper') {
        
    } 
}

const choiceMap = new Map();
choiceMap.set('rock', 1);
choiceMap.set('paper', 2);
choiceMap.set('scissors', 3);

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num === 2) {
        return 'rock';
    } else if (num === 1) {
        return 'paper';
    } else {
        return 'scissors'; 
    }
}   

let playerWinCount = 0;

function playRound(computerSelection, playerSelection) {
    if (choiceMap.get(computerSelection) % 3 > choiceMap.get(playerSelection.toLowerCase()) % 3) {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        playerWinCount++;
        return `You Win!`;
    }
}   

function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt('Rock, Paper, Scissors?');
        console.log(playRound(computerSelection, playerSelection));
    }    
    if (playerWinCount < 3) {
        console.log('Computer wins, machine has once again bested man.');
    } else {
        console.log('Man wins, there is still hope for humanity.');
    }
}
game();
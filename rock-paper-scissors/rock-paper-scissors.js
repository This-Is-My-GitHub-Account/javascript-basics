const choiceMap = new Map();
choiceMap.set('rock', 1);
choiceMap.set('paper', 2);
choiceMap.set('scissors', 3);
function getComputerChoice() {
    let num = floor(Math.random() * 3);
    if (num === 2) {
        return "rock";
    } else if (num === 1) {
        return 'paper';
    } else {
        return 'scissors'; 
    }
}   

function playRound(computerSelection, playerSelection) {
    if (choiceMap.get(computerSelection) % 3 > choiceMap.get(playerSelection.toLowerCase()) % 3) {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `You Win!`;
    }
}   


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
function playRound(playerSelection,computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return "it's a draw!";
    } else if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors')) {
        return "You win! Rock beats scissors.";
    } else if ((playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper')) {
        return "You lose! Paper beats rock.";
    } else if ((playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock')) {
        return "You win! Paper beats rock.";
    } else if ((playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors')) {
        return "You lose! Scissors beats paper.";
    } else if ((playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper')) {
        return "You win! Scissors beats paper.";
    } else if ((playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock')) {
        return "You lose! Rock beats scissors.";
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i =0; i<5 ; i++){
        const playerSelection = playerChoice();
        const computerSelection = getComputerChoice();
        console.log(computerSelection);
        console.log(playRound(playerSelection,computerSelection));
        console.log(`Player ${scorePlayer} VS Computer ${scoreComputer}`);
        if((playRound(playerSelection,computerSelection) === "You win! Rock beats scissors."||"You win! Paper beats rock."||"You win! Scissors beats paper.")){
            scorePlayer++;
        }
        else if((playRound(playerSelection,computerSelection) === "You lose! Rock beats scissors."||"You lose! Paper beats rock."||"You lose! Scissors beats paper.")){
            scoreComputer++;
        }
    }
    console.log("Game Over")
    if(scorePlayer > scoreComputer){
        console.log("Congrats you win!!");
    } else if (scorePlayer < scoreComputer){
        console.log("Better luck next time.");
    } else {
        console.log("it's a tie!");
    }
}
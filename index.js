function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        let randomNum = Math.random();
        if (randomNum < 0.33) {
            return "Rock";
        } else if (randomNum < 0.66) {
            return "Paper";
        } else {
            return "Scissors";
        }
    }

    function getHumanChoice() {
        let human = prompt("Rock, Paper, or Scissors?");
        while (human.toLowerCase() !== "rock" && human.toLowerCase() !== "paper" && human.toLowerCase() !== "scissors") {
            human = prompt("Invalid choice. Please choose Rock, Paper, or Scissors:");
        }
        return human;
    }

    function playRound(humanChoice, computerChoice) {
        // Make humanChoice case-insensitive
        humanChoice = humanChoice.toLowerCase();
        
        // Normalize computerChoice to lower case for comparison
        computerChoice = computerChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("It's a draw!");
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
        }
    }

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
    }

    // Declare overall winner
    if (humanScore > computerScore) {
        console.log("You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("The computer is the overall winner!");
    } else {
        console.log("The game is a draw!");
    }
}

// Start the game
playGame();

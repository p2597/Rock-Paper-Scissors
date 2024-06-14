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

function playRound(humanChoice, computerChoice) {
    const resultDiv = document.querySelector('.result');
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        resultDiv.textContent = "It's a draw!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultDiv.textContent = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`;
    } else {
        computerScore++;
        resultDiv.textContent = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`;
    }

    updateScores();

    if (humanScore === 5) {
        resultDiv.textContent = "You are the overall winner!";
        disableButtons();
    } else if (computerScore === 5) {
        resultDiv.textContent = "The computer is the overall winner!";
        disableButtons();
    }
}

function updateScores() {
    document.getElementById('human').querySelector('p').textContent = humanScore;
    document.getElementById('computer').querySelector('p').textContent = computerScore;
}

function disableButtons() {
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
        button.disabled = true;
    });
}

document.querySelector('.buttons').addEventListener('click', (event) => {
    const target = event.target;
    if (target.id === "rock" || target.id === "paper" || target.id === "scissors") {
        const humanChoice = target.id;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
});

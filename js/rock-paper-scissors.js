function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playGame() {
    let playerChoice = "";
    let computerChoice = getComputerChoice();
    const gameButtons = document.querySelectorAll('.game-button');
    gameButtons.forEach((button) => {
        button.addEventListener('click', () => {
            playerChoice = button.id;
            console.log(`${playerChoice} vs ${computerChoice}`);
            showChoices(playerChoice, computerChoice);
            let result = gameRules(playerChoice, computerChoice);
            console.log(result);
        });
    });
    return playerChoice;
}

function showChoices(playerSelection, computerSelection) {
    const gameContainer = document.querySelector('#resultsContainer');
    const pChoices = document.createElement('p');
    pChoices.textContent = `You chose ${playerSelection} and the computer chose ${computerSelection}`;
    gameContainer.appendChild(pChoices);
}

function gameRules(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            return "You lose! Paper beats Rock";
        } else {
            return "You win! Rock beats Scissors";
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {
            return "You lose! Scissors beats Paper";
        } else {
            return "You win! Paper beats Rock";
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return "You lose! Rock beats Scissors";
        } else {
            return "You win! Scissors beats Paper";
        }
    }
}

playGame();
const selectionButtons = document.querySelectorAll('[data-selection]');
const computerScoreSpan = document.querySelector('[data-computer-score]');
const yourScoreSpan = document.querySelector('[data-your-score]');
const winnerSpan = document.querySelector('[data-winner]');

let computerScore = 0;
let yourScore = 0; 

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection;
        const result = playRound(selectionName);
        console.log(result);
        updateScore(result);

        if (computerScore === 5 || yourScore === 5) {
            if (yourScore > computerScore) {
                winnerSpan.textContent = "A winner is you!";
            } else {
                winnerSpan.textContent = "The computer wins this game!";
            }
            selectionButtons.forEach(button => {
                button.removeEventListener('click', e);
            });
        }
    })
});

function makeSelection(selection) {
    return selection
};


function getComputerChoice(){
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            return "rock";
            break;
        case 2: 
            return "paper"
            break;
        case 3: 
            return "scissors"   
    }
}

function playRound(selection) {
    const computerSelection = getComputerChoice();        
    let playerSelection = makeSelection(selection);

    if ((playerSelection == "rock" && computerSelection == "scissors") || 
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")) {
        yourScore++;
        return `You Win, ${playerSelection} beats ${computerSelection}!`
    }
    else if (playerSelection == computerSelection) {
        return "It's a tie!"
    } else {
        computerScore++;
        return `You Lose, ${computerSelection} beats ${playerSelection}!`
    }
}

    function updateScore(result) {
        if (result.startsWith('You Win')) {
            yourScoreSpan.textContent = yourScore.toString();
        } else if (result.startsWith('You Lose')) {
            computerScoreSpan.textContent = computerScore.toString();
        }
    }




        const Rock = document.querySelector('#Rock');
        const Paper = document.querySelector('#Paper');
        const Scissors = document.querySelector('#Scissors');

        Rock.addEventListener('click', () => {
            getPlayerSelection("rock");
        });

        Paper.addEventListener('click', () => {
            getPlayerSelection("paper");
        });
        
        Scissors.addEventListener('click', () => {
            getPlayerSelection("scissors");
        });

        function getPlayerSelection(selection) {
            return selection;
        }


        const gameResult = document.querySelector('#result');
        gameResult.textContent = `Round: `;

        function getComputerChoice(){
            const randNum = Math.floor(Math.random() * 3) + 1;

            switch(randNum){
                case 1:
                    return "Rock";
                    break;
                case 2: 
                    return "Paper"
                    break;
                case 3: 
                    return "Scissors"   
            }
        }

        const playerSelection = getPlayerSelection();
        const computerSelection = getComputerChoice();
        let playerScore = 0;
        let computerScore = 0;
        let round = 0;

        function playRound(playerSelection, computerSelection) {
            playerSelection = playerSelection.toLowerCase();
            computerSelection = computerSelection.toLowerCase();

            if ((playerSelection == "rock" && computerSelection == "scissors") || 
            (playerSelection == "scissors" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "rock")) {
                return `You Win, ${playerSelection} beats ${computerSelection}!`
            }
            else if (playerSelection == computerSelection) {
                return "It's a tie!"
            } else {
                return `You Lose, ${computerSelection} beats ${playerSelection}!`
            }
        }
        
        /*for(let i = 0; i < 5; i++) {
            let playerSelection = prompt("Rock, Scissors or Paper?","");
            const computerSelection = getComputerChoice();
            const result = playRound(playerSelection, computerSelection);

            if (result.startsWith("You Win")) {
                playerScore++;
            } else if (result.startsWith("You Lose")) {
                computerScore++;
            }

            round++;
            console.log(`Round ${round}: ${result}`);

        

        console.log(`Final Score - Player: ${playerScore}, Computer: ${computerScore}`); */



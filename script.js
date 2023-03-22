

        const Rock = document.querySelector('#Rock');
        const Paper = document.querySelector('#Paper');
        const Scissors = document.querySelector('#Scissors');
        const gameResult = document.querySelector('#result');

        Rock.addEventListener('click', () => {
            const playerSelection = getPlayerSelection("rock");
            const computerSelection = getComputerChoice();
            const result = playRound(playerSelection, computerSelection);
            updateScore(result);
        });

        Paper.addEventListener('click', () => {
            const playerSelection = getPlayerSelection("paper");
            const computerSelection = getComputerChoice();
            const result = playRound(playerSelection, computerSelection);
            updateScore(result);
        });
        
        Scissors.addEventListener('click', () => {
            const playerSelection = getPlayerSelection("scissors");
            const computerSelection = getComputerChoice();
            const result = playRound(playerSelection, computerSelection);
            updateScore(result);
        });

        function getPlayerSelection(selection) {
            const playerSelection = selection;
            return playerSelection;  
        }


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

        
        let playerScore = 0;
        let computerScore = 0;
        let round = 0;

        function playRound(playerSelection, computerSelection) {
            
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
        
        for(let i = 0; i < 5; i++) {
            //let playerSelection = getPlayerSelection();
            const computerSelection = getComputerChoice();
            const result = playRound(playerSelection, computerSelection);

            if (result.startsWith("You Win")) {
                playerScore++;
            } else if (result.startsWith("You Lose")) {
                computerScore++;
            }

            round++;
            console.log(`Round ${round}: ${result}`);
            //gameResult.textContent = `Round: ${round}`;
            //gameResult.textContent += `\nFinal Score - Player: ${playerScore}, Computer: ${computerScore}`; 

        }
        

         



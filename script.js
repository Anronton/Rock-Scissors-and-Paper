

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

        let playerSelection = "Rock";
        const computerSelection = getComputerChoice();


        function playRound(playerSelection, computerSelection) {
        
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
        

         
        console.log(playRound(playerSelection, computerSelection));

        //*function game();*/
        

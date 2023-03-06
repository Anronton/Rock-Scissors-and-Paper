


//*let playerSelection = prompt("Rock, Scissors or paper?")*/
   

        


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

        function playRound(playerSelection, computerSelection) {

        }
        

         

        const playerSelection = "Rock";
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

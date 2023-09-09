function getComputerChoice(){
    let rnd = Math.floor(Math.random()*3);
    if (rnd === 0){
        return "rock";
    } else if (rnd === 1){
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == computerSelection){
        return -1;
    } else if (playerSelection == "rock"){
        if(computerSelection == "paper"){
            return 0;
        } else {
            return 1;
        }
    } else if (playerSelection == "paper"){
        if(computerSelection == "rock"){
            return 1;
        } else {
            return 0;
        }
    } else{
        if(computerSelection == "rock"){
            return 0;
        } else {
            return 1;
        }
    }
}

function game(){
    let playerScore = 0;
    let nextPrompt="";
    for(i = 0; i < 5; i++){

        let playerChoice = prompt(nextPrompt + "\nrock/paper/scissors, your choice, your opponent is the computer. This is round " + (i+1) + " out of 5.").toLowerCase();
        nextPrompt ="";
        let computerChoice = getComputerChoice();
        if(playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors"){
            playerChoice = "rock";
            nextPrompt += "You didn't pick one of the options so I picked rock for you. Everyone picks rock.\n";
        }

        let result = playRound(playerChoice, computerChoice);
        if (result == -1){
            i--;
        } else{
            playerScore+= result;

        }

        nextPrompt += calcResultText(playerChoice, computerChoice);

        nextPrompt += "\nThe score is now you: "+ playerScore + " to the computer: " + (i+1-playerScore);
    }

    nextPrompt =  "The FINAL score is you: " + playerScore + " to computer: " + (5-playerScore);
    if(playerScore >= 3){
        nextPrompt += "\nCongratulations you beat the computer in this random game of chance.";
    } else {
        nextPrompt += "\nThe computer won this random game of chance. Surely it wasn't rigged...";
    }
    nextPrompt +="\nDo you want to play again?";
    if(confirm(nextPrompt)){
        game();
    }
}


function calcResultText(playerChoice, computerChoice){
    if (playerChoice == computerChoice){
        return "You tied, you both picked " + computerChoice + "! We won't count this as one of the five rounds.";
    } else if (playerChoice == "rock"){
        if(computerChoice == "paper"){
            return "The computer picked paper and smothered your rock. You lose!";
        } else {
            return "You crushed the computer's scissors with a rock, you win!";
        }
    } else if (playerChoice == "paper"){
        if(computerChoice == "rock"){
            return "You smothered the computer's rock with your paper. You win!";
        } else {
            return "The computer snipped up your paper with scissors. You lose!";
        }
    } else{
        if(computerChoice == "rock"){
            return "The computer bashed your scissors into dust with a rock. You lose!";
        } else {
            return "You sliced and diced the paper's paper with your scissors. You win!";
        }
    }
}
game();
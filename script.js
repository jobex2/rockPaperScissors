//function returns rock paper or scissors randomly
function computerPlay () 
{
    //create output vars
    const rock = "rock";
    const paper = "paper";
    const scissors ="scissors"
    //create variable that stores random number of 0 1 or 2.
    let number = Math.floor(Math.random()* 100)%3;

    //assign 0 output to rock
    if(number == 0)
    {
        return rock;
    }
    //assign 1 output to paper
    if(number == 1)
    {
        return paper;
    }
    //assign 2 output to scissors
    if(number == 2)
    {
        return scissors;
    } 
}
//plays one round of RPC outputs resulsts to conslose, and returns 1 on win 0 on loss 2 on tie
function playRound (playerSelection, computerSelection)
{
    //convert inputs to lower case
    let playerselect = playerSelection.toLowerCase();
    let computerSelect = computerSelection.toLowerCase();

    //if player chooses rock and computer chooses paper 
    if( playerselect == "rock" && computerSelect == "paper")
    {
        let output = "You Loose! Paper beats Rock";
        console.log(output);
        return 0;
    }

    //if player chooses rock and computer chooses scissors
    if( playerselect == "rock" && computerSelect == "scissors")
    {
        let output = "You Win! Rock beats scissors";
        console.log(output);
        return 1;
    }  

    //if player chooses rock and computer chooses rock
    if( playerselect == "rock" && computerSelect == "rock")
    {
        let output = "You Tie! You both chose Rock!";
        console.log(output);
        return 2;
    }  
    //if player chooses paper and computer chooses paper 
    if( playerselect == "paper" && computerSelect == "paper")
    {
        let output = "You Tie! You both chose Paper!";
        console.log(output);
        return 2;
    }

    //if player chooses paper and computer chooses scissors
    if( playerselect == "paper" && computerSelect == "scissors")
    {
        let output = "You Loose! Scissors beats Paper";
        console.log(output);
        return 0;
    }  

    //if player chooses paper and computer chooses rock
    if( playerselect == "paper" && computerSelect == "rock")
    {
        let output = "You Win! Paper beats Rock!";
        console.log(output);
        return 1;
    } 
    //if player chooses scissors and computer chooses paper 
    if( playerselect == "scissors" && computerSelect == "paper")
    {
        let output = "You Win! Scissors beats Paper";
        console.log(output);
        return 1;
    }

    //if player chooses scissors and computer chooses scissors
    if( playerselect == "scissors" && computerSelect == "scissors")
    {
        let output = "You Tie! You both chose Scissors";
        console.log(output);
        return 2;
    }  

    //if player chooses scissors and computer chooses rock
    if( playerselect == "scissors" && computerSelect == "rock")
    {
        let output = "You Loose! Rock Beats Paper";
        console.log(output);
        return 0;
    } 
}

//play the game five times
function game()
{
    //make vars for player and computer scores
    let playerScore = 0;
    let computerScore = 0;

    //loop through the game 5 times
    for(let i = 0; i < 5; i++){

        //tell user to start the game
        console.log(`Welcome to Rock Paper Scissors! this is round ${i + 1}`);
        //get user input
        let playerSelection = prompt("Please enter rock, paper or scissors.");
        //get computer input
        let computerSelection = computerPlay();
        //play the round
        let winner = playRound(playerSelection, computerSelection);
        //record winner of round
        if ( winner == 1)
        {
            playerScore += 1;
        }
        if ( winner == 0)
        {
            computerScore += 1;
        }
    
        //output current score to console
        console.log(`The score is: You ${playerScore} Comptuer ${computerScore}`);
    }
    //display on console that you lost
    if(playerScore < computerScore){
        console.log("You lost :( better luck next time.");
    }
    //display on conslse that you won
    if(playerScore > computerScore){
        console.log("You Won :) You da Best!");
    }
    //display on conslse that you tied
    if(playerScore == computerScore){
        console.log("You Tied! Sometimes that the way it goes.");
    }    

}

game();
 //object to hold scores and round
 const score = {
    player: 0,
    computer: 0,
    round: 1
}
const btns = document.querySelectorAll(".btn");
 
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
//plays one round of RPC outputs results and returns 1 on win 0 on loss 2 on tie
function playRound (playerSelection, computerSelection)
{
    //convert inputs to lower case
    let playerselect = playerSelection.toLowerCase();
    let computerSelect = computerSelection.toLowerCase();
    const prompt = document.querySelector(".prompts");
    if(score.player == 5){
        prompt.innerHTML = "You won the whole thing!!!!";
        disableButtons();
        return ;
    }
    if(score.computer == 5){
        prompt.innerHTML = "You lost it all, sad";
        disableButtons();
        return ;
    }
    //if player chooses rock and computer chooses paper 
    if( playerselect == "rock" && computerSelect == "paper")
    {
        let output = "You Loose! Paper beats Rock";
        prompt.innerHTML = output;
        console.log(output);
        return 0;
    }

    //if player chooses rock and computer chooses scissors
    if( playerselect == "rock" && computerSelect == "scissors")
    {
        let output = "You Win! Rock beats scissors";
        prompt.innerHTML = output;
        return 1;
    }  

    //if player chooses rock and computer chooses rock
    if( playerselect == "rock" && computerSelect == "rock")
    {
        let output = "You Tie! You both chose Rock!";
        prompt.innerHTML = output;
        return 2;
    }  
    //if player chooses paper and computer chooses paper 
    if( playerselect == "paper" && computerSelect == "paper")
    {
        let output = "You Tie! You both chose Paper!";
        prompt.innerHTML = output;
        return 2;
    }

    //if player chooses paper and computer chooses scissors
    if( playerselect == "paper" && computerSelect == "scissors")
    {
        let output = "You Loose! Scissors beats Paper";
        prompt.innerHTML = output;
        return 0;
    }  

    //if player chooses paper and computer chooses rock
    if( playerselect == "paper" && computerSelect == "rock")
    {
        let output = "You Win! Paper beats Rock!";
        prompt.innerHTML = output;
        return 1;
    } 
    //if player chooses scissors and computer chooses paper 
    if( playerselect == "scissors" && computerSelect == "paper")
    {
        let output = "You Win! Scissors beats Paper";
        prompt.innerHTML = output;
        return 1;
    }

    //if player chooses scissors and computer chooses scissors
    if( playerselect == "scissors" && computerSelect == "scissors")
    {
        let output = "You Tie! You both chose Scissors";
        prompt.innerHTML = output;
        return 2;
    }  

    //if player chooses scissors and computer chooses rock
    if( playerselect == "scissors" && computerSelect == "rock")
    {
        let output = "You Loose! Rock Beats Paper";
        prompt.innerHTML = output;
        return 0;
    } 
}

//play the game 
function game(playerSelection)
{


    const roundNumber = document.querySelector(".roundNumber");
    const humanScore = document.querySelector(".humanScore");
    const computerScore = document.querySelector(".computerScore");
    
    
    //get computer input
    let computerSelection = computerPlay();
    //play the round
    let winner = playRound(playerSelection, computerSelection);
    //record winner of round
    if ( winner == 1)
    {
        score.player += 1;
    }
    if ( winner == 0)
    {
        score.computer += 1;
    }

    //update DOM with results
    roundNumber.innerHTML = ++score.round;
    humanScore.innerHTML = score.player;
    computerScore.innerHTML = score.computer;

    

}

//Waits for click and starts the game
function StartGame (){

    btns.forEach(btn => {
        btn.addEventListener('click', function(){
            console.log(btn.dataset.choice)
            game(btn.dataset.choice)
        })
    });
}
//stops player from continuing to play
function disableButtons(){
    btns.forEach(btn => {
        btn.disabled = true;
    })
}

StartGame();
 
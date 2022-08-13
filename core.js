// things needed
//player variable
//computer variable 

let playerScore = 0;
let computerScore = 0;

//set buttons
const buttons = document.querySelectorAll("input")

//this sets the computer choices and makes a random selection.
function computer(){
    let choices = ["rock" , "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)]
}
function play(playerSelection) {
    let computerPlay = computerSelection
    let result = ""
    
    if (playerSelection === "rock" && computerSelection === "paper") {
        playerScore ++;
        result = ("you win!" +playerSelection + "beats" + computerSelection);
    }
    else if
        (playerSelection === "scissors" && computerSelection === "paper"){
            playerScore ++;
        result = ("you win!" +playerSelection + "beats" + computerSelection);
        }
    else if
        (playerSelection === "rock" && computerSelection === "scissors") {
            playerScore ++;
        result = ("you win!" +playerSelection + "beats" + computerSelection);
        }
}
//want to do
// use a switch command to change images.
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})
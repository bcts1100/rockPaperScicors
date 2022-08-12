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

//want to do
// use a switch command to change images.
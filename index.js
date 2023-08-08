//global variables here 
let rock = "rock" ;
let paper = "paper";
let scissors = "scissors";
let userChoice = "" ;
// on click event listeners

const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click' ,function (){
    userChoice=rock;
    startGame();
});
const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click',function(){
    userChoice=paper;
    startGame();
});
const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click',function(){
    userChoice=scissors;
    startGame();
});

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    if(computerChoice === 0){
        return rock;
    }
    else if(computerChoice===1){
        return paper;
    }
    else if (computerChoice===2){
        return scissors;
    }
}

function playRound(userChoice,computerSelection){

    if(userChoice===computerSelection ){
         alert("tie");
    }
    else if (userChoice==="scissors" && computerSelection==="rock") {
         alert("computer won");
    }
    else if (userChoice==="scissors" && computerSelection==="paper") {
         alert("human won");
    }
    else if (userChoice==="paper" && computerSelection==="rock"){
         alert("human won");
    }
    else if (userChoice==="paper" && computerSelection==="scissors"){
         alert("human won");
    }
    else if (userChoice==="rock" && computerSelection==="paper") {
         alert("computer won");
    }
    else if (userChoice==="rock" && computerSelection==="scissors"){
         alert("human won");
    }
    else{
         alert("nothing");
    }
}

/*
function getPlayerChoice(){


}
    //let answer = prompt("rock? , paper? , scissors ?").toLocaleLowerCase();
    //return answer ;



function game(){
    let times = document.getElementById("userInput").value;
    for(let i = 0;i<times;i++){
        let playerSelection = getPlayerChoice();
        let computerSelection =getComputerChoice();
        playRound(playerSelection,computerSelection);
    }
}
*/
function rounds(){
    let numberOfRounds = document.getElementById("userInput").value;
    return numberOfRounds;
}
function startGame(){
    getComputerChoice();
    playRound(userChoice,getComputerChoice);

}

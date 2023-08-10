//global variables here 
let rock = "rock" ;
let paper = "paper";
let scissors = "scissors";
let userChoice = "" ;
//let roundsON = false ;

const currentTitle = document.querySelector('#variableTitle');
// on click event listeners
function rockButton(){
    userChoice=rock;
    startGame();
};
function paperButton(){
    userChoice=paper;
    startGame();
};
function scissorsButton(){
    userChoice=scissors;
    startGame();
};

//logical function 
function startGame(){
    console.log(userChoice);
    getComputerChoice();
    // to me : it turns out calling getComputerChoice with out the causes errors() 
    playRound(userChoice,getComputerChoice());

}
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
         //alert("tie");
         currentTitle.textContent = 'tie!'
    }
    else if (userChoice==="scissors" && computerSelection==="rock") {
         //alert("computer won");
         currentTitle.textContent = 'computer won over you :('

    }
    else if (userChoice==="scissors" && computerSelection==="paper") {
        //alert("human won");
        currentTitle.textContent = 'cat won over computer :>'

    }
    else if (userChoice==="paper" && computerSelection==="rock"){
        //alert("human won");
        currentTitle.textContent = 'cat won over computer :>'

    }
    else if (userChoice==="paper" && computerSelection==="scissors"){
        //alert("human won");
        currentTitle.textContent = 'cat won over computer :>'
    }
    else if (userChoice==="rock" && computerSelection==="paper") {
        //alert("computer won");
        currentTitle.textContent = 'computer won over you :('
    }
    else if (userChoice==="rock" && computerSelection==="scissors"){
        //alert("human won");
        currentTitle.textContent = 'cat won over computer :>'
    }
    else{
        alert("you discoved a bug , haaay O_o ");
    }
}

/*
function game(){
    let times = document.getElementById("userInput").value;
    for(let i = 0;i<times;i++){
        let playerSelection = getPlayerChoice();
        let computerSelection =getComputerChoice();
        playRound(playerSelection,computerSelection);
    }
}
function rounds(){
    let numberOfRounds = document.getElementById("userInputOfRounds").value;
    return numberOfRounds;
}
*/
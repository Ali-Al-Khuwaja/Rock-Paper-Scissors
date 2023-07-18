function getComputerChoice(){
    let rock = "rock" ;
    let paper = "paper";
    let scissors = "scissors";
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
function getPlayerChoice(){
    let answer = prompt("rock? , paper? , scissors ?").toLocaleLowerCase();
    return answer ;
}


function playRound(playerSelection,computerSelection){

    if(playerSelection===computerSelection ){
         alert("tie");
    }
    else if (playerSelection==="scissors" && computerSelection==="rock") {
         alert("computer won");
    }
    else if (playerSelection==="scissors" && computerSelection==="paper") {
         alert("human won");
    }
    else if (playerSelection==="paper" && computerSelection==="rock"){
         alert("human won");
    }
    else if (playerSelection==="paper" && computerSelection==="scissors"){
         alert("human won");
    }
    else if (playerSelection==="rock" && computerSelection==="paper") {
         alert("computer won");
    }
    else if (playerSelection==="rock" && computerSelection==="scissors"){
         alert("human won");
    }
    else{
         alert("nothing");
    }
}

function game(){
    let times = prompt("how many rounds do you want to play?");
    for(let i = 0;i<times;i++){
        let playerSelection = getPlayerChoice();
        let computerSelection =getComputerChoice();
        playRound(playerSelection,computerSelection);
    }
}
game()

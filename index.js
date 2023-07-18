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
        return alert("tie");
    }
    else if (playerSelection==="scissors" && computerSelection==="rock") {
        return alert("computer won");
    }
    else if (playerSelection==="scissors" && computerSelection==="paper") {
        return alert("human won");
    }
    else if (playerSelection==="paper" && computerSelection==="rock"){
        return alert("human won");
    }
    else if (playerSelection==="paper" && computerSelection==="scissors"){
        return alert("human won");
    }
    else if (playerSelection==="rock" && computerSelection==="paper") {
        return alert("computer won");
    }
    else if (playerSelection==="rock" && computerSelection==="scissors"){
        return alert("human won");
    }
    else{
        console.log("nothing");
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



//global variables here 
let rock = "rock" ;
let paper = "paper";
let scissors = "scissors";
let userChoice = "" ;
let roundsOn = false ;
let hasClicked = false ;

const currentTitle = document.querySelector('#variableTitle');
// on click event listeners
function rockButton(){
    
    if(roundsOn===true){
        hasClicked=true;
        userChoice=rock;
    }else{
        currentTitle.textContent="please enter how many rounds you want to play , O_O"
    }
    
};
function paperButton(){
    
    if(roundsOn===true){
        hasClicked=true;
        userChoice=paper;  
    }else{
        currentTitle.textContent="please enter how many rounds you want to play , O_O"
    }
};
function scissorsButton(){
    
    if(roundsOn===true){
        hasClicked=true;
        userChoice=scissors;
    }else{
        currentTitle.textContent="please enter how many rounds you want to play , O_O"
    }
};

//logical function 
function startGame(){
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
        alert("you discoved a bug , haaay :( ");
    }
}

function startChecker(){
    roundsOn = true;
    let numberOfRounds = document.getElementById("userInputOfRounds").value;
    for(let i = 0;i<numberOfRounds;i++){
        currentTitle.textContent= 'rock , paper ,scissors , you decide';
        while(hasClicked===false){
            console.log("hi");
        if(hasClicked===true){
            startGame();
            hasClicked=false;
            break;
            }
        }
    }
}
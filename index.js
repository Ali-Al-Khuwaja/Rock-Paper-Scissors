//global variables here 
let rock = "rock" ;
let paper = "paper";
let scissors = "scissors";
let userChoice = "" ;
const currentTitle = document.querySelector('#variableTitle');
const rockImage = document.querySelector('#rock');
const paperImage = document.querySelector('#paper');
const scissorsImage = document.querySelector('#scissors');
// on click event listeners
function rockButton(){
    userChoice=rock;
    startGame();
    rockImage.classList.add('clicked');
    setTimeout(animation,0.7  );
};
function paperButton(){
    userChoice=paper;
    startGame();  
    paperImage.classList.add('clicked');
    setTimeout(animation,0.7  );
};
function scissorsButton(){
    userChoice=scissors;
    startGame();
    scissorsImage.classList.add('clicked');
    setTimeout(animation,0.7  );
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
         currentTitle.textContent = 'tie!'
    }
    else if (userChoice==="scissors" && computerSelection==="rock") {
         currentTitle.textContent = 'computer won over you :('
    }
    else if (userChoice==="scissors" && computerSelection==="paper") {
        currentTitle.textContent = 'cat won over computer :>'
    }
    else if (userChoice==="paper" && computerSelection==="rock"){
        currentTitle.textContent = 'cat won over computer :>'
    }
    else if (userChoice==="paper" && computerSelection==="scissors"){
        currentTitle.textContent = 'cat won over computer :>'
    }
    else if (userChoice==="rock" && computerSelection==="paper") {
        currentTitle.textContent = 'computer won over you :('
    }
    else if (userChoice==="rock" && computerSelection==="scissors"){
        currentTitle.textContent = 'cat won over computer :>'
    }
    else{
        alert("you discoved a bug , haaay :( ");
    }
}
// wow i can make timeout function !
function animation(){
    rockImage.classList.remove  ('clicked');
    paperImage.classList.remove('clicked');
    scissorsImage.classList.remove('clicked');
}
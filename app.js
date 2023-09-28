let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const move_p = document.querySelector(".move");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(user,computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "You".fontsize(3).sup();
    const smallCompWord = "Bot".fontsize(3).sup();
    result_div.innerHTML =convertToWord(user)+smallUserWord+" beats "+convertToWord(computer)+smallCompWord+" You Win!🔥";
    // move_p.innerHTML = `You
    //     <img src="images/${convertToWord(user)}-emoji.png" class='move-icon'>
    //     <img src="images/${convertToWord(computer)}-emoji.png" class='move-icon'> 
    //     Bot`;
    showMoves(convertToWord(user),convertToWord(computer));
    document.getElementById(user).classList.add('green-glow');
    setTimeout(()=>document.getElementById(user).classList.remove('green-glow'),900);
    
}
function lose(user,computer){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "You".fontsize(3).sup();
    const smallCompWord = "Bot".fontsize(3).sup();
    result_div.innerHTML = convertToWord(computer)+smallCompWord+" beats "+convertToWord(user)+smallUserWord+" You Lose!☹️";
    showMoves(convertToWord(user),convertToWord(computer));
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function(){document.getElementById(user).classList.remove('red-glow')},900);
}
function draw(user,computer){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "Both choose "+convertToWord(user)+", It's a Draw!😒";
    showMoves(convertToWord(user),convertToWord(computer));
    document.getElementById(user).classList.add('gray-glow');
    setTimeout(function(){document.getElementById(user).classList.remove('gray-glow')},900);
}

function showMoves(user,computer){
    move_p.innerHTML = `You 
    <img src="images/${user}-emoji.png" class='move-icon'>
    <img src="images/${computer}-emoji.png" class='move-icon'> 
    Bot`;
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
           win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click',() => game("r"));
    paper_div.addEventListener('click',function() {
        game("p");
    })
    scissors_div.addEventListener('click',function() {
        game("s");
    })
}

main();

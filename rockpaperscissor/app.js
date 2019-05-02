let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p= document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoices() {
    const choices = ['r', 'p', 's'];
    const randomChoice = (Math.floor(Math.random() * 3));
    return choices[randomChoice];
}

function convertToWord(letter) {
    if(letter === "r") return "Rock";
    else if(letter === "p") return "Paper";
    else return "Scissor";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You Win!`;
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(() => {document.getElementById(userChoice).classList.remove("green-glow")}, 500);
}

function lose(userChoice, computerChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(userChoice)}. You Lose!`;
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(() => {document.getElementById(userChoice).classList.remove("red-glow")}, 500);
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = `${convertToWord(computerChoice)} equals ${convertToWord(userChoice)}. It's a Draw!`;
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(() => {document.getElementById(userChoice).classList.remove("gray-glow")}, 500);
}

function game(userChoice) {
    const computerChoice = getComputerChoices();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }    
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })
    
    paper_div.addEventListener('click', function () {
        game("p");
    })
    
    scissor_div.addEventListener('click', function () {
        game("s");
    })
}

main();
const result = document.querySelector('.roundResult');
let computerCount = 0;
let playerCount = 0;
let roundNumber = 1;
const roundNumberDiv = document.querySelector(".roundNumber");
const computerResult = document.querySelector('.computerResult');
const playerResult = document.querySelector('.playerResult');
const playRound = document.querySelector('#playRound');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
let roundCount = 1;
let clickedOnce = 1;

async function waitForAnyClick(buttons) {
    return new Promise((resolve) => {
        const handleClick = (event) => {
        buttons.forEach((btn) => btn.removeEventListener("click", handleClick));
        resolve(event.currentTarget);
        };

        buttons.forEach((btn) => btn.addEventListener("click", handleClick));
    });
}

async function Play(){
    let randomNumber = Math.random();
    let UserChoice = '';
    let ComputerChoice = randomNumber <= 1/3 ? returnChoice(0)
                    : randomNumber <= 2/3 ? returnChoice(1)
                    : returnChoice(2);

    function returnChoice(n) {
        if (n === 0) {
            return "rock";
        } else if (n === 1) {
            return "paper";
        } else {
            return "scissors";
        }
    }

    const btns = [rockBtn, paperBtn, scissorsBtn];
    const clickedBtn = await waitForAnyClick(btns);

    switch (clickedBtn.textContent) {
        case 'Rock':
            UserChoice = 'rock';
            break;
        case 'Scissors':
            UserChoice = 'scissors';
            break;
        case 'Paper':
            UserChoice = 'paper';
            break;
    }

    if (UserChoice === "rock" && ComputerChoice == "scissors") {
        result.textContent = 'You win -_-';
        playerCount++;
    } else if (UserChoice === "scissors" && ComputerChoice == "paper") {
        result.textContent = 'You win -_-';
        playerCount++;
    } else if (UserChoice === "paper" && ComputerChoice == "rock") {
        result.textContent = 'You win -_-';
        playerCount++;
    } else if (UserChoice === ComputerChoice) {
        result.textContent = "It's a tie";
    } else {
        result.textContent = 'You lost X_X';
        computerCount++;
    }
    roundNumberDiv.textContent = `Round Number: ${roundNumber}`;
    computerResult.textContent = `Computer Points: ${computerCount}`;
    playerResult.textContent = `Player Points: ${playerCount}`;
    roundNumber++;
    if (roundCount === 5) {
        result.textContent = (playerCount > computerCount) ? "You have Won, Congrats"
                        : (playerCount == computerCount) ? "It's a tie, i think so Congrats to all ^_^"
                        :"You Have Lost, Looooserrr H@H@";
        roundCount = 1;
        clickedOnce = 1;
        return;
    }
    roundCount++;
    Play();
}



playRound.addEventListener('click', () => {
    if(roundCount == 1 && clickedOnce == 1){
        clickedOnce = 0;
        Play()
    }
});
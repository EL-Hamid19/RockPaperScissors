function Play(){
    let randomNumber = Math.random();
    let UserChoice = prompt("choose ur fighter:");
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

    let result = (UserChoice.toLowerCase() == "rock" && ComputerChoice == "scissors") ? "You win -_-"
            : (UserChoice.toLowerCase() == "scissors" && ComputerChoice == "paper") ? "You win -_-"
            : (UserChoice.toLowerCase() == "paper" && ComputerChoice == "rock") ? "You win -_-"
            : (UserChoice.toLowerCase() == ComputerChoice) ? "It's a tie,"
            : "You lost X_X";
    console.log("You choose " + UserChoice + " and the computer chooses " + ComputerChoice + " So:")
    console.log(result);
}

function PlayGame() {
    for (let i = 0; i < 5; i++) {
        Play();
    }
}
PlayGame();
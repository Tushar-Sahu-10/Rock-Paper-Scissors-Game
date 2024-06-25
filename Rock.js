let choices = document.querySelectorAll(".choice");
let userPoints = 0;
let computerPoints = 0;
let userPoint = document.querySelector("#userPoints");
let computerPoint= document.querySelector("#computerPoints");
let reset = document.querySelector("#msg");
let winnerdiv = document.querySelector(".winner");
let winner = document.querySelector("#winner");


for (const choice of choices) {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        let compChoice = getcomputerChoice();
        playGame(userChoice, compChoice);
    })
}

const getcomputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 4);
    return options[randomIdx];
}


const playGame = (userChoice, compChoice) => {
    console.log(`User Choice is = ${userChoice}`);
    console.log(`Computer Choice is = ${compChoice}`);
    if (userChoice === compChoice)
        draw();

    else if (userChoice === 'rock') {
        let result = compChoice === 'paper' ? true : false;
        gameResult(result);
    }

    else if (userChoice === 'paper') {
        let result = compChoice === 'scissor' ? true : false;
        gameResult(result);
    }


    else if (userChoice === 'scissor') {
        let result = compChoice === 'rock' ? true : false;
        gameResult(result);
    }

}

const gameResult = (result) => {
    if (result === true)
    {
        computerWin();
        computerPoints++;
        computerPoint.innerText=`${computerPoints}`;
        winner.innerText="Computer Win";
        winnerdiv.style.backgroundColor="#F08080";
        winnerdiv.classList.remove("none");

    }    
    else
    {
        playerWin();
        userPoints++;
        userPoint.innerText=`${userPoints}`;
        winner.innerText="You Win";
        winnerdiv.style.backgroundColor="#FFD700";
        winnerdiv.classList.remove("none");

    }
}

const draw = () => {
    winner.innerText="Draw";
    winnerdiv.style.backgroundColor="#87CEFA";
    winnerdiv.classList.remove("none");
}

const playerWin = () => {
    console.log("Player Win");
}

const computerWin = () => {
    console.log("Computer Win");
}

reset.addEventListener("click",()=>{
        userPoints=0;
        userPoint.innerText=`${userPoints}`;
        computerPoints=0;
        computerPoint.innerText=`${computerPoints}`;
        winnerdiv.classList.add("none");
        
})
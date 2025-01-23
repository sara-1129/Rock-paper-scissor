let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");    
const compScorePara = document.querySelector("#comp-score");                
const getCompChoice = () => {
    const compChoices = ["rock", "paper", "scissors"];
    const compRandom = Math.floor(Math.random() * 3);
    return compChoices[compRandom];
};

const getWinner = (userChoice, compChoice) => {
    if(userChoice === compChoice){
        msg.innerText = "It's a Draw! Please try again";
        msg.style.backgroundColor = "darkblue";
        return "It's a draw!";
    }
    if(userChoice === "rock"){
        if(compChoice === "paper"){
            msg.innerText = `You Lose! {Computer chose ${compChoice}}`;
            msg.style.backgroundColor = "red";
            compScore++;
            compScorePara.innerText = compScore;
            return "Computer wins!";
        } else {
            msg.innerText = `You win! {Computer chose ${compChoice}}`;
            msg.style.backgroundColor = "green";
            userScore++;
            userScorePara.innerText = userScore;
            return "You win!!";
        }
    }
    if(userChoice === "paper"){
        if(compChoice === "scissors"){
            msg.innerText = `You Lose! {Computer chose ${compChoice}}`;
            msg.style.backgroundColor = "red";
            compScore++;
            compScorePara.innerText = compScore;
            return "Computer wins!";
            
        } else {
            msg.innerText =`You win!!{Computer chose ${compChoice}}`;
            msg.style.backgroundColor = "green";
            userScore++;
            userScorePara.innerText = userScore;
            return "You win!";
        }
    }
    if(userChoice === "scissors"){
        if(compChoice === "rock"){
            msg.innerText = `You Lose! {Computer chose ${compChoice}}`;
            msg.style.backgroundColor = "red";
            compScore++;
            compScorePara.innerText = compScore;
            return "Computer wins!";
        } else {
            msg.innerText = `You win! {Computer chose ${compChoice}}`;
            msg.style.backgroundColor = "green";
            userScore++;
            userScorePara.innerText = userScore;
            return "You win!";
        }
    }
}
const playGame = (userChoice) => {
    console.log(userChoice);
    const compChoice = getCompChoice();
    console.log(compChoice);
    const result = getWinner(userChoice, compChoice);
    console.log(result);
   
};




// Event listeners for the choices
choices.forEach((choice) =>{
    
    choice.addEventListener("click",() =>
    {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    });
});
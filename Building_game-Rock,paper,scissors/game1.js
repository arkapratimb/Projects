let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user_score");
const compScorePara = document.querySelector("#comp_score");
let msg = document.querySelector("#msg");

const genCompChoice = () => {
  let option = ["rock", "paper", "scissors"];
  let random = option[Math.floor(Math.random() * 3)];
  return random;
};
const drawgame = () => {
  console.log("Draw, play again!");
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "grey";
};

const showUserWin = (userWin, userChoice, compChoice) => {
  if (!userWin) {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  } else {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }
};
const playGame = (userChoice) => {
  console.log(`User choice is ${userChoice}`);
  const compChoice = genCompChoice();
  console.log(`Computer choice is ${compChoice}`);
  if (compChoice === userChoice) {
    drawgame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //papper,scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "paper" ? false : true;
    }
    showUserWin(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    // console.log(choice);
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

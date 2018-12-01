var rock = document.getElementById("rBtn");
var paper = document.getElementById("pBtn");
var scissor = document.getElementById("sBtn");
var userChoice = " ";

var rps = ["Rock", "Paper", "Scissor"];
var r_rps = rps[Math.floor(Math.random() * rps.length)];

//listiners

rock.addEventListener("click", rockChoice);
rock.addEventListener("click", gameStart);
paper.addEventListener("click", paperChoice);
paper.addEventListener("click", gameStart);
scissor.addEventListener("click", scissorChoice);
scissor.addEventListener("click", gameStart);

//functions

function rockChoice() {
  userChoice = "Rock";
}

function paperChoice() {
  userChoice = "Paper";
}

function scissorChoice() {
  userChoice = "Scissor";
}

function loser(u, c) {
  alert("You selected " + u + "," + " I picked " + c + " " + "You lose!");
}

function winner() {
  alert("You selected " + u + "," + " I picked " + c + " " + "YOU WIN!!!");
}

function tie(u, c) {
  alert("You selected " + u + "," + " I picked " + c + " " + "IT'S A TIE!");
}

function gameStart() {
  var compChoice = rps[Math.floor(Math.random() * rps.length)];
  if (userChoice == "Rock" && compChoice == "Paper") {
    loser(userChoice, compChoice);
  } else if (userChoice == "Rock" && compChoice == "Scissor") {
    winner(userChoice, compChoice);
  } else if (userChoice == "Paper" && compChoice == "Rock") {
    winner(userChoice, compChoice);
  } else if (userChoice == "Paper" && compChoice == "Scissor") {
    loser(userChoice, compChoice);
  } else if (userChoice == "Scissor" && compChoice == "Rock") {
    loser(userChoice, compChoice);
  } else if (userChoice == "Scissor" && compChoice == "Paper") {
    winner(userChoice, compChoice);
  } else {
    tie(userChoice, compChoice);
  }
}

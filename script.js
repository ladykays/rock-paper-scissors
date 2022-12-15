// Rules
// Rock & Scissors = Rock Wins
// Rock & Paper = Paper Wins
// Paper & Scissors = Scissors Wins
// Rock & Rock = Draw
// Paper & Paper = Draw
// Scissors & Scissors = Draw

//Step 1: Get player name and assign it to a variable
var playerName = prompt("What is your name? ");

// Step 2: Create an array of characters for computer to select from and assign it to a variable
var compSelection = ["R", "P", "S"];

//Step 3: Use Math.random() function to get the computer to choose a random character between R, P, S and assign it to a variable

//Gets a random number between 0 to 2 and multiply it by the array length
var random = Math.floor (Math.random() * compSelection.length) //This returns a random integer between 0 and 2 (both included)

//Step 4: Prompt player to enter a character between R, P and S
var playerSelection = prompt("Enter a character between R, P and S");
console.log("You selected: " + playerSelection + " and Computer selected : " + compSelection);

//Step 5: Compare character chosen by computer with that chosen by player to determine who won or if the game is a draw
if (compSelection[0] && playerSelection === "S") {
  alert ("Computer Won");
} else if (compSelection[0] && playerSelection === "P") {
  alert("Congratulations " + playerName + " you won!");
} else if (compSelection[1] && playerSelection === "S") {
  alert("Congratulations " + playerName + " you won!");
} else if (compSelection[0] && playerSelection === "R") {
  alert("It's a draw!");
} else if (compSelection[1] && playerSelection === "P") {
  alert("It's a draw!");
} else if (compSelection[2] && playerSelection === "s") {
  alert("It's a draw!");
} else {
  alert ("Invalid entry!");
}
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
console.log("You selected: " + playerSelection + " and Computer selected : " + compSelection[random]);

//Declare score variable
var score
//Step 5: Compare character chosen by computer with that chosen by player to determine who won or if the game is a draw

  if (compSelection[random] === "R" && playerSelection === "S") {
  alert ("Computer Won!\nYou selected: " + playerSelection + " and Computer selected: " + compSelection[random]);
  } else if (playerSelection === "R" && compSelection[random] === "S") {
  alert ("Congratulations " + playerName + " you won!\nYou selected: " + playerSelection + " and Computer selected: " + compSelection[random]);
  } else if (compSelection[random] === "R" && playerSelection === "P") {
  alert("Congratulations " + playerName + " you won!\nYou selected: " + playerSelection + " and Computer selected: " + compSelection[random]);
  } else if (playerSelection === "R" && compSelection[random] === "P") {
  alert ("Computer Won!\nYou selected: " + playerSelection + " and Computer selected: " + compSelection[random]);
  } else if (compSelection[random] === "P" && playerSelection === "S") {
  alert("Congratulations " + playerName + " you won!\nYou selected: " + playerSelection + " and Computer selected: " + compSelection[random]);
  } else if (playerSelection === "P" && compSelection[random] === "S") {
  alert ("Computer Won!\nYou selected: " + playerSelection + " and Computer selected: " + compSelection[random]);
  } else if (compSelection[random] === "R" && playerSelection === "R") {
  alert("It's a draw!\nYou selected: " + playerSelection + " and Computer selected: " + compSelection[random]);
  } else if (compSelection[random] === "P" && playerSelection === "P") {
  alert("It's a draw!\nYou selected: " + playerSelection + " and Computer selected: " + compSelection[random]);
  } else if (compSelection[random] === "S" && playerSelection === "S") {
  alert("It's a draw!\nYou selected: " + playerSelection + " and Computer selected: " + compSelection[random]);
  } else {
  alert ("Invalid entry!\nYou selected: " + playerSelection + " and Computer selected: " + compSelection[random]);
  }


  // confirm ("Would you like to play again?");
  // if (confirm == true) {
  //   for (i = 0; i < 2; i++) {
  //   random = Math.floor (Math.random() * compSelection.length)
  //   playerSelection = prompt("Enter a character between R, P and S");
  //   console.log("You selected: " + playerSelection + " and Computer selected : " + compSelection[random]);
  //   if (compSelection[random] === "R" && playerSelection === "S") {
  //     alert ("Computer Won!");
  //     } else if (playerSelection === "R" && compSelection[random] === "S") {
  //     alert ("Congratulations " + playerName + " you won!");
  //     } else if (compSelection[random] === "R" && playerSelection === "P") {
  //     alert("Congratulations " + playerName + " you won!");
  //     } else if (playerSelection === "R" && compSelection[random] === "P") {
  //     alert ("Computer Won!");
  //     } else if (compSelection[random] === "P" && playerSelection === "S") {
  //     alert("Congratulations " + playerName + " you won!");
  //     } else if (playerSelection === "P" && compSelection[random] === "S") {
  //     alert ("Computer Won!");
  //     } else if (compSelection[random] === "R" && playerSelection === "R") {
  //     alert("It's a draw!");
  //     } else if (compSelection[random] === "P" && playerSelection === "P") {
  //     alert("It's a draw!");
  //     } else if (compSelection[random] === "S" && playerSelection === "S") {
  //     alert("It's a draw!");
  //     } else {
  //     alert ("Invalid entry!");
  //     }
  //   }
  // } else {
  //   console.log("You Cancelled !");
  // }
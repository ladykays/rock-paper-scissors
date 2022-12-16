// RULES
// Rock & Scissors = Rock Wins
// Rock & Paper = Paper Wins
// Paper & Scissors = Scissors Wins
// Rock & Rock = Draw
// Paper & Paper = Draw
// Scissors & Scissors = Draw


// PSEUDOCODE
// Do I need the players name?
  // Not neccessarilly
// How do I submit my own choice for R,P,S?
  // Prompt user to enter "R", "P" or "S" and store it in a variable
// How is the oppnent (computer) going to retrieve their choice?
  // Initialize 'compSelection' array with R, P, S as the array items representing rock, paper and scissors
  // Opponent (computer) chooses a random value from the array using Math.random() method and the value is stored into a variable
// Do I need to keep track of wins, losses and ties?
  //Yes
  // Initialize the variables, win, loss and tie
  // To determine the result set up a bunch of if/else statements that check for win, loss or tie conditions. For each program run, increment the result in the appropriate variable. For example
  /*
    if (playerSelection === “r” && compSelection === “s”) {
       win++;
       alert(“You win!“);
    }
    */
// Do I need to go multple rounds?
  // I need to run the code for the first time, 
  // Use confirm to find out if the user would like to play again. If true,
  // Use a loop statement to allow the user run the program for a maximum of 10 times
  // Use a conditional statement to call a function that executes the code. I would need to wrap the above code into a function that I can call
  // Alert user with the result showing the total wins, losses and ties, at the end of the game



// Get player name and assign it to a variable
var playerName = prompt("What is your name? ");

// Initialize variables then set up to track wins, losses, and ties
var win = 0;
var loss = 0;
var tie = 0;

//Function declearation
function replay () {  
  // Create an array of characters for computer to select from and assign it to a variable
  var compSelection = ["R", "P", "S"];

  // Computer chooses a random number between 0 to 2 and multiply it by the array length and assign it to a variable
  var random = Math.floor (Math.random() * compSelection.length) //This returns a random integer between 0 and 2 (both included)

  // Prompt player to enter a character between R, P and S
  var playerSelection = prompt("Enter a character between R, P and S");

  // Compare character chosen by computer with that chosen by player to determine who won or if the game is a tie

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
 //create variables needed for game
 var randomLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
 var wins = 0;
 var losses = 0;
 var guessCount = 9;
 var userChoices = [];


//function to handle key presses
document.onkeyup = function(event) {
    //variable to assign key press to userGuess cariable
    var userGuess = event.key;
    
    //generate computers letter
    var computerGuess = randomLetter[Math.floor(Math.random() * randomLetter.length)];

//variable for user options
    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
		 	
	if (options.indexOf(userGuess) > -1) {
    //function for when user guesses right to add to the win count
		if (userGuess === computerGuess) {
			wins++;
		    guessCount = 9;
			userChoices = [];
		}
//if function to push the incorrect guess to the userchoices array
		if (userGuess != computerGuess) {
			guessCount --;
			userChoices.push(userGuess);
		}
//function to keep track of how many guess are left
				if (guessCount === 0) {

				guessCount = 9;
				losses ++;
				userChoices = [];

				
			}
//create placeholders for the global variables to go within the html
		var html = 
		"<h1> The Psychic Game </h1>" +
        "<p>Guess what letter I'm thinking of!</p>" +		
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
		"<p>Guesses Left: " + guessCount + "</p>" +
		"<p>Your Guesses so far: " + userChoices.join(", ") + "</p>";

			document.querySelector("#game").innerHTML = html;

			
			}
		};


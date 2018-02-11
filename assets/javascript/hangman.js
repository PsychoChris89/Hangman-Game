// JavaScript Document
	var ArrLettersInName = [
			["C", "H", "R", "I", "S"],
			["A", "L", "E", "X"],
			["J", "U", "L", "I", "E"],
			["B", "A", "O"],
			["Q", "U", "Y", "N", "H"]
		]
		var random = Math.floor((Math.random() * (ArrLettersInName.length - 1))
		);

		var TranName = ArrLettersInName[random]; // the name to guess will be chosen from the array above
		var GuessField = new Array(TranName.length);
		var Guesses = 0;

		// every letter in the name is symbolized by an underscore in the guessfield
		for (var i = 0; i < GuessField.length; i++) {
			GuessField[i] = "_ ";
		}

		// prints the guessfield
		function printGuessField() {
			for (var i = 0; i < GuessField.length; i++) {
				var Correct_Letters = document.getElementById("Correct_Letters");
				var Letter = document.createTextNode(GuessField[i]);
				Correct_Letters.appendChild(Letter);
			}
		}

		//checks if the the letter provided by the user matches one or more of the letters in the word
		var Letter_Selected = function () {
			var f = document.rateformular;
			var b = f.elements["ratecharacter"];
			var character = b.value; // the letter provided by the user
			character = character.toUpperCase();
			for (var i = 0; i < TranName.length; i++) {
				if (TranName[i] === character) {
					GuessField[i] = character + " ";
					var CorrectGuess = true;
				}
				b.value = "";
			}

			//deletes the guessfield and replaces it with the new one
			var Correct_Letters = document.getElementById("Correct_Letters");
			Correct_Letters.innerHTML = "";
			printGuessField();

			// if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
			if (!CorrectGuess) {
				var Wrong_Letters = document.getElementById("Wrong_Letters");
				var Letter = document.createTextNode(" " + character);
				Wrong_Letters.appendChild(Letter);
				Guesses++;
				var hangman = document.getElementById("hangman");
				hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + Guesses + ".png";
			}

			//checks if all letters have been found
			var CorrectName = true;
			for (var i = 0; i < GuessField.length; i++) {
				if (GuessField[i] === "_ ") {
					CorrectName = false;
				}
			}
			if (CorrectName) {
				window.alert("You win!");
			}

			//once you got six wrong letters, you lose
			if (Guesses === 6) {
				window.alert("Uh...I guess you're dead now.");
			}
		}

		function init() {
			printGuessField();
		}

		window.onload = init;
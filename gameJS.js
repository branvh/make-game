	$(document).ready(function () {}

		//document ready calls the start game function - set scores to 0, reset letters guessed array, words guessed array reset

		//event listerners  -   onkeyup   -   Harry

			//listener calls the valid key

			//listener passes a VALID letter only to the guesscheck function

		//letter passes to guess check

		//guess check updates letters guessed (calls function) and updates score, guesses remaining

		//guess check also calls ?win check and if that returns 1, move to update screen


	});


	var game = {

		score: 0,
		currentWord: '',
		guessesRemaining: 0,
		lettersGuessed: [],
		createWord: function(){

		currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];
			              
		             

		}, // Tyler
		winCheck: function () {
		//win defined as score = word length - 1
		//assumes score gets set to 0 at game start and earn a point each correct guess

			var requiredScore = currentWord.length;

			if (guessesRemaining === 0){

				alert('you lost, try again');
				//how do we want to reset game?
			}
			else if (score === requiredScore){

				alert('you won!!');
				//how to handle update and start over?
			}
			else return 1;
		},  
		guessCheck: function () {

			$(".container").keyup(function(){

				if(currentWord.indexOf(this) != -1){

						
					}

				}

			})

		}, // Alan
		updateScreen: function () {

			var wordLength = currentWord.Length;

			var displayText = [];

			for (var i = 0; i < wordLength; i++) {
				
				if (lettersGuessed.indexOf(currentWord[i]) === 0){
					displayText[i] = currentWord[i];
				}
				else {
					displayText[i] = '_  ';
				}

			}


			$('#output').html(displayText);

			$('#guess-remaining').html(guessesRemaining);

			$('#letters-guessed').html(lettersGuessed.join(","));

		}, // Brandon

		guessCheck: function () {

			$(".container").keyup(function(){

				if(currentWord.indexOf(this) != -1){

						
					}

				}

			})

		}, // Alan
		updateLettersGuessed: function () {}, // Alan
		validKeyCheck: function () {}, // Henry
		wordArray: ["word","class", "javascript", "cubs", "indians", "lastword"],  
		gameStart: function (){} // Tyler

	}

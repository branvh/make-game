	$(document).ready(function () {}

		//event listerners  -   onkeyup   -   Harry



	});


	var game = {

		score: -1,
		currentWord: '',
		guessesRemaining: -1,
		lettersGuessed: [],
		createWord: function (){}, // Tyler
		winCheck: function () {

			var requiredScore = currentWord.length;

			if (guessesRemaining === 0){

				alert('you lost, try again');
				//how do we want to reset game?
			}
			else if (score === requiredScore){

				alert('you won!!');
				//how to handle update and start over?
			}
			else return;

		}, // Brandon
		guessCheck: function () {

			$(".container").keyup( function(){

				for(i = 0; i<currentWord.length()){

					if(this === currentWord[i]){

						
					}

				}

			})

		}, // Alan
		updateScreen: function () {} , // Brandon
		updateLettersGuessed: function () {}, // Alan
		validKeyCheck: function () {}, // Henry
		wordArray: ["word","class", "javascript", "cubs", "indians", "lastword"],  
		gameStart: function (){} // Tyler

	}

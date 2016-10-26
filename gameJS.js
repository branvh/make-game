	$(document).ready(function () {

		//event listerners  -   onkeyup   -   Harry






 var game = {

		score: -1,
		currentWord: '',
		guessesRemaining: -1,

		lettersGuessed: [],
		createWord: function(){

		currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];
			              
		             

		}, // Tyler
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

			$(".container").keyup(function(){

				if(currentWord.indexOf(this) != -1){

						
					}

				}

			})

		}, // Alan
		updateScreen: function () {} , // Brandon
		updateLettersGuessed: function () {}, // Alan
		validKeyCheck: function () {}, // Henry
		  
		gameStart: function (){
			
			document.onkeyup = function keypress(event){
				var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			}		

				}
		} // Tyler

	}
})

*/
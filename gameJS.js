	$(document).ready(function () {}

		//event listerners  -   onkeyup   -   Harry



	});


	var game = {

		score: -1,
		guessesRemaining: -1,
		lettersGuessed: [],
		createWord: function (){}, // Tyler
		winCheck: function () {}, // Brandon
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

	$(document).ready(function() {

	    //document ready calls the start game function - set scores to 0, reset letters guessed array, words guessed array reset

	    //event listerners  -   onkeyup   -   Harry

	    //listener calls the valid key

	    //listener passes a VALID letter only to the guesscheck function

	    //letter passes to guess check

	    //guess check updates letters guessed (calls function) and updates score, guesses remaining

	    //guess check also calls ?win check and if that returns 1, move to update screen

	    /*var letter = '';*/

	    game.gameStart();

	    $(document).keyup(function(event) {

	        var letter = String.fromCharCode(event.keyCode).toLowerCase();

	        if (game.validKeyCheck(letter)) {

	            game.guessCheck(letter);


	        } else {

	            return;
	        }

	    });

	});

	var game = {

	    score: 0,
	    currentWord: '',
	    guessesRemaining: 0,
	    lettersGuessed: [],
	    createWord: function() {

	        currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];
	    },
	    winCheck: function() {
	        //win defined as score = word length - 1
	        //assumes score gets set to 0 at game start and earn a point each correct guess

	        var requiredScore = currentWord.length;

	        if (guessesRemaining === 0) {

	            alert('you lost, try again');
	            //reset page
	            this.gameStart();
	        } else if (score === requiredScore) {

	            alert('you won!!');
	            //reset page
	            this.gameStart();
	        } else return 1;
	    },
	    guessCheck: function(index) {

	        if (currentWord.indexOf(this) != -1) {


	            this.updateScreen();
	        }

	    }, // Alan
	    updateScreen: function() {

	        var wordLength = currentWord.Length;

	        var displayText = [];

	        for (var i = 0; i < wordLength; i++) {

	            if (lettersGuessed.indexOf(currentWord[i]) === 0) {
	                displayText[i] = currentWord[i];
	            } else {
	                displayText[i] = '_  ';
	            }

	        }


	        $('#output').html('Progress: ' + displayText);

	        $('#guess-remaining').html('Guesses remaining: ' + guessesRemaining);

	        $('#letters-guessed').html('Letters guessed: ' + lettersGuessed.join(","));

	    }, // Brandon
	    updateLettersGuessed: function() {}, // Alan
	    validKeyCheck: function(letter) {

	        console.log(letter);

	    }, // Harry
	    wordArray: ["word", "class", "javascript", "cubs", "indians", "lastword"],
	    gameStart: function() {

	        score,
	        guessesRemaining = 0;
	        lettersGuessed = [];

	        //new word
	        this.currentWord();

	        //clear out the screen
	        this.updateScreen();
	    },

	}

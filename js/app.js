
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Start a new game ---*/
  	function newGame() {
  		randomNumber();
  	}

  	$(".new").click(function(event) {
  		console.log("New Game!");
		newGame();	
	});

  	/*--- Generate a random number ---*/
  	function randomNumber() {
  		var number = Math.floor((Math.random() * 100) + 1);
  		console.log("Random Number: " + number);
  	}

  	/*--- Submit user guesses ---*/
  	$(".button").click(function(event) {
  		userNumber();
	});

  	function userNumber() {
  		var guess = $("#userGuess").val();
  		console.log("User Guessed: " + guess)
  		event.preventDefault();
  	}

  	/*Math.abs for absolute value
  	userGuess - computerNumber > 10...*/

  	/*--- List previously guessed numbers ---*/
});



$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Define global variables ---*/
  	var number;

  	/*--- New game function ---*/
  	function newGame() {
  		randomNumber();
  		$("#feedback").html("<h3>Make your Guess!</h3>");
  	}

  	/*--- Click to start a new game ---*/
  	$(".new").click(function(event) {
  		console.log("New Game!");
		newGame();	
	});

  	/*--- Generate a random number ---*/
  	function randomNumber() {
  		number = Math.floor((Math.random() * 100) + 1);
  		console.log("Random Number: " + number);
  	}

  	/*--- Submit user guesses ---*/
  	$(".button").click(function(event) {
  		userNumber();
  		$("#userGuess").val("");
  		guessCount();
	});

  	/*--- User guess function ---*/
  	function userNumber() {
  		var guess = $("#userGuess").val();
  		console.log("User Guessed: " + guess);

  		/*--- Add user guesses to list ---*/
  		$("#guessList").append("<li>" + guess + "</li>");
  		event.preventDefault();

  		/*--- User feedback ---*/
  		if (number - guess == 0) {
  			$("#feedback").html("<h3>You won!</h3>");
  		}
  		else if (Math.abs(number - guess) <= 5) {
  			$("#feedback").html("<h3>You're on fire!</h3>");
  		}
  		else if (Math.abs(number - guess) <= 10) {
  			$("#feedback").html("<h3>Is it getting hot in here?</h3>");
  		}
  		else if (Math.abs(number - guess) <= 25) {
  			$("#feedback").html("<h3>You're on the right track!</h3>");
  		}
  		else if (Math.abs(number - guess) <= 40) {
  			$("#feedback").html("<h3>Getting warm...</h3>");
  		}
  		else if (Math.abs(number - guess) <= 50) {
  			$("#feedback").html("<h3>Cold.</h3>");
  		}
  		else if (Math.abs(number - guess) <= 75) {
  			$("#feedback").html("<h3>Ice cold.</h3>");
  		}
  		else {
  			$("#feedback").html("<h3>Not even close.<h3>");
  		}

  		/* Switch case */
  	}

  	function guessCount() {
  		var count = $("#count").val();
  		$("#count").val(count + 1);
  	}

  	/*--- Counter 
  	set the value using the val function
  	current value + 1


  	$("#count").val($("#count").val() + 1); ---*/

  	/* Comparisons
  	define global variable referring to previous guesses*/


  	
});



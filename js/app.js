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
      $("#feedback").html("<h3>Make your Guess!</h3>");
  		randomNumber();
      guessCount = 0;
      $("#count").text(guessCount);
      $("#guessList li").remove();
  	}

    /*--- Random number function ---*/
    function randomNumber() {
      number = Math.floor((Math.random() * 100) + 1);
      console.log("Random Number: " + number);
    }

    /*--- Guess counter function ---*/
    function guessCounter(count){
        $("#count").text(guessCount);
    }

  	/*--- Click to start a new game ---*/
  	$(".new").click(function(event) {
  		console.log("New Game!");
		  newGame();	
	  });

  	/*--- Submit user guesses ---*/
  	$(".button").click(function(event) {
  		userNumber();
  		$("#userGuess").val("");
	  });

  	/*--- User guess function ---*/
  	function userNumber() {
  		var guess = $("#userGuess").val();
  		console.log("User Guessed: " + guess);

  		/*--- Add user guesses to list ---*/
  		$("#guessList").append("<li>" + guess + "</li>");

      /*--- Count user guesses ---*/
      guessCount++;
      guessCounter(guessCount);

      /*--- Prevent refresh ---*/
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
  			$("#feedback").html("<h3>Even warmer...</h3>");
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
  	}
 
  	/* set the value using the val function
  	current value + 1

    function guessCount() {
      $("#count").text(guessAttempts)
    }

    or

  	$("#count").val($("#count").val() + 1); ---*/

  	/* Comparisons
  	define global variable referring to previous guesses*/
  	
});



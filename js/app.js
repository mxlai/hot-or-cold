$(document).ready(function(){

  /*--- Display information modal box ---*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);
  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function(){
    $(".overlay").fadeOut(1000);
  });

  /*--- Global variables ---*/
  var number;
  var guessCount;
  var previousGuess;

  /*--- New game function ---*/
  function newGame(){
    $("#feedback").html("<h3>Make your Guess!</h3>");
    randomNumber();
    guessCount = 0;
    $("#count").text(guessCount);
    $("#guessList li").remove();
  }

  /*--- Random number function ---*/
  function randomNumber(){
    number = Math.floor((Math.random() * 100) + 1);
    console.log("Random Number: " + number);
  }

  /*--- Guess counter function ---*/
  function guessCounter(count){
    $("#count").text(guessCount);
  }

  /*--- Click to start a new game ---*/
  $(".new").click(function(event){
    console.log("New Game!");
    newGame();	
  });

  /*--- Submit user guess ---*/
  $(".button").click(function(event){
    checkNumber();
    $("#userGuess").val("");
  });

  /*--- Validate user guess function ---*/
  function checkNumber(){
    var guess = $("#userGuess").val();
    if (isNaN(guess)){
      $("#feedback").html("<h3>Numbers only please!</h3>");
    } else if (guess.trim() === ""){
      $("#feedback").html("<h3>Make your Guess!</h3>");
    } else if (guess < 0 || guess > 100){
      $("#feedback").html("<h3>Enter a number between 1 and 100!</h3>");
    } else {
      userNumber();
    }
  }

  /*--- User guess function ---*/
  function userNumber(){
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
    if (number == guess){
      $("#feedback").html("<h3>You won!</h3>");
    }

    else if (!previousGuess) {
      if (Math.abs(number - guess) <= 5) {
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
    }

    else {
      if (Math.abs(previousGuess - number) > (Math.abs(number - guess))) {
        $("#feedback").html("<h3>You're getting warmer!</h3>");
      } else {
        $("#feedback").html("<h3>You're getting colder!</h3>");
      }
    }

    previousGuess = guess;
  }
});



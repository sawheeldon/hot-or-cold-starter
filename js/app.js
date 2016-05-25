//STEP ONE - Declare Global Variable **Random Number**

var randomNumber = generateRandomNumber (1,100);


//STEP TWO - functions declarations

//function that validates the number inputted

function val(){

}

//function show whether hot or cold

function playGame(userGuess, randomNumber){
var difference = Math.abs(userGuess - randomNumber);
}

//function guess history

function guessHistory(){

}

//function guess counter

function guessCounter(){

}

//function new game

function newGame(){

}

//STEP THREE - function usage

$(document).ready(function(){

    /*--- Display information modal box ---*/
      $(".what").click(function(){
        $(".overlay").fadeIn(1000);

      });

      /*--- Hide information modal box ---*/
      $("a.close").click(function(){
          $(".overlay").fadeOut(1000);
      });

});



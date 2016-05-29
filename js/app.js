//STEP ONE - Declare Global Variable **Random Number**

var randomNumber = generateRandomNumber(1, 100);
var counter = 0;
var oldGuess = 0;
//STEP TWO - functions declarations

// Function to generate the random number
function generateRandomNumber(min, max) {
    //Returns a random integer between min (included) and max (included); Math.floor() will give you a non-uniform distribution!
    //random number generator details can be found here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}


//function that validates the number inputted

function validateInput(guessedNumber) {
    //alert("Here");
    var userInputCorrectFlag = true;

    while (guessedNumber.length < 1) {
        alert("Please enter 1 or more digit.");
        userInputCorrectFlag = false;
    }
    while (guessedNumber.indexOf(' ') > 0) {
        alert("Please try with no spacing, just enter a number.");
        userInputCorrectFlag = false;
    }
    while (Math.floor(guessedNumber) != guessedNumber) {
        alert("Your upper limit was not a number, please try again.");
        userInputCorrectFlag = false;
    }

    if (userInputCorrectFlag = true) {
        var newGuess = guessedNumber;
        playGame(guessedNumber);
        guessHistory(guessedNumber);
        counter++;
        guessCounter(counter);
        if (oldGuess > 0) {
            relativeFeedback(randomNumber, oldGuess, newGuess);
        }
        oldGuess = newGuess;
    }
}

//function show whether hot or cold

function playGame(guessedNumber) {
    var difference = Math.abs(guessedNumber - randomNumber);
    if (difference >= 50) {
        $('#feedback').text('Ice Cold');
    } else if (difference >= 40) {
        $('#feedback').text('Cold');
    } else if (difference >= 30) {
        $('#feedback').text('Chilly');
    } else if (difference >= 20) {
        $('#feedback').text('Warm');
    } else if (difference >= 1 && difference <= 10) {
        $('#feedback').text('Very Warm');
    } else {
        $('#feedback').text('You Won Yay!!!');
    }
}

//function guess history

function guessHistory(guessedNumber) {
    $('#guessList').append('<li>' + guessedNumber + '</li>');
}

//function guess counter

function guessCounter(counter) {
    $('#count').text(counter);
}
//feedback
function relativeFeedback(randomNumber, oldGuess, newGuess) {
    alert("Working");
    var oldDiff = Math.abs(parseInt(randomNumber) - parseInt(oldGuess));
    var newDiff = Math.abs(parseInt(randomNumber) - parseInt(newGuess));
    if (newDiff > oldDiff) {
        $('#relative-feedback').text('You are colder than the last guess!');
    } else if (newDiff === oldDiff) {
        $('#relative-feedback').text('You are as far as your previous guess!');
    } else {
        $('#relative-feedback').text('You are hotter than the last guess!');
    }
}
//function new game

function newGame() {
    document.location.reload(true);
}

//STEP THREE - function usage

$(document).ready(function () {

    $('#guessButton').on('click', function () {

        var guessedNumber = $('#userGuess').val();
        validateInput(guessedNumber);
        $('#userGuess').val('');

    });
    $(document).on('keypress', function (event) {
        //on enter
        if (event.which === 13) {
            var guessedNumber = $('#userGuess').val();
            validateInput(guessedNumber);
            $('#userGuess').val('');
        }
    });

    /*--- Display information modal box ---*/
    $(".what").click(function () {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function () {
        $(".overlay").fadeOut(1000);
    });

});

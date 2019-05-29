
var winCount = 0;
var lossCount = 0;
var guessesRemaining = 10;
var guessedLetters = [];


var alphabet =
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var randomIndex = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomIndex];

console.log(computerChoice);


document.onkeyup = function (event) {
    var userChoice = event.key;

    if (guessesRemaining < 1) {
        lossCount++;
        alert("You lost!");
        document.getElementById("lossCount").innerHTML = lossCount++;    
        guessedLetters = [];
        document.getElementById("guessedLetters").innerHTML = guessedLetters;        
        randomIndex = Math.floor(Math.random() * alphabet.length);
        computerChoice = alphabet[randomIndex];
        guessesRemaining = 10;
        document.getElementById("guessesRemaining").innerHTML = 10;
    }

    if (computerChoice === userChoice) {
        winCount++;
        alert("You won!");
        document.getElementById("winCount").innerHTML = winCount++;
        guessedLetters = [];
        document.getElementById("guessedLetters").innerHTML = guessedLetters;
        randomIndex = Math.floor(Math.random() * alphabet.length);
        computerChoice = alphabet[randomIndex];
        guessesRemaining = 10;
        document.getElementById("guessesRemaining").innerHTML = 10;
    }

    else {

        document.getElementById("guessesRemaining").innerHTML = guessesRemaining--;
        guessedLetters.push(userChoice);
        document.getElementById("guessedLetters").innerHTML = guessedLetters;
    }
}
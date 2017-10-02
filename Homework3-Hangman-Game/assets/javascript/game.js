var newWords = ["ace", "doubles", "singles", "fault", "backhand", "forehand", "serve", "volley", "love", "match", "set", "breakpoint"];

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var unsolvedWord ;  		//= newWords[Math.floor(Math.random() * newWords.length)];
var unsolvedWordSplit = [];
var unsolvedWordBlank = [];
var currentWord = document.getElementById("current-word");
var wins = document.getElementById("wins");
var remainingGuesses = document.getElementById("guesses-remaining");
var lettersGuessed = document.getElementById("guessed-letters");
var lettersGuessedArray = [];

//assigns a random word to the current unvoledWord for that round and creates an array of the word, and an array with the blank letters
function randomWord(){
	unsolvedWord = newWords[Math.floor(Math.random() * newWords.length)];
	unsolvedWordSplit = unsolvedWord.split("");
	for (i=0; i < unsolvedWordSplit.length; i++) {
		unsolvedWordBlank.push("_");
	}
	currentWord.textContent = unsolvedWordBlank.join(" ");
}

//function to check whether a letter guessed is within the word, and to replace the blanks with that letter. 
function letterCheck(key) {
	for (var i = 0; i < unsolvedWordSplit.length; i++){
		if (unsolvedWordSplit[i] === key) {
			unsolvedWordBlank[i] = key;
			
		}
		else {

		}
		currentWord.textContent = unsolvedWordBlank.join(" ");
		}
	lettersGuessedArray.push(key);
	lettersGuessed.textContent = lettersGuessedArray.join(", ");
}


document.onkeyup = function(event) {
	if (event.key === "Enter"){
		var j=10;
		randomWord();
		document.onkeyup = function(event){	
			var key = event.key
			letterCheck(key);

		}
	}
	else {

	}

}
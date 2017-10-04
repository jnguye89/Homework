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



	for (var j=0; j<letters.length; j++) {
		if (letters[j]===key){
			lettersGuessedArray.push(key);
			lettersGuessed.textContent = lettersGuessedArray.join(", ");
		}
	}	

	// Add an if statement here, that will check to see where the key is, if it retuns a -1 (not in the array), then have the guesses number go down by one



	// add a statement here to check and see if there are anymore _ values in the array. If it returns a -1, have the wins number go up by one, and alert the player that they won
	var stillBlank = unsolvedWordBlank.indexOf("_");

	if (stillBlank === -1){
		alert("You Won!");
	}

}


document.onkeyup = function(event) {
	if (event.key === "Enter"){
		randomWord();
		document.onkeyup = function(event){	
			var key = event.key
			letterCheck(key);

		}
	}
}

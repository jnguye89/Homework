var randomNumber;
var crystalOneNumber;
var crystalTwoNumber;
var crystalThreeNumber;
var crystalFourNumber;
var winsCount=0;
var lossesCount=0;
var totalScore;
var currentNumber;

//function to return random number to guess (19-120)
function randomNumberGenerator () {
	randomNumber = Math.floor(Math.random()*102)+19;
	$("#random-number").text(randomNumber);
	totalScore = 0;
	$("#total-score").text(totalScore);	
	$("#wins").text(winsCount);
	$("#losses").text(lossesCount);

}

//function to return random cystal number (1-12) and assign it value to the crystal
function randomCrystalGenerator() {
	var crystalNumber = Math.floor(Math.random()*12)+1;
	return crystalNumber;
}

function assignCrystalValue() {
	$("#crystal1").attr("crystal-value", randomCrystalGenerator());
	$("#crystal2").attr("crystal-value", randomCrystalGenerator());
	$("#crystal3").attr("crystal-value", randomCrystalGenerator());
	$("#crystal4").attr("crystal-value", randomCrystalGenerator());

}

$(document).ready(function() {

assignCrystalValue();
randomNumberGenerator();


$(".crystal").on("click", function() {
	currentNumber = parseInt($(this).attr("crystal-value"));
	totalScore = totalScore + currentNumber;
	$("#total-score").text(totalScore);

	if (totalScore === randomNumber) {
		alert("You Win!");
		winsCount = winsCount+1;
		$("#wins").text(winsCount);
		assignCrystalValue();
		randomNumberGenerator();
	}

	else if (totalScore > randomNumber) {
		alert("You Lose!");
		lossesCount = lossesCount+1;
		$("#losses").text(lossesCount);
		assignCrystalValue();
		randomNumberGenerator();


	}


// $(".crystal").on("click", function() {
// 	var crystalNumber = this.value;
// 	console.log(crystalNumber);

// })

})
})
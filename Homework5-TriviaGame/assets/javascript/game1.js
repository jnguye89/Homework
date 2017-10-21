var questionArray = [
	{
		question: "In Disney's 'Little Mermaid' what is the name of the human that Ariel falls in love with?",
		answerOne: "Prince John", 
		answerTwo: "Prince Eric", 
		answerThree: "Prince Charming", 
		answerFour: "Prince Shrek", 
		correctAnswer: "Prince Eric",
		image: "../images/AnswerOne.jpeg",
	},
	{
		question: "What is the name of the animated science fiction comedy-drama film release in 2002 bout a Hawaiian girl and her unsual pet?",
		answerOne: "Moana", 
		answerTwo: "Aloha", 
		answerThree: "Lilo & Stitch", 
		answerFour: "Surfs Up!", 
		correctAnswer: "Lilo & Stitch",
		image: "../images/AnswerTwo.png",
	},
	{
		question: "In the Disney movie 'Beauty and the Beast', what is the name of Gaston's bumbling sidekick?", 
		answerOne: "LeFou", 
		answerTwo: "Lumiere", 
		answerThree: "Belle", 
		answerFour: "Chip", 
		correctAnswer: "LeFou",
		image: "../images/AnswerThree.jpeg",
	},
	{
		question: "What was the name of the kleptomaniac monkey in the Disney movie 'Aladdin'?", 
		answerOne: "Abu", 
		answerTwo: "Genie", 
		answerThree: "Jafar", 
		answerFour: "Rajah", 
		correctAnswer: "Abu",
		image: "../images/AnswerFour.jpeg",
	},
	{
		question: "What is the name of Mickey Mouse's dog?", 
		answerOne: "Spot", 
		answerTwo: "Daisy", 
		answerThree: "Kermit", 
		answerFour: "Pluto", 
		correctAnswer: "Pluto",
		image: "../images/AnswerFive.gif",
	},
	{
		question: "In which US city was Walt Disney born?", 
		answerOne: "Anaheim, CA", 
		answerTwo: "New York, NY", 
		answerThree: "Chicago, IL", 
		answerFour: "Kissimmee, FL", 
		correctAnswer: "Chicago, IL",
		image: "../images/AnswerSix.jpg",
	},
	{
		question: "In the movie 'Lion King', what was Simba's mother's name?", 
		answerOne: "Sarabi", 
		answerTwo: "Faith", 
		answerThree: "Sahara", 
		answerFour: "Desert", 
		correctAnswer: "Sarabi", 
		image: "../images/AnswerSeven.png",
	},
	{
		question: "Which of the following names is NOT one of the 7 dwarves in 'Snow White and the Seven Dwarfs?'", 
		answerOne: "Sneezy", 
		answerTwo: "Grumpy", 
		answerThree: "Happy", 
		answerFour: "Lazy", 
		correctAnswer: "Lazy", 
		image: "../images/AnswerEight.jpeg",
	},
	{
		question: "In 'Pocahontas', what did Pocahontas see in her dream that made her believe that a change was coming?", 
		answerOne: "A spinning arrow", 
		answerTwo: "A strange cloud formation", 
		answerThree: "A hawk circling her village", 
		answerFour: "A burning blue fire", 
		correctAnswer: "A spinning arrow", 
		image: "../images/AnswerNine.png",
	},
	{
		question:"In 'Frozen', how many brothers does Hans have?", 
		answerOne: "8",
		answerTwo: "12",
		answerThree: "14",
		answerFour: "15",
		correctAnswer: "12",
		image: "../images/AnswerTen.png",
	}
]

var correctCount;
var wrongCount;
var time;

//Displays instructions and has initial button to start the quiz
$("#content").html("<h3>Instructions:</h3><p>You will have 30 seconds to answer each of the following questions. If no answer is picked within the 30 secons, the answer will be marked incorrect. Total score will be displayed at the end of the trivia questions.</p><button type='button' id='start'>Start!</button>")

$("#start").on("click", function() {
	questionDisplay(0);
	time = 30;	
	$("#timer").html("Time left: " + time + " seconds");
	var currentTimer = setInterval(timer, 1000);
	var questionTimer = setTimeout(function(){questionTimeOut(0)},30000);
});



var timer = function() {
	if (time > 0) {
		time --;
		$("#timer").html("Time left: " + time + " seconds");
	}
	else if (time = 0){
		$("#timer").html("Time over!");
	}
	else {
		$("#timer").html("Time over!");
	}
}

var questionTimeOut = function(count) {
	$("#timer").html("Time over!");
	$("#content").html("You ran out of time! The correct answer was: <br><br>" + questionArray[count].correctAnswer + "<br><br><img src='" + questionArray[count].image +"' alt='Prince Eric!'>");
};


var questionDisplay = function(count){
	
	var a = $("<div>");
	a.append(questionArray[count].question + "<br><br>");
	a.append("<input type='radio' class='rbutton' name='answer' value='" + questionArray[count].answerOne + "'>   " + questionArray[count].answerOne + "<br>");
	a.append("<input type='radio' class='rbutton' name='answer' value='" + questionArray[count].answerTwo + "'>   " + questionArray[count].answerTwo + "<br>");
	a.append("<input type='radio' class='rbutton' name='answer' value='" + questionArray[count].answerThree + "'>   " + questionArray[count].answerThree + "<br>");
	a.append("<input type='radio' class='rbutton' name='answer' value='" + questionArray[count].answerFour + "'>   " + questionArray[count].answerFour + "<br><br>");
	a.append("<button type='button' id='submit'>Final Answer!</button");
	$("#content").html(a);

};




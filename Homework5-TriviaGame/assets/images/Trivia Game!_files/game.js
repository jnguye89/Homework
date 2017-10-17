var question = [
	["In Disney's 'Little Mermaid' what is the name of the human that Ariel falls in love with?", "Prince John", "Prince Eric", "Prince Charming", "Prince Shrek", 2, "../images/AnswerOne.jpeg"],
	["What is the name of the animated science fiction comedy-drama film release in 2002 bout a Hawaiian girl and her unsual pet?", "Moana", "Aloha", "Lilo & Stitch", "Surfs Up!", 3, "../images/AnswerTwo.png"],
	["In the Disney movie 'Beauty and the Beast', what is the name of Gaston's bumbling sidekick?", "LeFou", "Lumiere", "Belle", "Chip", 1, "../images/AnswerThree.jpeg"],
	["What was the name of the kleptomaniac monkey in the Disney movie 'Aladdin'?", "Abu", "Genie", "Jafar", "Rajah", 1, "../images/AnswerFour.jpeg"],
	["What is the name of Mickey Mouse's dog?", "Spot", "Daisy", "Kermit", "Pluto", 4,"../images/AnswerFive.gif"],
	["In which US city was Walt Disney born?", "Anaheim, CA", "New York, NY", "Chicago, IL", "Kissimmee, FL", 3, "../images/AnswerSix.jpg"],
	["In the movie 'Lion King', what was Simba's mother's name?", "Sarabi", "Faith", "Sahara", "Desert", 1, "../images/AnswerSeven.png"],
	["Which of the following names is NOT one of the 7 dwarves in 'Snow White and the Seven Dwarfs?'", "Sneezy", "Grumpy", "Happy", "Lazy", 4, "../images/AnswerEight.jpeg"],
	["In 'Pocahontas', what did Pocahontas see in her dream that made her believe that a change was coming?", "A spinning arrow", "A strange cloud formation", "A hawk circling her village", "A burning blue fire", 1, "../images/AnswerNine.png"],
	["In 'Frozen', how many brothers does Hans have?", 8,12,14,15,4,"../images/AnswerTen.png"],
]


$("#content").html("<h3>Instructions:</h3><p>You will have 30 seconds to answer each of the following questions. If no answer is picked within the 30 secons, the answer will be marked incorrect. Total score will be displayed at the end of the trivia questions.</p><button type='button' id='start'>Start!</button>")

$("#start").click(function() {
	$("#content").html("");
	for (var k=0; k<10; k++){
		questionDisplay(k);
		$(".answer").on("click", function() {
			answer = $(this).attr("answer-number");
			var correctAnswer = functions(k);
			if (answer == correctAnswer) {
				alert("You were right!");
			}		
			else {
				alert("You were wrong!");a
			}	

			//console.log($(this).attr("answer-number"));





		})

	}
	
});

var functions = function(k) {
	return question[k][5];
}

var reset = function () {


}

var questionDisplay = function(count) {
	var currentQuestion = question[count][0];
	$("#content").html("<div id='question'>" + currentQuestion + "</div>");
	for (var i=1; i<5; i++) {
		var answerDisplay = question[count][i];
		$("#content").append("<div class='answer'>" + answerDisplay + "</div>");
		$(".answer").attr("answer-number", i);
	}
}

var timeConverter = function(t) {
	 //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}

 
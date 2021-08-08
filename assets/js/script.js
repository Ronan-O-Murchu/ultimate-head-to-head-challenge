document.addEventListener("DOMContentLoaded", function() {
	let buttons = document.getElementsByTagName("button");
	for (let button of buttons) {
		button.addEventListener("click", function() {
			if (this.getAttribute("data-type") === "submit") {
				checkAnswer();
			} else {
				let gameType = this.getAttribute("data-type");
				runGame(gameType);
			}
        });
    }

    document.getElementById("answer-box").addEventListener("keydown", function(event) {
    	if (event.key === "Enter") {
    		checkAnswer();
    	}
    })

    runGame("addition");
});






function loadGame () {

}






function startTimer() {
	var timeleft = 30;
	var downloadTimer = setInterval(function(){
	if(timeleft <= 0){
	clearInterval(downloadTimer);
	document.getElementById("countdown-timer").innerHTML = "Times Up";
	} else {
	document.getElementById("countdown-timer").innerHTML = timeleft;
	}
	timeleft -= 1;
	}, 1000);
}





/** This code compares the players selection and the computers selection * */
function checkAnswer() {let userChoice = document.getElementById("rockChoosenIconPlayer");
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
    if ('userChoice' === 'cpuChoice') {
	alert("It's a draw.");
	incrementPlayerScore();
    } else if ('userChoice' !== 'cpuChoice') {
   	alert("You Won!");
   	incrementPlayerScore();
    } else {
   	alert(`Awwww.... you lost`);
   	incrementCpuScore();
    }

}







/** This code displays the computers selection on the right hand side of the screen * */
function showCpuChoiceRock() {
   	document.getElementById('rockChoosenIconCpu').style.display = "block";
	hideCpuChoicePaper();
	hideCpuChoiceScissors();
}

function showCpuChoicePaper() {
   	document.getElementById('paperChoosenIconCpu').style.display = "block";
	hideCpuChoiceRock();
	hideCpuChoiceScissors();
}

function showCpuChoiceScissors() {
   	document.getElementById('scissorsChoosenIconCpu').style.display = "block";
	hideCpuChoiceRock();
	hideCpuChoicePaper();
}





/** This code generates a random selcetion for the computer to display * */
function cpuSelection() {
    let cpuChoice = Math.floor(Math.random()*3);
    if (cpuChoice === 1) {
    return showCpuChoiceRock()
    } else if (cpuChoice === 2) {
   	return showCpuChoicePaper()
    } else if (cpuChoice === 3) {
    return  showCpuChoiceScissors()
    } else {
    return "Make a selection to begin the game";
    }
}





/** This code displays the players selection on the left hand side of the screen * */
function showPlayerChoiceRock() {
   	document.getElementById('rockChoosenIconPlayer').style.display = "block";
	hidePlayerChoicePaper();
	hidePlayerChoiceScissors();
	cpuSelection();
	}

function showPlayerChoicePaper() {
   	document.getElementById('paperChoosenIconPlayer').style.display = "block";
	hidePlayerChoiceRock();
	hidePlayerChoiceScissors();
	cpuSelection();
} 

function showPlayerChoiceScissors() {
   	document.getElementById('scissorsChoosenIconPlayer').style.display = "block";
	hidePlayerChoiceRock();
	hidePlayerChoicePaper();
	cpuSelection ();
}






/** This code hides the players selection on the left hand side of the screen * */
function hidePlayerChoiceRock() {
   document.getElementById('rockChoosenIconPlayer').style.display = "none";
}

function hidePlayerChoicePaper() {
   document.getElementById('paperChoosenIconPlayer').style.display = "none";
}

function hidePlayerChoiceScissors() {
   document.getElementById('scissorsChoosenIconPlayer').style.display = "none";
}






/** This code hides the computers selection on the right hand side of the screen * */
function hideCpuChoiceRock() {
   document.getElementById('rockChoosenIconCpu').style.display = "none";
}

function hideCpuChoicePaper() {
   document.getElementById('paperChoosenIconCpu').style.display = "none";
}

function hideCpuChoiceScissors() {
   document.getElementById('scissorsChoosenIconCpu').style.display = "none";
}












/** This code compares the players selection and the computers selection * */
if (string1 === cpuSelection()) {
  console.log("Matching strings!");
}
else {
  console.log("Strings do not match");































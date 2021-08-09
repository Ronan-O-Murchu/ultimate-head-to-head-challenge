function beginGameButton () {
	hideBeginButton();
	showResetButton();
	startTimer();
}






/** This code begins the countdown timer when "Begin" is clicked * */
function startTimer() {
	var timeleft = 59;
	var downloadTimer = setInterval(function(){
	if(timeleft <= 0){
	clearInterval(downloadTimer);
	document.getElementById("countdown-timer").innerHTML = "Times Up";
	} else {
	document.getElementById("countdown-timer").innerHTML = '0' + ':' + timeleft;
	}
	timeleft -= 1;
	}, 1000);
}








function checkAnswer() {
	
	// alert('This is working!')

/** This code targets the display element choices * */
/** This code creates draw statements * */
    if ('playerRock' === 'cpuRock') {
      return alert("It's a draw.");
    } else if ('playerPaper' === 'cpuPaper') {
      return alert("It's a draw.");
    } else if ('playerScissors' === 'cpuScissors') {
      return alert("It's a draw.");
    } 








/** This code creates win statements * */
    if ('playerRock' === 'cpuRock') {
        incrementPlayerScore ();
        return alert("You win");
    } else if ('playerScissors') {
        incrementPlayerScore ();
        return alert("You win");
    } else if ('playerPaper') {
        incrementPlayerScore ();
        return alert("You win");
    }








/** This code creates lose statements * */
    else if ('playerScissors') {
        incrementCpuScore ();
        return alert("You win");
    } else if ('playerPaper') {
        incrementCpuScore ();
        return alert("You win");
   	} else if ('playerRock') {
        incrementCpuScore ();
        return alert("You win");
   	} 








/** This code creates a warning message if something dose not work * */
   	else {
        alert(`Something is broken`);
    }

}








// function checkResult() {
// 	alert('This is working!')
// }








function incrementPlayerScore () {

/** This code will add 1 point to the players score each time the player wins a round * */
	let playerOldScore = parseInt(document.getElementById('player-score').innerText);
	document.getElementById('player-score').innerText = ++playerOldScore;

}

function incrementCpuScore () {

/** This code will add 1 point to the computers score each time the computer wins a round * */
	let cpuOldScore = parseInt(document.getElementById('computer-score').innerText);
	document.getElementById('computer-score').innerText = ++cpuOldScore;

}





/** This code generates a random selcetion for the computer to display * */
function cpuSelection() {
    let cpuChoice = Math.floor(Math.random()*6);
    if (cpuChoice === 0) {
    return showCpuChoiceRock();
    } else if (cpuChoice === 1) {

   	return showCpuChoicePaper();
    } else if (cpuChoice === 2) {
    return  showCpuChoiceScissors();
    } else if (cpuChoice === 3) {
    return  showCpuChoiceSpoc();
    } else if (cpuChoice === 4) {
    return  showCpuChoiceLizard();
    } else {
    return "Make a selection to begin the game";
    }
}





/** This code displays the players selection on the left hand side of the screen * */
function showPlayerChoiceRock() {
   	document.getElementById('rockChoosenIconPlayer').style.display = "block";
	hidePlayerChoicePaper();
	hidePlayerChoiceScissors();
	// hidePlayerChoiceSpoc();
	// hidePlayerChoiceLizard();
	cpuSelection();
	}

function showPlayerChoicePaper() {
   	document.getElementById('paperChoosenIconPlayer').style.display = "block";
	hidePlayerChoiceRock();
	hidePlayerChoiceScissors();
	// hidePlayerChoiceSpoc();
	// hidePlayerChoiceLizard();
	cpuSelection();
} 

function showPlayerChoiceScissors() {
   	document.getElementById('scissorsChoosenIconPlayer').style.display = "block";
	hidePlayerChoiceRock();
	hidePlayerChoicePaper();
	// hidePlayerChoiceSpoc();
	// hidePlayerChoiceLizard();
	cpuSelection ();
}

// function showPlayerChoiceSpoc() {
//    	document.getElementById('scissorsChoosenIconPlayer').style.display = "block";
// 	hidePlayerChoiceRock();
// 	hidePlayerChoicePaper();
// 	hidePlayerChoiceScissors();
// 	hidePlayerChoiceLizard();
// 	cpuSelection ();
// }

// function showPlayerChoiceLizard() {
//    	document.getElementById('scissorsChoosenIconPlayer').style.display = "block";
// 	hidePlayerChoiceRock();
// 	hidePlayerChoicePaper();
// 	hidePlayerChoiceScissors();
// 	hidePlayerChoiceSpoc();
// 	cpuSelection ();
// }






/** This code displays the computers selection on the right hand side of the screen * */
function showCpuChoiceRock() {
   	document.getElementById('rockChoosenIconCpu').style.display = "block";
	hideCpuChoicePaper();
	hideCpuChoiceScissors();
	// hideCpuChoiceSpoc();
	// hideCpuChoiceLizard();
}

function showCpuChoicePaper() {
   	document.getElementById('paperChoosenIconCpu').style.display = "block";
	hideCpuChoiceRock();
	hideCpuChoiceScissors();
	// hideCpuChoiceSpoc();
	// hideCpuChoiceLizard();
}

function showCpuChoiceScissors() {
   	document.getElementById('scissorsChoosenIconCpu').style.display = "block";
	hideCpuChoiceRock();
	hideCpuChoicePaper();
	// hideCpuChoiceSpoc();
	// hideCpuChoiceLizard();
}

// function showCpuChoiceSpoc() {
//    	document.getElementById('spocChoosenIconCpu').style.display = "block";
// 	hideCpuChoiceRock();
// 	hideCpuChoicePaper();
// 	hideCpuChoiceScissors();
// 	hideCpuChoiceLizard();
// }

// function showCpuChoiceLizard() {
//    	document.getElementById('lizardChoosenIconCpu').style.display = "block";
// 	hideCpuChoiceRock();
// 	hideCpuChoicePaper();
// 	hideCpuChoiceScissors();
// 	hideCpuChoiceSpoc();
// }





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

// function hidePlayerChoiceSpoc() {
//    document.getElementById('spocChoosenIconPlayer').style.display = "none";
// }

// function hidePlayerChoiceLizard() {
//    document.getElementById('lizardChoosenIconPlayer').style.display = "none";
// }

 




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

// function hideCpuChoiceSpoc() {
//    document.getElementById('spocChoosenIconCpu').style.display = "none";
// }

// function hideCpuChoiceLizard() {
//    document.getElementById('lizardChoosenIconCpu').style.display = "none";
// }

function hideBeginButton() {
   document.getElementById('begin-image').style.display = "none";
}

function showResetButton() {
   	document.getElementById('reset-image').style.display = "block";
}






























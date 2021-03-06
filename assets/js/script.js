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






/** This code generates a random selcetion for the computer to display * */
function cpuSelection() {

    let cpuChoice = Math.floor(Math.random()*3); 

    if (cpuChoice === 0) {
    	showCpuChoiceRock();
    	return 'rock';
    } else if (cpuChoice === 1) {
    	showCpuChoicePaper();
    	return 'paper';
    } else if (cpuChoice === 2) {
    	showCpuChoiceScissors();
    	return 'scissors';
    } else {
    return "Make a selection to begin the game";
    }
}






/** This code compares the players input and the computers input and determines a winner * */
function checkAnswer(playerSel, cpuSel) {
	if (playerSel === cpuSel) {
alert("It's a tie");
	} if (playerSel == 'paper'){
		if(cpuSel == 'rock'){
			alert('Well done, you won this round!');
			incrementPlayerScore ();
		}
	} 	if (playerSel == 'scissors'){
		if(cpuSel == 'paper'){
			alert('Well done, you won this round!');
			incrementPlayerScore ();
		}
	} 	if (playerSel == 'rock'){
			if(cpuSel == 'scissors'){
			alert('Well done, you won this round!');
			incrementPlayerScore ();
		}
	}	if (playerSel == 'rock'){
		if(cpuSel == 'paper'){
			alert('Awww, you lost this round!');
			incrementCpuScore ();
		}
	}	if (playerSel == 'scissors'){
		if(cpuSel == 'rock'){
			alert('Awww, you lost this round!');
			incrementCpuScore ();
		}
	}	if (playerSel == 'paper'){
		if(cpuSel == 'scissors'){
			alert('Awww, you lost this round!');
			incrementCpuScore ();
	}
}
}






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






/** This code displays the players selection on the left hand side of the screen * */
function showPlayerChoiceRock(playerRock){
	document.getElementById('rockChoosenIconPlayer').style.display = "block";
	hidePlayerChoicePaper();
	hidePlayerChoiceScissors();
	hideBeginButton();
	showResetButton();
	cpuSel = cpuSelection();
	checkAnswer('rock', cpuSel);
	}

function showPlayerChoicePaper(playerPaper){
	document.getElementById('paperChoosenIconPlayer').style.display = "block";
	hidePlayerChoiceRock();
	hidePlayerChoiceScissors();
	hideBeginButton();
	showResetButton();
	cpuSel = cpuSelection();
	checkAnswer('paper', cpuSel);
} 

function showPlayerChoiceScissors(playerScissors){
	document.getElementById('scissorsChoosenIconPlayer').style.display = "block";
	hidePlayerChoiceRock();
	hidePlayerChoicePaper();
	hideBeginButton();
	showResetButton();
	cpuSel = cpuSelection();
	checkAnswer('scissors', cpuSel);
}






/** This code displays the computers selection on the right hand side of the screen * */
function showCpuChoiceRock(cpuRock){
	document.getElementById('rockChoosenIconCpu').style.display = "block";
	hideCpuChoicePaper();
	hideCpuChoiceScissors();
}

function showCpuChoicePaper(cpuPaper){
	document.getElementById('paperChoosenIconCpu').style.display = "block";
	hideCpuChoiceRock();
	hideCpuChoiceScissors();
}

function showCpuChoiceScissors(cpuScissors){
document.getElementById('scissorsChoosenIconCpu').style.display = "block";
	hideCpuChoiceRock();
	hideCpuChoicePaper();
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






function hideBeginButton() {
   document.getElementById('begin-image').style.display = "none";
}

function showResetButton() {
   	document.getElementById('reset-image').style.display = "block";
}
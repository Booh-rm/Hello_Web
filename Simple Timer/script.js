var timerInterval;
var seconds = 0;
var minutes = 0;
var hours = 0;
var timerDisplay = document.getElementById("timer");

function startTimer() {
	timerInterval = setInterval(updateTimer, 1000);
	document.getElementById("startButton").disabled = true;
	document.getElementById("resetButton").disabled = true;
}

function stopTimer() {
	clearInterval(timerInterval);
	document.getElementById("startButton").disabled = false;
	document.getElementById("resetButton").disabled = false;
}

function resetTimer() {
	stopTimer();
	seconds = 0;
	minutes = 0;
	hours = 0;
	timerDisplay.textContent = "00:00:00";
}

function updateTimer() {
	seconds++;

	if (seconds == 60) {
		seconds = 0;
		minutes++;

		if (minutes == 60) {
			minutes = 0;
			hours++;
		}
	}

	var timeString = padNumber(hours) + ":" + padNumber(minutes) + ":" + padNumber(seconds);
	timerDisplay.textContent = timeString;
}

function padNumber(number) {
	if (number < 10) {
		return "0" + number;
	} else {
		return number;
	}
}

document.getElementById("startButton").addEventListener("click", startTimer);
document.getElementById("stopButton").addEventListener("click", stopTimer);
document.getElementById("resetButton").addEventListener("click", resetTimer);

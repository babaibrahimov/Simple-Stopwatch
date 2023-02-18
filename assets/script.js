let startTime;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
  if (!timerInterval) { // check if timer is already running
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      document.getElementById("display").textContent = formatTime(elapsedTime);
    }, 10);
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null; // reset timer interval
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null; // reset timer interval
  elapsedTime = 0;
  document.getElementById("display").textContent = "00:00:00:00";
}

function formatTime(time) {
  const hours = Math.floor(time / 3600000).toString().padStart(2, "0");
  const minutes = Math.floor((time / 60000) % 60).toString().padStart(2, "0");
  const seconds = Math.floor((time / 1000) % 60).toString().padStart(2, "0");
  const milliseconds = Math.floor((time % 1000) / 10).toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);


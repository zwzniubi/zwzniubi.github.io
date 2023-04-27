const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const timerDisplay = document.getElementById("timer");

let minutes = 25;
let seconds = 0;
let interval;

startBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(countdown, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  minutes = 25;
  seconds = 0;
  updateDisplay();
});

function countdown() {
  if (seconds === 0 && minutes === 0) {
    clearInterval(interval);
  } else if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }
  updateDisplay();
}

function updateDisplay() {
  const formattedSeconds = seconds.toString().padStart(2, "0");
  timerDisplay.textContent = `${minutes}:${formattedSeconds}`;
}


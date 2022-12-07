let time = 1500;
let isRunning = false;

function startTimer() {
  if (isRunning) return;
  isRunning = true;

  interval = setInterval(() => {
    time--;
    clock.innerHTML = formatTime(time);

    if (time === 0) {
      clearInterval(interval);
      isRunning = false;
    }
  }, 1000);
}

function stopTimer() {
  if (!isRunning) return;
  clearInterval(interval);
  isRunning = false;
}

function resetTimer() {
  stopTimer();
  time = 1500;
  clock.innerHTML = formatTime(time);
}

function handleShortBreak() {
  stopTimer();
  time = 300;
  clock.innerHTML = formatTime(time);
}

function handleLongBreak() {
  stopTimer();
  time = 900;
  clock.innerHTML = formatTime(time);
}
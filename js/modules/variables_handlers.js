const studyButton = document.querySelector('.timer__study');
const shortBreakButton = document.querySelector('.timer__short-break');
const longBreakButton = document.querySelector('.timer__long-break');
const clock = document.querySelector('.timer__clock');
const startButton = document.querySelector('.timer__start');
const stopButton = document.querySelector('.timer__stop');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
studyButton.addEventListener('click', resetTimer);
shortBreakButton.addEventListener('click', handleShortBreak);
longBreakButton.addEventListener('click', handleLongBreak);
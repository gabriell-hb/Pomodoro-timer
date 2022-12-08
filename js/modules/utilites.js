// dev.to/walternascimentobarroso/creating-a-timer-with-javascript-8b7
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }

  return `${minutes}:${seconds}`;
}


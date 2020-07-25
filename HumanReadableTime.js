function humanReadable(seconds) {
  let hours = 0;
  let minutes = 0;
  while (seconds > 59) {
    if (seconds >= 3600) {
      seconds -= 3600;
      hours++;
    } else if (seconds >= 60) {
      seconds -= 60;
      minutes++;
    }
  }
  if(hours <= 9)
  hours = "0" + hours;
  if(minutes <= 9)
  minutes = "0" + minutes;
  if(seconds <= 9)
  seconds = "0" + seconds;
  return `${hours}:${minutes}:${seconds}`;
}
console.log(humanReadable(10));

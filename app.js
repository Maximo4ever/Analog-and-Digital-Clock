const $hoursEl = document.getElementById("hours");
const $minutesEl = document.getElementById("minutes");
const $secondsEl = document.getElementById("seconds");

setInterval(() => {
  const day = new Date();
  const hours = day.getHours() * 30;
  const minutes = day.getMinutes();
  const seconds = day.getSeconds();
  
  $hoursEl.style.transform = `rotateZ(${hours+(minutes/12)}deg)`;
  $minutesEl.style.transform = `rotateZ(${minutes}deg)`
  $secondsEl.style.transform = `rotateZ(${seconds}deg)`
}, 1000);
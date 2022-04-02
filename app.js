const $hoursEl = document.getElementById("hours");
const $minutesEl = document.getElementById("minutes");
const $secondsEl = document.getElementById("seconds");

const $hoursDigitalEl = document.getElementById("digitalHour");
const $minutesDigitalEl = document.getElementById("digitalMinutes");
const $secondsDigitalEl = document.getElementById("digitalSeconds");
const $AmPm = document.getElementById("AmPm")

setInterval(() => {
  const day = new Date();
  let hours = day.getHours();
  let minutes = day.getMinutes();
  let seconds = day.getSeconds();
  let am = hours >= 12 ? "PM" : "AM"
  
  // Digital clock
  if (hours > 12) hours = hours - 12
  $hoursDigitalEl.innerHTML = hours < 10 ? "0"+hours : hours
  $minutesDigitalEl.innerHTML = minutes < 10 ? "0"+minutes : minutes
  $secondsDigitalEl.innerHTML = seconds < 10 ? "0"+seconds : seconds
  $AmPm.innerHTML = am

  // Analog clock
  hours = hours * 30;
  minutes = minutes * 6;
  seconds = seconds * 6;
  $hoursEl.style.transform = `rotateZ(${hours+(minutes/12)}deg)`;
  $minutesEl.style.transform = `rotateZ(${minutes}deg)`
  $secondsEl.style.transform = `rotateZ(${seconds}deg)`

}, 1000);
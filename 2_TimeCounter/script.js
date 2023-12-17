const containerEl = document.querySelector(".container");
const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");

setInterval(() => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  hoursEl.innerText = String(hours).length == 1 ? `0${hours}` : hours;
  minutesEl.innerText = String(minutes).length == 1 ? `0${minutes}` : minutes;
  secondsEl.innerText = String(seconds).length == 1 ? `0${seconds}` : seconds;
}, 1000);

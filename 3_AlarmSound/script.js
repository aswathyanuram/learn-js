const containerEl = document.querySelector(".container");
const numberEl = document.querySelector(".number");
const buttonEl = document.querySelector(".button");
const countdownEl = document.querySelector(".countdown");

numberEl.value = "5";
let tmpValue = 0;

buttonEl.addEventListener("click", () => {
  let userNumber = numberEl.value;
  countdownEl.innerText = userNumber;
  tmpValue = userNumber;
  let intervalRef = setInterval(() => {
    if (Number(tmpValue) != 0) {
      tmpValue = tmpValue - 1;
      countdownEl.innerText = tmpValue;
    } else {
      const audio = new Audio("alarm.wav");
      audio.play();
      clearInterval(intervalRef);
    }
  }, 1000);
});

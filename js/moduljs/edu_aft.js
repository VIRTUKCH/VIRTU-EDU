const todaysGoal = document.querySelector(".todays-goal");
const todaysQues = document.querySelector(".todays-ques");
const lastTime = document.getElementById("last_time");
const startNewBtn = document.querySelector(".start:last-child .btn");

const savedGoal = localStorage.getItem("goal");
const savedTime = localStorage.getItem("time");
const savedQues = localStorage.getItem("ques");
const timeOrigin = localStorage.getItem("timeOrigin");

const timeCalc = (timeOrigin - savedTime) / 60000;

todaysGoal.textContent = savedGoal;
todaysQues.textContent = savedQues;

lastTime.textContent = Math.floor(timeCalc);

function onClick() {
  localStorage.clear();
}

startNewBtn.addEventListener("click", onClick);

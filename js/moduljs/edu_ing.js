const todaysGoal = document.querySelector(".todays-goal");
const todaysQues = document.querySelector(".todays-ques");
const finishStudy = document.querySelector(".start .btn");

const savedGoal = localStorage.getItem("goal");
const savedTime = localStorage.getItem("time");
const savedQues = localStorage.getItem("ques");

todaysGoal.textContent = savedGoal;
todaysQues.textContent = savedQues;

const timeMin = savedTime * 60000;

const timer = document.getElementById("timer");
let time = timeMin;
let sec = 60;

function TIMER() {
  PLAYTIME = setInterval(function () {
    time = time - 1000;
    min = time / 60000;

    if (sec > 0) {
      sec = sec - 1;
      timer.value = `${Math.floor(min)} : ${sec}`;
    }

    if (sec === 0) {
      sec = 60;
      timer.value = `${Math.floor(min)} : 00`;
    }

    localStorage.setItem("time", time);
  }, 1000);
}

TIMER();

setTimeout(function () {
  clearInterval(PLAYTIME);
  finishStudy.click();
}, timeMin);

// function saveLastTime() {
//   localStorage.setItem("time", timer.value);
// }

// finishStudy.addEventListener("click", saveLastTime);

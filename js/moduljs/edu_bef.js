const formGoal = document.querySelector(".form__goal");
const inputGoal = formGoal.querySelector("input");
const formTime = document.querySelector(".form__time");
const inputTime = formTime.querySelector("input");
const formQues = document.querySelector(".form__question");
const inputQues = formQues.querySelector("input");
const formAnsw = document.querySelector(".form__answer");
const inputAnsw = formAnsw.querySelector("input");

function onGoalSubmit(event) {
  event.preventDefault();
  localStorage.setItem("goal", inputGoal.value);
  const savedGaol = localStorage.getItem("goal");
  inputGoal.value = "";
}
function onTimeSubmit(event) {
  event.preventDefault();
  localStorage.setItem("time", inputTime.value);
  localStorage.setItem("timeOrigin", inputTime.value * 60000);
  const savedTime = localStorage.getItem("time");
  inputTime.value = "";
}
function onQuesSubmit(event) {
  event.preventDefault();
  localStorage.setItem("ques", inputQues.value);
  const savedQues = localStorage.getItem("ques");
  inputQues.value = "";
}
function onAnswSubmit(event) {
  event.preventDefault();
  localStorage.setItem("answ", inputAnsw.value);
  const savedAnsw = localStorage.getItem("answ");
  inputAnsw.value = "";
}

formGoal.addEventListener("submit", onGoalSubmit);
formTime.addEventListener("submit", onTimeSubmit);
formQues.addEventListener("submit", onQuesSubmit);
formAnsw.addEventListener("submit", onAnswSubmit);

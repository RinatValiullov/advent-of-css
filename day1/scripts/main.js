const timer = document.querySelector(".timer");
const power = document.querySelector(".power");
const settings = document.querySelector(".settings");

const getSeconds = () => {
  let matchTimeStr = timer.innerHTML.trim().match(/\d+/g);
  let matchTimeNum = matchTimeStr.map((digit) => parseInt(digit, 10));
  let seconds = matchTimeNum
    .map((elem, idx) => {
      let sec = 0;
      if (idx === 0) {
        sec += elem * 60;
      } else if (idx === 1) {
        sec += elem;
      }
      return sec;
    })
    .reduce((acc, curr) => acc + curr, 0);

  return seconds;
};

power.addEventListener("click", getSeconds);

const inputTime = document.querySelector(".inputTime");

settings.addEventListener("click", (event) => {
  inputTime.classList.toggle("active");
});

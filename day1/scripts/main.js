const timer = document.querySelector('.timer');
const power = document.querySelector('.power');
const settings = document.querySelector('.settings');

const inputTime = document.querySelector('.inputTime');
const setTime = document.querySelector('.setTime');

const getSeconds = (data) => {
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

const countTime = () => {
  timeInSeconds = getSeconds();

  let timerId = setInterval(function () {
    let seconds = timeInSeconds % 60;
    let minutes = (timeInSeconds / 60) % 60;

    if (timeInSeconds <= 0) {
      clearInterval(timerId);
      timer.innerHTML = `<span class="elapsed">Time elapsed.<br>Update the page.</span>`;
    } else {
      if (seconds.toString().length < 2) {
        seconds = `0${seconds}`;
      }
      let strTimer = `0${Math.trunc(minutes)}:${seconds}`;
      timer.innerHTML = strTimer;
    }

    --timeInSeconds;
  }, 1000);
};

power.addEventListener('click', countTime);

document.addEventListener('click', (event) => {
  if (event.target.className === 'settings') {
    inputTime.classList.add('active');
  } else if (
    event.target.className === 'close' &&
    event.target.className !== 'inputTime'
  ) {
    inputTime.classList.remove('active');
  }
});

setTime.addEventListener('change', (event) => {
  let newTime = parseInt(event.target.value, 10);

  if (newTime.toString().length < 2) {
    timer.innerHTML = `<span>0${newTime}:00</span>`;
  } else {
    timer.innerHTML = `<span>${newTime}:00</span>`;
  }

  setTime.value = '';
  inputTime.classList.remove('active');
});

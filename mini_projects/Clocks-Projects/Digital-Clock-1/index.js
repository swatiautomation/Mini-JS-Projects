const time = document.querySelector('#time');
const timeFormat = document.querySelector('#timeFormat');

const showTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  //let sec = seconds < 10 ? `0${seconds}` : seconds;
  const sec = seconds.toString().padStart(2, '0');
  const min = minutes.toString().padStart(2, '0');
  const hr = hours.toString().padStart(2, '0');

  time.innerHTML = `${hr} : ${min} : ${sec} `;
  timeFormat.innerHTML = ampm;
};

document.addEventListener('DOMContentLoaded', () => {
  setInterval(showTime, 1000);
});

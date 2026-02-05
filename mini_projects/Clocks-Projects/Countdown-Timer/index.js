const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

countdown = (targetDate) => {
  setInterval(() => {
    updateCounter(targetDate);
  }, 1000);
};

const targetDate = new Date('March 23, 2026 00:59:59');
countdown(targetDate);

updateCounter = (targetDate) => {
  const currentDate = new Date();
  const sec = Math.floor((targetDate - currentDate) / 1000) % 60;
  const mins = Math.floor((targetDate - currentDate) / 1000 / 60) % 60;
  const hrs = Math.floor((targetDate - currentDate) / 1000 / 60 / 60) % 24;
  const dys = Math.floor((targetDate - currentDate) / 1000 / 60 / 60 / 24);

  // days.innerHTML = dys < 10 ? '0' + dys : dys;
  days.innerHTML = dys.toString().padStart(2, '0');
  console.log(days.innerHTML);
  hours.innerHTML = hrs.toString().padStart(2, '0');
  minutes.innerHTML = mins.toString().padStart(2, '0');
  seconds.innerHTML = sec.toString().padStart(2, '0');
};

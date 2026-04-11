const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const targetDate = new Date('Dec 25, 2026 00:59:59');

countdown = (targetDate) => {
  setInterval(() => {
    updateCounter(targetDate);
  }, 1000);
};

countdown(targetDate);

updateCounter = (targetDate) => {
  const currentDate = new Date();
  const totalSecs = (targetDate - currentDate) / 1000;

  const dys = Math.floor(totalSecs / 60 / 60 / 24);
  const hrs = Math.floor(totalSecs / 60 / 60) % 24;
  const mins = Math.floor(totalSecs / 60) % 60;
  const sec = Math.floor(totalSecs % 60);

  // days.innerHTML = dys < 10 ? `0{dys}` : dys;
  days.innerHTML = dys.toString().padStart(2, '0');
  hours.innerHTML = hrs.toString().padStart(2, '0');
  minutes.innerHTML = mins.toString().padStart(2, '0');
  seconds.innerHTML = sec.toString().padStart(2, '0');
};

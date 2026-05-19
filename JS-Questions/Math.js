console.log(Math.min(2, 4, 1));
console.log(Math.max(2, 4, 1));
console.log(Math.sqrt(9));
console.log(Math.pow(2, 3));
console.log(Math.floor(2.3));
console.log(Math.ceil(2.3));
console.log(Math.abs(-2));
console.log(Math.round(2.9));

let min = 2;
let max = 10;

Math.random() * (max - min + 1) + min; // (0,21) + 5 = (5,26) // (0,9) + 2 = (2,11)

let date = new Date('2026-04-04');
let userDate = new Date('2026-04-09');
let diff = userDate - date;

console.log(diff);

let days = diff / 1000 / 60 / 60 / 24;
console.log(diff / 1000 / 60 / 60 / 24);
days > 30 ? console.log('not valid') : console.log('Congratulation');

//console.log(newDate.toString());
// console.log(date.toString());
// console.log(date.toLocaleString());

// console.log(date.toString()); //Jan 1 , 1970 unix epoch
// console.log(Date.now() / 1000); //in seconds
// console.log(Date.now() / 1000 / 60); //in minutes
// console.log(Date.now() / 1000 / 60 / 60); //in hour
// console.log(Date.now() / 1000 / 60 / 60 / 24); //in days
// console.log(Date.now() / 1000 / 60 / 60 / 24 / 365); //in years

// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth()); // zero index 0-jan / 1-feb / 2 -march
// console.log(date.getDate());
// console.log(date.getDay()); // 1=mondya / 2=tuesday
// console.log(date.getHours()); //
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getTimezoneOffset()); //UTC time
// console.log(date.getMilliseconds());

// date.setFullYear('2022');
// date.setMonth('01');
// console.log(date);

// let date1 = new Date('2026/02/03');
// console.log(date1.toLocaleString());
// let date2 = new Date(2026, 4, 20, 12, 0, 0);
// console.log(date2);

// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(
//   `${date.getDate()} day ${date.getMonth() + 1} Month ${date.getFullYear()} year`,
// );

// console.log(date.getTime());
// console.log(Date.now());

// let currentTime = Date.now();
// //console.log(Date.now());

// let addMin = 1000 * 60 * 20; // milisecond (1000) * seconds (60) * minutes (20) =total time in milisecond
// console.log(addMin);
// let updatedTime = currentTime + addMin;
// let date1 = new Date(updatedTime);
// console.log(date1);

// let milliSec = 123465474674;

// console.log(milliSec / 1000);
// console.log(Math.floor(milliSec / 1000 / 60)); // convert into minutes
// console.log(Math.floor(milliSec / 1000 / 60)); // convert into minutes
// console.log(milliSec / 1000 / 60 / 60);
// console.log(milliSec / (3600 * 1000)); // calculate milliseconds into hours

// // console.log(milliSec / 1000 / 60 / 60 / 24);
// // console.log(milliSec / 1000 / 60 / 60 / 24 / 365);

// let date1 = new Date(123465474674);
// console.log(date1);

// let milisec = 65000;

// console.log(milisec / 1000 / 60); // in minutes
// console.log(milisec / 60000); // in minutes

// console.log((milisec % 60000) / 1000); //in seconds
//console.log(milisec / 1000); //in seconds

//function to calculate difference in two dates
let startingDate = '2024-04-05T09:24:34.999Z';
let endingDate = '2025-07-07T03:24:34.999Z';

function dateDiff(start, end) {
  let startDate = new Date(start);
  let endDate = new Date(end);

  let diff = (endDate - startDate) / 1000; // in seconds

  let year = Math.floor(diff / 60 / 60 / 24 / 365);
  diff = diff % (60 * 60 * 24 * 365);

  let months = Math.floor(diff / (60 * 60 * 24 * 30));
  diff = diff % (60 * 60 * 24 * 30);

  let days = Math.floor(diff / (60 * 60 * 24));
  diff = diff % (60 * 60 * 24);

  let hours = Math.floor(diff / (60 * 60));
  diff = diff % (60 * 60);

  let minutes = Math.floor(diff / 60);
  seconds = diff % 60;

  console.log(year, months, days, hours, minutes, seconds);
}

console.log(dateDiff(startingDate, endingDate));

let days1 = new Date(startingDate);
let milisec = days1.getTime() + 5 * 24 * 60 * 60 * 1000;
console.log(milisec);
let finalDate = new Date(milisec);
console.log(finalDate);

//find age from user's DOB
let dob = new Date('1993-05-05');
let dateNow = new Date();
//console.log(dateNow.getFullYear() - dob.getFullYear());

let age = dateNow.getFullYear() - dob.getFullYear();
let month = dateNow.getMonth() - dob.getMonth();
let date3 = dateNow.getDay() - dob.getDay();

if (month < 0 || (month === 0 && date < 0)) {
  age--;
}
console.log(age);
console.log(age, month, date3);

//util function to format date
function formatDate(str) {
  let date = new Date(str);
  return date.toLocaleDateString('en-IN', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

console.log(formatDate(dob));

let newUrl = 'https://notifications.doctors.net.uk/'.slice(0, -1);
console.log(newUrl);

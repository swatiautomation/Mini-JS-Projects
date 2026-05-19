/*

given a year, report if it is a leap year or not.

**/
// function isLeapYear(year) {
//   if (year % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

const isLeapYear = (year) => year % 4 === 0;

console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2021)); // false
console.log(isLeapYear(1900)); // true

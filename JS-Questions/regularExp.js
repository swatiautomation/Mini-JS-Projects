// const ex1 = 'The quick brown fox jumped over the lazy dog';
// const ex2 = 'A1B2C3D4E5F6G7H8I9J10';
// const ex3 = 'The salad costs $9.99 hello';
// const ex4 = 'Contact customer support on 0800 300 500';
// const ex5 =
//   'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com';

// Exercise 01
// Using a regex pattern, get the 3 letter words in the ex1 string.

function getThreeLetterWords(str) {
  // return str.match(/\b\w{3}\b/g);
  //or
  return str.match(/(^|\s)[a-zA-Z]{3}($|\s)/g);
}
//console.log(getThreeLetterWords(ex1));

// Exercise 02
// Using a regex pattern, remove all of the numbers from the ex2 string.

function removeNumber(str) {
  //return str.match(/\d/g); //to get numbers
  return str.replace(/\d/g, ''); // to replace with empty string
}
//console.log(removeNumber(ex2));

// Exercise 03
// Using a regex pattern, find the monetary value contained within the ex3 string.

function getMoneyValue(str) {
  return str.match(/\$\d{1,3}.\d{2}/g);
  //or
  //return str.match(/\$\d+(\.\d{2})?/g);
}
//console.log(getMoneyValue(ex3));

// Exercise 04
// Using a regex pattern, find the telephone number contained within the ex4 string.

function getPhoneNumber(str) {
  //return str.match(/\b0\d{3}\s\d{3}\s\d{3}\b/g);
  //or
  return str.match(/(\d{3,4}\s?){3}/g);
  //or

  //return str.match(/\d/g).join('');
}

//console.log(getPhoneNumber(ex4));
// Exercise 05
// Using a regex pattern, find the email address contained within the ex5 string.
function getEmailAddress(str) {
  return str.match(/\w+@\w+\.\w+/g); // \w- matches any alphanumeric character including underscore
  //or
  //return str.match(/\S+@\S+\.\S+/g); // \S- matches any non-whitespace character
}
//console.log(getEmailAddress(ex5));

//=============================================================================================================

const ex1 = 'Grade 1Grade 2Grade 3Grade 4Grade 5';
const ex2 = 'The pheasant has no agenda';
const ex3 = '75, 50 : 123 / 900 - 321 + 900 = 55';
const ex4 = 'My name is: James';
const ex5 = `Did you find any droids? No, sir. If there were any on board, they must also have jettisoned. Send a scanning crew on board.
 I want every part of this ship checked. Yes, sir. I sense something...a presence I haven't felt since... 
 Get me a scanning crew in here on the double. I want every part of this ship checked! Boy, it's lucky you've these compartments. 
 I use them for smuggling. I never thought I'd be smuggling myself in them. This is ridiculous. Even if I could take off, I'd never get past the tractor beam.`;

// Exercise 01
// Using a regex, get an array of the grade values e.g. Grade 1, Grade 2 ...
function getGrades(str) {
  return str.match(/Grade \d/g);
}
console.log(getGrades(ex1));

// Exercise 02
// Using a regex, determine whether the string contains the substring 'agenda' or 'age'

function containsAgendaOrAge(str) {
  //return str.match(/agenda|age/g);
  return /age|agenda/.test(str);
}
console.log(containsAgendaOrAge(ex2));

// Exercise 03
// Using a regex, get an array of numbers that are contained in the string (removing any symbols)
function getNumbers(str) {
  return str.match(/\d+/g);
}
console.log(getNumbers(ex3));
// Exercise 04
// Using a regex, find out the name contained in the string (after the semicolon :)
function getName(str) {
  return str.match(/:\s+(\w+)/)[1];
}

console.log(getName(ex4));
// Exercise 05
// Using a regex, find the number of contractions used in the string.
function getContractionCount(str) {
  //return str.match(/\b\w+\'\w+\b/g).length;
  return str.match(/'[dstm]|'[r|ve]/g).length;
}
console.log(getContractionCount(ex5));

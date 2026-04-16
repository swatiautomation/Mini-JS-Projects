const sentence = 'The quick brown fox jumps over the lazy dog.';
const regex = /quick/i;
console.log(regex.test(sentence)); // true
console.log(sentence.match(regex)); // [ 'quick', index: 4, input: 'The quick brown fox jumps over the lazy dog.', groups: undefined ]

//==========================================
const quote = 'What is this? A center for ants?';
const pattern = /ant/;
console.log(pattern.test(quote)); // true
console.log(quote.match(pattern));

//==========================================
const email = 'monkey@trees.com';
const emailPattern = /\w*@\w*\.com$/;
console.log(emailPattern.test(email)); // true
console.log(email.match(emailPattern)); // [ '.com', index: 11, input: '
//= =========================================

const phoneNumber = '123-456-7890';
//const phonePattern = /\d\d\d-\d\d\d-\d\d\d\d/;
const phonePattern = /\d{3}-\d{3}-\d{4}/;

console.log(phonePattern.test(phoneNumber));
console.log(phoneNumber.match(phonePattern));

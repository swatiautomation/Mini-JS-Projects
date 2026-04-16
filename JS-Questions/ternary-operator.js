const happy = true;
happy == true ? console.log('yay!') : console.log('nay!');

const happy1 = (happy) => {
  return happy === true ? 'yay' : 'No';
};

const happy2 = (happy) => (happy === true ? 'yey' : 'no');
console.log(happy1(false));

console.log(happy2(true));

[10, 20, 30, 40].map((map) =>
  map > 10 ? console.log(map * 2) : console.log(map + 2)
);

//==========================================
const takeNumber = (number) =>
  number > 9000 ? 'it over 9000!' : 'it is under 9000!';
console.log(takeNumber(5000));
console.log(takeNumber(10000));
//==========================================

const wizard = ['Harry', 'Ron', 'Hermione', 'Neville', 'Dracoa'];
const newMap = wizard.map((name) =>
  name.includes('a') ? name.replaceAll('a', '*') : name.toUpperCase()
);
//   if (name.includes('a')) {
//     return name.replace('a', '*');
//     //console.log(`${name} is a wizard`);
//   } else {
//     return name.toUpperCase();
//   }
// );

console.log(wizard);
console.log(newMap);

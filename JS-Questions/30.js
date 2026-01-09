const str = 'rori';

//console.log(str.length);

const str1 = str.split('');
console.log(str1.join(''));

function countS(str, character) {
  let count = 0;
  const str1 = str.split('');
  str1.forEach((char) => {
    if (char === character) {
      count++;
    }
  });
  console.log(count);
}

function countCharNotCaseSensitive(str, char) {
  let count = 0;
  str = str.toLowerCase();
  char = char.toLowerCase();

  for (const ch of str) {
    if (ch === char) {
      count++;
    }
  }
  console.log(count);
}
countCharNotCaseSensitive('Swati sharma', 's');

countS('Swati sharma', 's');

function isPalindrome(s) {
  const strAtt = s.split('');
  const reverStr = strAtt.reverse();
  const revisedStr = reverStr.join('');
  console.log(revisedStr);

  s === revisedStr ? console.log('palindrome') : console.log('not palindrome');
}

isPalindrome('madami');

function checkIndexOf(str, char) {
  if (str.indexOf(char) === -1) {
    console.log('character not found in string');
    return;
  }

  const index = str.indexOf(char);
  console.log(index);
}

checkIndexOf('Swati sharma', 'a');

function findLastIndexOf(str, char) {
  if (str.indexOf(char) === -1) {
    console.log('character not found in string');
    return;
  }
  const lastIndex = str.lastIndexOf(char);
  console.log(lastIndex);
}

findLastIndexOf('Swati sharma', 'a');
findLastIndexOf('Swati sharma', 'u');

function excludeDuplicateCharacters(str) {
  let count = [];

  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      count.push(str[i]);
      // count += str[i];
    }
  }
  console.log(count);
}

excludeDuplicateCharacters('swati sharma');

function UniqueRepeatedCharacters(str) {
  let count = [];

  for (let i = 0; i <= str.length; i++) {
    if (
      str.indexOf(str[i]) !== str.lastIndexOf(str[i]) &&
      !count.includes(str[i])
    ) {
      count.push(str[i]);
    }
  }
  console.log(count);
}

UniqueRepeatedCharacters('swati sharma');

function sortStringCharactersInAscendingOrder(str) {
  const result = [];
  const s = str.split('');

  s.forEach((char) => {
    result.push(char.charCodeAt(0));
  });

  result.sort((a, b) => a - b);

  const finalResult = [];
  result.forEach((c) => {
    finalResult.push(String.fromCharCode(c));
  });
  console.log(finalResult.join(''));
}

sortStringCharactersInAscendingOrder('swati sharma');

//Or simpler way

function sortString(str) {
  const newSortedString = str.split('').sort().join('');
  console.log(newSortedString);
}

sortString('swati sharma');

console.log('------------------reverse string------------------');

const st = 'swati sharma';

const rever = st.split('').reverse().join('');
//console.log(rever);

const r = st.split('').slice(1).join('');
//console.log(r);

constre = st.slice(0, 6) + st.charAt(6).toUpperCase() + st.slice(7);
//console.log(constre);

//console.log(st.substring(1, 5));
//console.log(st.split('s'));
//console.log(st.split('s', 3));
// console.log(st.includes('swati'));
// console.log(st.includes('swa', 6));

// console.log(st.startsWith('s'));
// console.log(st.endsWith('a'));

// console.log(st.repeat(2));
// console.log(st + ' ' + st);

const str2 = 'Swati Sharma SWATI SHARMA  ';
// console.log(str2.trim());
// console.log(str2.trimStart());
// console.log(str2.trimEnd());

const num = '9';
// console.log(num.padStart(2, 0));
// console.log(num.padEnd(2, 0));

str2.localeCompare(str2);
// console.log(str2.localeCompare(str2));

// console.log(str2.localeCompare(num));

// console.log(st.localeCompare(str2));

// console.log('a'.localeCompare('b'));
// console.log('b'.localeCompare('a'));
// console.log('b'.localeCompare('b'));

//console.log(str2.search(/wA/i));

// console.log(str2.match('wa'));
// console.log(str2.match(/wa/));
// console.log(str2.match(/wa/gi));

let text = 'The rain in SPAIN stays mainly in the plain';
// let res = text.matchAll(/ain/g);
// console.log([...res]);

// const res = text.replace('rain', 'water');
// console.log(res);

// const newStr2 = str2.replace('S', 's');
// console.log(newStr2);

// const str3 = str2.replace(/S/g, 'T');
// console.log(str3);

// const str4 = text.replace('rain', (match) => {
//   return match.toUpperCase();
// });

// console.log(str4);

// const newst = text.replaceAll('ain', 'ton');
// console.log(newst);

text.charCodeAt(0);
console.log(String.fromCharCode(text.charCodeAt(0) + 2));

console.log(str2.toLocaleUpperCase('tr'));
console.log(str2.toLocaleLowerCase('spa'));

const user = [
  { name: 'Swati', age: 25 },
  { name: 'Rori', age: 5 },
  { name: 'Sharma', age: 15 },
  { name: 'Rome', age: 5 },
];

const foundUser = user.find((u) => {
  return u.age === 5;
});
console.log(foundUser);

const foundUserIndex = user.findIndex((u) => u.age === 15);
console.log(foundUserIndex);

const ageUser = user.some((u) => u.age == 15);
console.log(ageUser);

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = number.every((num) => num >= 1);
console.log(result);

const sum = user.reduce((acc, curr) => acc + curr.age, 0);
console.log(sum);

const nameSum = user.reduce((acc, curr) => acc + curr.name, '');
console.log(nameSum);

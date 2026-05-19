// console.log(5 & 3);
// console.log(4 & 7);

// 2**4 2**3 2**2 2**1 2**0 = 16 8 4 2 1

// 5 in bits =                 0 0 1 0 1
// 6 in bits=                  0 0 1 1 0
// 3 in bits =                  0 0 0 1 1
//7 in bits -                   0 0 1 1 1
// 4in bits -                    0 0 1 0 0

// (00101 & 00011) = 0 0 0 0 1

// const checkMarks = (marks) => {
//   if (marks >= 90 && marks <= 100) {
//     console.log('Grade A');
//   } else if (marks >= 80 && marks <= 89) {
//     console.log('Grade B');
//   } else if (marks >= 70 && marks <= 79) {
//     console.log('Grade C');
//   } else {
//     console.log('Fail');
//   }
// };

// checkMarks(86);

// const checkDiscount = (amount) => {
//   if (amount < 50) {
//     console.log('no discount for you .sorry!!');
//   } else if (amount >= 50 && amount <= 100) {
//     console.log(amount - amount * 0.1);
//   } else {
//     console.log(amount - amount * 0.2);
//   }
// };
// checkDiscount(20);

// let hasSub = true;
// const checkPermission = (status) => {
//   if (!hasSub) return;

//   if (status == 'Premium') {
//     console.log('access to premium content');
//   } else if (status == 'Standard') {
//     console.log('access to standard content');
//   }
// };
// checkPermission('Standard');

// const theme = prompt(
//   'Choose your theme from these options : Light , Dark , Pink',
// );

// if (theme === 'Light') {
//   console.log(`Your choosen theme is ${theme} and your color is White`);
// } else if (theme === 'Dark') {
//   console.log(`Your choosen theme is ${theme} and your color is Black`);
// } else if (theme === 'Pink') {
//   console.log(`Your choosen theme is ${theme} and your color is Pink`);
// } else {
//   console.log('You have entered invalid theme');
// }

// const num1 = Number(prompt('Enter 1st number'));
// const num2 = Number(prompt('Enter 2nd number please'));
// const num3 = Number(prompt('Enter 3rd number please'));

// num1 > num2 && num1 > num3
//   ? console.log(`biggest number is ${num1}`)
//   : num2 > num1 && num2 > num3
//     ? console.log(`biggest number is ${num2}`)
//     : console.log(`biggest number is ${num3}`);

// let role = 'editodd';
// switch (role) {
//   case 'admin':
//     console.log('full access');
//     break;
//   case 'viewer':
//     console.log('can only view');
//     break;
//   case 'editor':
//     console.log('can edit');
//     break;
//   default:
//     console.log('invalid case');
// }

// let num = 50;
// for (let i = 1; i <= num; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`${i} FizzBuzz`);
//   } else if (i % 3 === 0) {
//     console.log(`${i} Fizz`);
//   } else if (i % 5 === 0) {
//     console.log(`${i} Buzz`);
//   }
// }

// let operator = '-';
// let a = 10;
// let b = 10;
// switch (operator) {
//   case '+':
//     console.log(a + b);
//   case '-':
//     console.log(a - b);
// }

// let balance = 10;
// let selectionOption = prompt(
//   'Please choose 1 option : Deposit, Check Balance , Withdraw , Exit',
// );

// if (selectionOption === 'Exit') {
//   console.log('Tata Bye');
// }

// if (selectionOption === 'Check Balance') {
//   console.log(`Your balance is : ${balance}`);
// } else if (selectionOption === 'Deposit') {
//   let chooseAmount = Number(prompt('Please enter your amount'));
//   if (chooseAmount <= 1) {
//     console.log('Deposit amount should be more than 1');
//   } else {
//     balance += chooseAmount;
//     console.log('Here is your Total balance =' + balance);
//   }
// } else if (selectionOption === 'Withdraw') {
//   let chooseAmount = Number(prompt('Please enter your amount'));
//   if (chooseAmount > balance || chooseAmount <= 1) {
//     console.log("You can't withdraw");
//   } else {
//     balance -= chooseAmount;
//     console.log('Here is your total balance :' + balance);
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// const str = 'Navneet';
// let count = 0;
// let consonent = 0;

// for (const s of str) {
//   if (s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u') {
//     count++;
//   } else {
//     consonent++;
//   }
// }
// console.log('vowels are : ' + count);
// console.log('consonant are : ' + consonent);

// let sum = 0;
// let number = 5;
// let intial = 2;
// for (let i = intial; i <= number; i++) {
//   sum += i;
// }
// console.log(sum);

// let guessNumber = null;
// let correctNumber = 10;

// while (guessNumber !== correctNumber);
// {
//   guessNumber = Number(prompt('Pleae enter number'));
//   if (isNaN(guessNumber)) {
//     alert('Not a number');
//   } else {
//     alert('you guessed it right');
//   }
// }

// let password = 'Swati';
// let attemp = 0;
// let userPassword = null;
// while (password !== userPassword && attemp < 3) {
//   userPassword = prompt('Enter you password');
//   attemp++;
//   if (password === userPassword) {
//     alert('you have guess it correct');
//   } else if (attemp >= 3) {
//     alert('You have finished all the attempt');
//   } else {
//     alert('Invalid password.Please try again');
//   }
// }

let fact = 1;

for (let i = 1; i <= 4; i++) {
  fact *= i;
}
//console.log(fact);

for (let i = 1; i <= 5; i++) {
  let str = '';
  for (let j = 1; j <= i; j++) {
    str += j;
  }
  console.log(str);
}

// let playAgain = 'yes';

// while (playAgain === 'yes') {
//   let chooseOption = prompt(
//     'You wake up in dark forest. Do you go left or right.?',
//   );
//   if (chooseOption === 'left') {
//     chooseOption = prompt(
//       'You walk into swamp... you see something shiny in the mud.Do you pick it up.? yes or no',
//     );
//     if (chooseOption === 'yes') {
//       alert('Its a magic stone.you win');
//     } else {
//       alert('You sink slowly into mud.Game over');
//     }
//   } else if (chooseOption === 'right') {
//     chooseOption = prompt('You find a cave... Do you enter a cave.? yes or no');
//     if (chooseOption === 'yes') {
//       alert('you barely escape');
//     } else {
//       alert('You choose peacefull night under the stars.You win');
//     }
//   }

//   chooseOption = prompt('Do you want to play again.? yes or no');
//   if (chooseOption === 'no') {
//     playAgain = 'no';
//     alert('Thanks for playing');
//   }
// }

function capital(str) {
  let total = str.charAt(0).toUpperCase() + str.slice(1);
  console.log(total);
}
capital('swati');

// setTimeout(() => {
//   console.log('Please enter');
// }, 5000);

//setTimeout;

function finalPrice(price, discount) {
  let discountedPrice = price * (discount / 100);
  let total = price - discountedPrice;
  return total;
}
console.log(finalPrice(200, 20));

// function fullName(username) {
//   return '@' + username;
// }

// console.log(fullName('swati'));

// const stri = new String('swati');
// console.log(stri);

// function takeName(name) {
//   console.log(`@${name}_${name.length}`);
// }
// takeName('swati');

// let count = 0;
// function findChar(str, char) {
//   for (const index in str) {
//     if (str[index].toLowerCase() === char.toLowerCase()) {
//       console.log(`index of character ${char}: ${index}`);
//       count++;
//     }
//   }
//   console.log(char, count);
// }

// findChar('swati sharma', 'A');

// let str2 = 'Gello i am boy swati sharma';
// console.log(str2.split(' ').length);

// const str = new String('swati');
// console.log(str);

// const arr = new Array([1, 2, 3]);
// console.log(arr);

let arr = [1, 2, 3, 4, 5, 6];
// let result = arr.pop(); // return deleted item
// console.log(arr);
// console.log(result);

// let result = arr.push(20);
// console.log(arr); // return lenght of new array
// console.log(result);

// let result = arr.unshift(11); // length of new array
// console.log(arr);
// console.log(result);

// let result = arr.shift(); // return deleted item
// console.log(arr);
// console.log(result);

// let result = arr.slice(1, 4); // return item starting from index 1 to index 3. if no index passed at the end, will return starting to end.
// console.log(arr);
// console.log(result);

let result = arr.splice(3, 2, 20); // return deleted item
console.log(arr);
console.log('result:' + result);

// let result = arr.includes(2);
// console.log(arr);
// console.log(result);

// let arr1 = [1, 4, 10, 20, 30, 2, 'mango'];
// // let result = arr.concat(arr1);
// // console.log(result);

// let result1 = [...arr, ...arr1];
// console.log(result1);

// console.log(result1.indexOf(2));
// console.log(result1.lastIndexOf(2));
// let bool = arr1.find((item) => {
//   return item === 'mango';
// });
// console.log(bool);

// const heros = [1, 2, [3, 4, [5, 6, [10, 20], 7, 8]]];
// console.log(heros.flat(Infinity));
// console.log(arr1.join(' '));
// console.log(heros.toString());
// console.log(arr1.reverse().join('')); // join based on blank

// console.log(arr1.sort()); // it will sort based on string

// let result = arr1.sort((a, b) => {
//   // assending order
//   return a - b;
// });

// console.log(result);

// let result2 = arr1.sort((a, b) => {
//   // descending order
//   return b - a;
// });
// console.log(result2);

//Array Questions

// let total = 0;
// const marks = [1, 2, 3, 4, 5, 10];
// let result1 = marks.reduce((acc, item) => {
//   return (acc += item);
// }, 0);
// console.log(result1 / marks.length);

const ar = new Array(20).fill(0);
//console.log(ar);

let res = ar.map((item, index) => {
  return (ar[index] = index + 1);
});
console.log(res);

const heros = [
  'ironment',
  'captain',
  'black widow',
  'wanda',
  'hulk',
  'black panthar',
];
heros.push('spiderman');
console.log(heros);

heros.unshift('thor');
console.log(heros);

heros.splice(3, 1, 'hawkey');
console.log(heros);

console.log(heros.includes('captain'));

console.log(Array.isArray(heros));
console.log(Array.from(heros));

let a = 1;
let b = '2';
let c = { name: 's' };
let d = [9, 9];

console.log(Array.of(a, b, c, d));

let str = 'momi';
let newStr = str.split('').reverse().join('');
if (str === newStr) {
  console.log('string is palindrome');
} else {
  console.log('no');
}

let result1 = str.charAt(0).toUpperCase() + str.slice(1);
console.log(result1);
let stringy = 'how are you';
let newStringy = stringy.split(' ').map((item) => {
  return item.charAt(0).toUpperCase() + item.slice(1);
});

console.log(newStringy.join(' '));

//-----------------------------------------------------------
//Onject

let obj = {
  name: 'swati',
  age: 19,
  start: () => {
    console.log('hello');
  },
};
console.log(obj);

console.log(obj['name']);
obj['start']();

delete obj.age;
console.log(obj);

obj.age = 20;
let key = Object.keys(obj);
console.log(key);
let value = Object.values(obj);
console.log(value);
let entries = Object.entries(obj);
console.log(entries);

let obj1 = { ...obj };

console.log(obj1);

let obj3 = {};
let obj4 = Object.assign(obj3, obj1);
console.log(obj3);

Object.freeze(obj);
obj.city = 'delhi';
delete obj.city;
console.log(obj);

console.log(obj.hasOwnProperty('age'));

let person = {
  name: 'swati',
  age: 27,
  city: 'Delhi',
};

let entry = Object.entries(person);
console.log(entry);

for (const key in person) {
  console.log(`value of ${key} is ${person[key]}`);
}

person.email = 'swati@test.com';
console.log(person);

delete person.city;
console.log(person);

function createFullName(obj) {
  // return `${obj.firstname}  ${obj.middlename}   ${obj.lastName}`;
  return Object.keys(obj).length;
}
console.log(
  createFullName({
    firstname: 'swati',
    middlename: 'kumar',
    lastName: 'sharma',
    age: 70,
  }),
);

function countArr(arr) {
  for (const key in arr) {
  }
}

let arr7 = [
  { name: 'ab', role: 'admin' },
  { name: 'ab', role: 'nothing' },
  { name: 'ab', role: 'admin' },
];

let resul = arr7
  .filter((item) => {
    return item.role === 'admin';
  })
  .map((item) => {
    return item.name;
  });

console.log(resul);

let product = [
  { name: 'abc', id: 2 },
  { name: 'phone samsung', id: 3 },
  { name: 'car', id: 5 },
];

function searchProduct(obj, name) {
  let filterarr = obj.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  return filterarr;
}

console.log(searchProduct(product, 'phone'));

const comments = [
  { postID: 1, text: 'great post' },
  { postID: 2, text: 'Thanks' },
  { postID: 1, text: 'Very helpful' },
];

function groupByPost(obj) {
  let emptyArr = {};
  obj.map((item) => {
    if (emptyArr.hasOwnProperty(item.postID)) {
      emptyArr[item.postID].push(item.text);
    } else {
      emptyArr[item.postID] = [item.text];
    }
  });
  return emptyArr;
}

console.log(groupByPost(comments));

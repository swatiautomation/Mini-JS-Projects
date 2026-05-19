/**
 * Write a javascript function to get the current date in YYYY-MM-DD format.
 *
 *
 */

function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are zero-based
  const day = date.getDate();

  console.log(`${year}`);
  console.log(`${month}`);
  console.log(`${day}`);

  console.log(
    `${month.toString().padStart(2, 0)}-${day
      .toString()
      .padStart(2, 0)}-${year}`,
  );
}

getCurrentDate(); // e.g., '2024-06-15'

//-------------------------------

function generateRandomeData(n) {
  const firstNames = ['swati', 'john', 'emma', 'liam', 'ava'];
  const lastNames = ['sharma', 'doe', 'brown', 'wilson', 'lee'];

  return Array.from({ length: n }, () => {
    const year = Math.floor(Math.random() * 100) + 1900;
    return {
      first: firstNames[Math.floor(Math.random() * firstNames.length)],
      last: lastNames[Math.floor(Math.random() * lastNames.length)],
      year: year.toString(),
      passed: (year + Math.floor(Math.random() * 80)).toString(),
    };
  });
}

//console.log(generateRandomeData(16));
const inventor = [
  { first: 'emma', last: 'wilson', year: '1975', passed: '2053' },
  { first: 'ava', last: 'lee', year: '1947', passed: '1955' },
  { first: 'swati', last: 'lee', year: '1982', passed: '2040' },
  { first: 'swati', last: 'brown', year: '1970', passed: '2015' },
  { first: 'liam', last: 'doe', year: '1937', passed: '1970' },
  { first: 'emma', last: 'brown', year: '1926', passed: '1993' },
  { first: 'swati', last: 'wilson', year: '1906', passed: '1966' },
  { first: 'swati', last: 'lee', year: '1972', passed: '2044' },
  { first: 'john', last: 'brown', year: '1929', passed: '1951' },
  { first: 'emma', last: 'wilson', year: '1916', passed: '1965' },
  { first: 'swati', last: 'brown', year: '1939', passed: '1948' },
  { first: 'john', last: 'wilson', year: '1971', passed: '2008' },
  { first: 'swati', last: 'wilson', year: '1984', passed: '1987' },
  { first: 'emma', last: 'lee', year: '1979', passed: '2010' },
  { first: 'liam', last: 'brown', year: '1949', passed: '1965' },
  { first: 'swati', last: 'wilson', year: '1902', passed: '1905' },
  { first: 'swati', last: 'sharma', year: '1897', passed: '1934' },
  { first: 'john', last: 'doe', year: '1920', passed: '1985' },
  { first: 'emma', last: 'watson', year: '1990', passed: '2050' },
  { first: 'liam', last: 'brown', year: '1885', passed: '1940' },
  { first: 'olivia', last: 'johnson', year: '1912', passed: '1978' },
  { first: 'noah', last: 'wilson', year: '1870', passed: '1930' },
  { first: 'ava', last: 'martin', year: '1555', passed: '2020' },
  { first: 'william', last: 'clark', year: '1800', passed: '1875' },
  { first: 'sophia', last: 'lewis', year: '2000', passed: '2070' },
  { first: 'james', last: 'walker', year: '1935', passed: '2005' },
  { first: 'mia', last: 'hall', year: '1945', passed: '2010' },
  { first: 'lucas', last: 'allen', year: '1901', passed: '1960' },
  { first: 'amelia', last: 'young', year: '1988', passed: '2060' },
  { first: 'ethan', last: 'hernandez', year: '1975', passed: '2040' },
  { first: 'harper', last: 'king', year: '1965', passed: '2025' },
  { first: 'logan', last: 'wright', year: '1599', passed: '1955' },
  { first: 'ella', last: 'lopez', year: '1925', passed: '1995' },
  { first: 'daniel', last: 'hill', year: '1918', passed: '1980' },
  { first: 'abigail', last: 'scott', year: '1930', passed: '2000' },
  { first: 'mason', last: 'green', year: '2001', passed: '2075' },
  { first: 'scarlett', last: 'adams', year: '1980', passed: '2045' },
  { first: 'jack', last: 'baker', year: '1875', passed: '1935' },
  { first: 'victoria', last: 'gonzalez', year: '1995', passed: '2070' },
  { first: 'aiden', last: 'nelson', year: '2003', passed: '2080' },
  { first: 'grace', last: 'carter', year: '1970', passed: '2035' },
  { first: 'henry', last: 'mitchell', year: '1888', passed: '1948' },
  { first: 'chloe', last: 'perez', year: '1992', passed: '2065' },
  { first: 'sebastian', last: 'roberts', year: '1865', passed: '1925' },
  { first: 'lily', last: 'turner', year: '2005', passed: '2085' },
  { first: 'owen', last: 'phillips', year: '1950', passed: '2015' },
];

const people1 = [
  'Swati',
  'John',
  'Emma',
  'Liam',
  'Olivia',
  'Noah',
  'Ava',
  'William',
  'Sophia',
  'James',
  'Mia',
  'Lucas',
  'Amelia',
  'Ethan',
  'Harper',
  'Logan',
  'Ella',
  'Daniel',
  'Abigail',
  'Mason',
  'Scarlett',
  'Jack',
  'Victoria',
  'Aiden',
  'Grace',
  'Henry',
  'Chloe',
  'Sebastian',
  'Lily',
  'Owen',
];

const people = [
  'swati,sharma',
  'john,doe',
  'emma,watson',
  'liam,brown',
  'olivia,johnson',
  'noah,wilson',
  'ava,martin',
  'william,clark',
  'sophia,lewis',
  'james,walker',
  'mia,hall',
  'lucas,allen',
  'amelia,young',
  'ethan,hernandez',
  'harper,king',
  'logan,wright',
  'ella,lopez',
  'daniel,hill',
  'abigail,scott',
  'mason,green',
  'scarlett,adams',
  'jack,baker',
  'victoria,gonzalez',
  'aiden,nelson',
  'grace,carter',
  'henry,mitchell',
  'chloe,perez',
  'sebastian,roberts',
  'lily,turner',
  'owen,phillips',
];

const res = inventor.filter((item) => item.year >= 1500 && item.year <= 1600);
//console.log(res);

const rest = inventor.map((item) => {
  return `${item.first} ${item.last}`;
});
//console.log(rest);

const rest1 = inventor.sort((a, b) => {
  return Number(a.year) - Number(b.year);
});
console.log(rest1);

const arrr = [10, 20, 30, 11, 2, 60, 1];
const sorting = arrr.sort((a, b) => {
  // console.log(`value of a : ` + a);
  // console.log(`value of b:` + b);
  return a - b;
});
//console.log(sorting);

const rest2 = inventor.reduce((acc, curr) => {
  return acc + (curr.passed - curr.year);
}, 0);
console.log(rest2);

const rest5 = inventor.sort((a, b) => {
  //return a.passed - a.year - (b.passed - b.year); // acending order
  return b.passed - b.year - (a.passed - a.year); // decending order
});
//console.log(rest5);

const rest4 = inventor.sort((a, b) => {
  return a.last.localeCompare(b.last); // to compare string use localeCompare()
});
console.log(rest4);

// const rest6 = names.filter((item, index, arr) => {
//   return arr.indexOf(item) !== index;
// });

// console.log(rest6);

const names = ['car', 'car', 'bus', 'yellow'];
const rest7 = names.reduce((acc, curr) => {
  if (!acc[curr]) {
    acc[curr] = 0;
  }
  acc[curr]++;
  return acc;
}, {});

console.log(rest7);

//---------------------------------------------------------------
const arr1 = [1, 2, 3, 4, 5];
const result = function rotateArr(arr, k) {
  k = k % arr1.length;
  return [...arr1.slice(-k), ...arr1.slice(0, arr1.length - k)];
};
console.log(result(arr1, 7));

console.log(...arr1.slice(-2));
/**
 * take last k element and put them on front + rest of the element in the array
 * formula is : arr1.slice(-k) == arr1.slice(length-k)
 *  arr1.slice(5-2)
 *  arr1.slice(3)
 * numbers from array will be = [3,4]
 * / */
console.log(...arr1.slice(0, arr1.length - 2));

//--------------------------------------

const str = 'javascript';
const splitArr = str.split('');
//console.log(splitArr.reverse().join(''));

let blankarr = [];

for (let i = splitArr.length - 1; i >= 0; i--) {
  blankarr.push(splitArr[i]);
}
console.log(blankarr.join(''));

const vowels = ['a', 'e', 'i', 'o', 'u'];
const result3 = splitArr.filter((item) => {
  return vowels.includes(item);
});
console.log(result3.length);

const result1 = splitArr.reduce((acc, curr) => {
  if (!acc[curr]) {
    acc[curr] = 0;
  }
  acc[curr]++;
  return acc;
}, {});
//console.log(result1);
//---------------------------------
const obj1 = { a: 101, b: 29, c: 80, d: 25, e: 101 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged);

let value = Object.values(obj1);
console.log(value);
console.log(Math.max(...value));

const keys = Object.keys(obj1);
console.log(keys);

const maxKey = Object.keys(obj1).reduce((acc, curr) => {
  return obj1[acc] > obj1[curr] ? acc : curr;
});
console.log(maxKey);
// const resultObj = Object.entries(obj1).sort((a, b) => {
//   return a[1] - b[1];
// });
// console.log(resultObj);

const top2 = Object.entries(obj1)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 2)
  .map((item) => item[0]);

console.log(top2);

const val = Object.values(obj1);
console.log(val);

const sum = val.reduce((acc, curr) => {
  return (acc += curr);
});
console.log('sum of values in object is :' + sum);
const maxVal = Math.max(...val);
console.log(maxVal);
const maxRes = Object.keys(obj1).filter((item) => {
  return obj1[item] === maxVal;
});

console.log(maxRes);

const words = ['hi', 'ko', 'hey', 'hello', 'world'];

const wordres = words.reduce((acc, curr) => {
  if (!acc[curr.length]) {
    acc[curr.length] = [];
  }
  acc[curr.length].push(curr);
  return acc;
}, {});

console.log(wordres);

const arr0 = [0, 1, 0, 3, 12];
// const newArr = arr0.filter((item) => item === 0);
// console.log(newArr);

// const newArr1 = arr0.filter((item) => item !== 0);
// console.log(newArr1);
// console.log(...newArr1, ...newArr);

const result9 = (arr0) => {
  let j = 0;
  for (let i = 0; i < arr0.length; i++) {
    if (arr0[i] !== 0) {
      [arr0[i], arr0[j]] = [arr0[j], arr0[i]];
      j++;
    }
  }
  return arr0;
};
console.log(result9(arr0));

const flatArr = [2, 4, 3, 5, 7];
const findPair = (arr, target) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
};

console.log(findPair(flatArr, 7));

//---------------------------------------------
const flat = [1, [2, [3, 4]]];
console.log(flat.flat());

const nonstr1 = 'aabccdeff';
const splitedArr = nonstr1.split('');

const finalresult = [...nonstr1].find((item, index, arr) => {
  return arr.indexOf(item) === arr.lastIndexOf(item);
});
console.log(finalresult);
//==================================================
const s1 = 'listen';
const s2 = 'silent';
console.log(s1.split('').sort().join(''));
console.log(s2.split('').sort().join(''));

function anagramString(str1, str2) {
  if (str1.split('').sort().join('') === str2.split('').sort().join('')) {
    return true;
  } else {
    return false;
  }
}

console.log(anagramString(s1, s2));

console.log(s2.charAt(0).toUpperCase() + s2.slice(1));

const obj5 = { a: 1, b: 2 };

const objectresult = Object.keys(obj5).map((item) => {
  return [item, obj5[item]];
});
console.log(objectresult);

//---------------------------
const newobj = { a: 1, b: { c: 2 } };
//deep clone
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  const clone = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    clone[key] = deepClone(obj[key]);
  }
  return clone;
}
const clone = deepClone(newobj);
clone.b.c = 99;
console.log(clone);

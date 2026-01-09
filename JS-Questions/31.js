//reverse of string

const reverse = function (str) {
  return str.split('').reverse().join('');
};

//console.log(reverse('hello')); // Output: "olleh"

//longest of string

function findLongest(str) {
  let longest = '';

  const newStringArray = str.split(' ');
  console.log(newStringArray);

  newStringArray.forEach((char) => {
    char.length > longest.length ? (longest = char) : null;
  });
  return longest;
}
console.log(findLongest('hello this is me swati sharma'));

// is palindrome or not
function isPalindrome(str) {
  const reverstring = str.split('').reverse().join('');
  return str === reverstring;
}
console.log(isPalindrome('madam')); //true
console.log(isPalindrome('hello')); //false

//remove duplicates from string

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

function removeDuplicates(str) {
  let result = [];
  const newStr = str.split('');
  newStr.filter((char, index, arr) =>
    arr.indexOf(char) !== arr.lastIndexOf(char) ? result.push(char) : null
  );
  console.log(result);
}

removeDuplicates('swatisharma');
removeDuplicates('helloworld');
// remove duplicates from array
function getUniqueCharacters(arr) {
  return [...new Set(arr)];
}

console.log(getUniqueCharacters([1, 2, 3, 3, 3, 3, 2, 6]));

// anagram or not
function isAnagram(str1, str2) {
  const part1 = str1.split('').sort().join('');
  const part2 = str2.split('').sort().join('');

  return part1 === part2;
}

console.log(isAnagram('listen', 'silent')); //true
console.log(isAnagram('hello', 'world')); //false

//count vowels in string
function countVoweles(str) {
  const vowels = 'aeiouAEIOU';

  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVoweles('Swati Sharmai')); //4

//largest number in array
function largestNumber(arr) {
  let largest = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(largestNumber([1, 5, 3, 9, 2])); //9

// check prime number
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7)); //true
console.log(isPrime(10)); //false

// factorial of number

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); //120
console.log(factorial(0)); //1

function removeWhiteSpaces(str) {
  str = str.replace(/\s/g, '');
  console.log(str);
  // const newstr = str.trim();
  // console.log(newstr);
}
removeWhiteSpaces('Swati   Sharma  '); //SwatiSharma
removeWhiteSpaces('  Hello   World '); //HelloWorld

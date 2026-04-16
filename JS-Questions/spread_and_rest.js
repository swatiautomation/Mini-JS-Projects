let arr = [1, 2, 3, 4];
console.log(arr);
console.log(...arr);
let newArray = [...arr, 10, 20]; // copy array
console.log(newArray);

console.log(...arr, ...newArray); // string format
console.log([...arr, ...newArray]); // array format

let str = 'swati sharma';
//let arr1 = [...str]; // split and spread , both are same
let arr1 = str.split('');
console.log(arr1);

let upperArr = arr1.map((item) => {
  return item.toUpperCase();
});
console.log(upperArr.join(''));

let testArr = [1, 2, 3];
function test(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
test(3, 4, 5);
test(...testArr); // both are same

let obj = {
  name: 'test',
  age: 2,
};
console.log(obj);
let copyObj = { ...obj }; // best option to copy object into another
console.log(copyObj);

//REST Operator

function sum(...num) {
  let res = num.reduce((acc, curr) => {
    return acc + curr;
  });

  return res;
}
console.log(sum(1, 2, 3, 4, 5, 5));

//destructuring with rest operator

let arr2 = [1, 2, 3, 4];
let [first, second, ...rest] = arr2;

console.log(first, second);
console.log(rest);

let obj1 = {
  name: 'sati',
  age: 90,
};
let { name, age, ...rest1 } = obj1;
console.log(obj1);
console.log(name);
console.log(age);
console.log(rest1);

module.exports = name;

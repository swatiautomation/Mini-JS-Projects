const set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(4);
console.log(set);

set.delete(3);
console.log(set);
console.log(set.size);
const numbers = [6, 5, 2, 3, 4, 5, 1, 2, 3, 4, 5];

const uniqueNumber = new Set();

for (const num of numbers) {
  if (uniqueNumber.has(num)) {
    console.log('number is ' + num);
    //break;
  } else {
    uniqueNumber.add(num);
  }
}

//console.log(uniqueNumber.size);
console.log('-------------------------');
console.log(`first duplicate number : ${uniqueNumber}`);
console.log([...new Set(numbers)]);

console.log(new Set([1, 2, 3, 4, 5, 1, 2, 3, 4]));

const items = [
  {
    name: 'apple',
    quantity: 2,
    price: 3,
  },
  {
    name: 'banana',
    quantity: 5,
    price: 1,
  },
  {
    name: 'orange',
    quantity: 3,
    price: 2,
  },
  {
    name: 'apple',
    quantity: 4,
    price: 3,
  },
];

const results = [];
const duplicates = new Set();

for (const item of items) {
  if (duplicates.has(item.name)) {
    continue;
  } else {
    results.push(item);
    duplicates.add(item.name);
  }
}
console.log(results);

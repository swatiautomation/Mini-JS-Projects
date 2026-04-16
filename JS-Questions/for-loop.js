const ages = [12, 17, 22, 29, 34, 41, 56, 63, 78];
let results = [];

for (const age of ages) {
  //results.push(`age : ${age} , name : Dragon`);

  const dragonObject = {
    age: age,
    name: 'Dragon',
  };
  results.push(dragonObject);
}
console.log(results);

const names = new Set(['Alice', 'Bob', 'Charlie']);
const capsName = new Set();

for (const name of names) {
  capsName.add(name.toUpperCase());
}
console.log(capsName);

const backpack = new Map();
backpack.set(1, { name: 'Alice', age: 30 });
backpack.set(2, { name: 'Bob', age: 250 });
backpack.set(3, { name: 'Gold ', age: 10000 });
backpack.set(4, { name: 'Pants', age: 25 });

// backpack.set('lastName', 'Hunt');
// backpack.set('age', 35);

console.log(backpack);
let total = 0;

for (const item of backpack) {
  console.log(` ${item[1].name} : ${item[1].age}`);
  total += item[1].age;
}

console.log(`Total age: ${total}`);

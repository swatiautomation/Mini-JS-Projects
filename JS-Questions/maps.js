const newMap = new Map();

newMap.set('name', 'Swati');
newMap.set('age', 25);
newMap.set('age', 26); // duplicate key, will update the value

console.log(newMap);
console.log(newMap.get('age'));

console.log(newMap.has('name'));
newMap.delete('age');
console.log(newMap);
console.log(newMap.size);

const userMap = new Map();
userMap.set('id', 1);
userMap.set('name', 'Maxico');
userMap.set('capital', 'Maxico City');
userMap.set('neighbor', ['india', 'USA', 'Canda']);

console.log(userMap);
userMap.set('id', 25);
console.log(userMap);

userMap.get('neighbor').push('Cuba');
console.log(userMap);

const myPet = new Map();
myPet.set('name ', 'Buddy');
myPet.set('type', 'Dog');
myPet.set('breed', 'Poodle');
myPet.set('age', 7);
myPet.set('friends', ['Bit', 'Byte', 'Data']);

console.log(myPet);

myPet.set('color', 'Brown');
console.log(myPet);

myPet.set('breed', 'Labrador');
console.log(myPet);

myPet.get('friends').pop();
console.log(myPet);

myPet.get('friends').push('Chip');
console.log(myPet);

const banana = {
  name: 'Banana',
  quantity: 1,
  price: 1.95,
};
const apple = {
  name: 'Apple',
  quantity: 1,
  price: 1.45,
};
const candy = {
  name: 'candy',
  quantity: 1,
  price: 3.95,
};

const storeMap = new Map();
storeMap.set('storeNumbe', 10);

storeMap.set('locationCity', 'Milan');
storeMap.set('locationCountry', 'italy');
storeMap.set('products', [banana, apple, candy]);

console.log(storeMap);

console.log(storeMap.get('products'));

console.log(storeMap.get('products')[2]);

storeMap.get('products')[0].price = 1.25;
console.log(storeMap);

console.log(banana);

candy.price = 4.25;
console.log(storeMap);
console.log(candy);

for (let [key, value] of storeMap) {
  console.log(key, value);
  // console.log(`${key}: ${value}`);
}

for (let i = 0; i < storeMap.get('products').length; i++) {
  console.log(storeMap.get('products')[i]);
}

const myConsole = new Map();

myConsole.set('log', (message) => console.log(message));
myConsole.get('log')('hello dear');

//console.log(myConsole.get('log')('hello dear'));
myConsole.set(1, 'Number one');
myConsole.set('1', 'String one');

console.log(myConsole);

const numbers = [10, 20, 30, 40, 50, 10, 20, 30];

const seenNumbers = new Map();

for (let i = 0; i < numbers.length; i++) {
  if (seenNumbers.has(numbers[i])) {
    console.log(i, seenNumbers.get(numbers[i]));
  } else {
    seenNumbers.set(numbers[i], i);
  }
}
console.log(seenNumbers);

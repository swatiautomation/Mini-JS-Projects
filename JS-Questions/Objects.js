const animals = {
  id: 42,
  name: 'Lion',
  habitat: 'Savannah',
};
animals['id'] = 39; // animals.id = 39;

animals.numLegs = 4;

delete animals.numLegs;
console.table(animals);

console.log('name' in animals);

console.log(Object.keys(animals));
console.log(Object.values(animals));
console.log(Object.entries(animals));

const maxico = {
  id: 52,
  name: 'Mexico',
  continent: 'North America',
  neighbors: ['USA', 'Guatemala', 'Belize'],
};

maxico.neighbors.push('Cuba');
maxico.id = 25;
console.log(maxico);

maxico.neighbors.pop();
console.log(maxico);

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

const store = {
  storeName: 'My Grocery',
  locationCity: 'Milan',
  locationCountry: 'italy',
  products: [banana, apple, candy],
};
//console.log(store.products[2]);

// store.products[price] = 4.25;
// console.log(store);

store.products[0].price = 2.25;
console.log(store);
candy.price = 4.25;
console.log(store);

const houseForSale = {
  area: 100,
  value: 320000,
  streetName: 'Fifth Avenue',
  built: '2098',
  owner: [(name = 'John Doe'), (age = '45'), (profession = 'Engineer')],
  offers: [250000, 260000, 280000, 300000],
};
console.log(houseForSale);

delete houseForSale.built;
console.log(houseForSale);

houseForSale.owner.age = 30;
console.log(houseForSale);

const maxOffer = houseForSale.offers.reduce((acc, curr) => {
  return acc > curr ? acc : curr;
}, 0);

console.log(maxOffer);

houseForSale.salePrice = '312000';
console.log(houseForSale);

const myConsole = {
  log: (message) => console.log(message),
};

myConsole.log('Hello, World!');

console.log(console);

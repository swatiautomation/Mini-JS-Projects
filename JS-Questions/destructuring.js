const nm = require('./spread_and_rest.js');

console.log(nm);
const cities = ['New York', 'Los Angeles', 'Chicago'];
const firstcity = cities[0];
console.log(firstcity);

const [firstCity, secondCity] = cities;
console.log(firstCity);
console.log(secondCity);

const [, , thirdCity, fourthCity] = cities;
console.log(thirdCity);
console.log(fourthCity); // undefined

const [firstcity1, , , fourthCity1 = 'India'] = cities;
console.log(firstcity);
console.log(fourthCity1); // India

const [firsCity2, ...restCities] = cities;
console.log(firsCity2);
console.log(restCities);

const movies = {
  title: 'test movie',
  year: 2000,
  rating: 4.5,
  book: true,
};

const { title, rating } = movies;
console.log(title);
console.log(rating);

//==========================================
const [, lion, , tiger] = ['lion', 'cat', 'tiger', 'dog'];
console.log(lion, tiger);

const snacks = {
  chips: { name: 'pringla', salty: true },
  chocolate: { name: 'mars', salty: false },
  candy: { name: 'twizzler', salty: false },
};

const { candy, fruits = { name: 'Banana', salty: false } } = snacks;
console.log(candy);
//const { fruits = { name: 'Banana', salty: false } } = snacks; //undefined
console.log(fruits);
//==========================================

const store = new Map();

store.set('cups', 46);
store.set('plates', 30);
store.set('napkins', 100);

for (const item of store) {
  console.log(item);
}

// destructuring in map
for (const [item, quantity] of store) {
  console.log(`${item} => ${quantity}`);
}

//==========================================

function xyzCalc({ x, y, z }) {
  return 5 * x - 2 * y - z;
}
console.log(xyzCalc({ x: 20, y: 2, z: 7 }));
console.log(xyzCalc({ x: 2, y: 1, z: 20 }));
console.log(xyzCalc({ x: 100, y: 100, z: 100 }));

//---------------------------------------------------

let obj = {
  name: 'swati',
  age: 45,
  isMarried: true,
  address: {
    house: 14,
    city: 'reading',
    country: 'UK',
  },
};

console.log(obj.name);
console.log(obj['name']);
console.log(obj.address.country);

let {
  name,
  age,
  isMarried,
  address: { house, city, country },
} = obj; // destruturing
console.log({ name, age });
console.log({ city, country });
console.log({ country });

let arr = [1, 2, 3, 4];
let [first, second] = arr;
console.log(first);
console.log(second);

//swap

let a = 4;
let b = 5;
[a, b] = [b, a];

console.log(a, b);

let array = [1, 2, 3];
let copy = { ...array };

console.log(copy);

function oddAndEven(...num) {
  let even = num.filter((item) => item % 2 === 0);
  let odd = num.filter((item) => item % 2 !== 0);
  return { even, odd };
}

let { even, odd } = oddAndEven(1, 2, 8, 3, 4, 5);
console.log(even, odd);

function useState(intialValue) {
  let value = intialValue;
  function setValue(val) {
    value = val;
  }
  return [value, setValue];
}

let [count, setCount] = useState(0);

console.log(count, setCount);

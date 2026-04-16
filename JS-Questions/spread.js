const str = 'Hello, World!';
const result = [...str];
console.log(result);

// Without using spread operator

const resul = [];
for (let char of str) {
  resul.push(char);
}

console.log(resul);

const map = new Map();

map.set(1, 'one');
map.set(2, 'two');
map.set(3, 'three');
console.log(map);

const spread = [...map, 'hello', [4, 'lion']];

console.log(spread);

const country = {
  Germany: 83,
  France: 67,
  Italy: 60,
};

const countryPop = {};

for (const entry of Object.entries(country)) {
  const country = entry[0];
  const population = entry[1];
  countryPop[country] = population;
}
console.log(countryPop);

const newCountery = {
  ...country,
  Spain: 47,
  Portugal: 10,
};
console.log(newCountery);

//===========================================

const country1 = {
  Germany: 83,
  France: 67,
  Italy: 60,
  canada: {
    pop: 20,
  },
};

console.log(country1);
country1.canada.drop = 5;

const c1 = {
  ...country1,
};

console.log(c1);
console.log(c1.canada.drop);

//===========================================

var views = [
  [5, 10, 20],
  [10, 20, 30],
];
var viewCopy = [...views, [100, 200]];

console.log(viewCopy);
console.log(views);

viewCopy[0].pop();
viewCopy[1].push(40);
viewCopy.push([1000, 2000]);
console.log(views);
console.log(viewCopy);

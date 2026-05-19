const animals = {
  id: 42,
  name: "Lion",
  habitat: "Savannah",
};
animals["id"] = 39; //assignment animals.id = 39;

animals["numLegs"] = 4; // adding new property numlegs with value 4;

delete animals.numLegs; // remove property numlegs
console.table(animals); // console in table form

console.log("name" in animals);
console.log(Object.keys(animals)); // gives array of keys
console.log(Object.values(animals)); //gives array of values
console.log(Object.entries(animals)); // gives array of key and value pair

const maxico = {
  id: 52,
  name: "Mexico",
  continent: "North America",
  neighbors: ["USA", "Guatemala", "Belize"],
};

maxico.neighbors.push("Cuba"); // push value to the end of neighbors array in object
maxico.id = 25; // reassign value to id to 25
console.log(maxico);

maxico.neighbors.pop(); // remove last item in neighbors array in object
console.log(maxico);

const banana = {
  name: "Banana",
  quantity: 1,
  price: 1.95,
};

const apple = {
  name: "Apple",
  quantity: 1,
  price: 1.45,
};

const candy = {
  name: "candy",
  quantity: 1,
  price: 3.95,
};

const store = {
  storeName: "My Grocery",
  locationCity: "Milan",
  locationCountry: "italy",
  products: [banana, apple, candy],
};
//console.log(store.products[2]); // return candy from products array in store object

store["price"] = 4.25; //assign price key into products array with value 4.25
console.log(store);

store.products[0].price = 2.25; // assign first key in products as price with value 2.25
console.log(store);
candy.price = 4.25; // update price key with value 4.25 in candy object
console.log(store);

const houseForSale = {
  area: 100,
  value: 320000,
  streetName: "Fifth Avenue",
  built: "2098",
  owner: { name: "John Doe", age: "45", profession: "Engineer" },
  offers: [250000, 260000, 280000, 300000],
};

delete houseForSale.built;
console.log(houseForSale);

houseForSale.owner.age = 30; // reasign value to age in owner array in houseForSale object
console.log(houseForSale);

const maxOffer = houseForSale.offers.reduce((acc, curr) => {
  return acc > curr ? acc : curr;
}, 0); // return max value from offers array in houseForSale object

console.log(maxOffer);

houseForSale.salePrice = "312000"; // add property salePrice with value 312000 into houseForSale object
console.log(houseForSale);

const myConsole = {
  log: (message) => console.log(message),
};

myConsole.log("Hello, World!");

//console.log(console);
//===================================================================
let resultArr = {};

resultArr["firstname"] = "Swati";
resultArr["lastname"] = "Sharma";
console.log(resultArr);
console.log(resultArr.firstname);
console.log(resultArr["firstname"]);

for (var item in resultArr) {
  if (resultArr.hasOwnProperty(item)) {
    console.log(`Object contains ${item} and value is ${resultArr[item]}`);
  }
}

let person = {};

person["firstName"] = "Jack";
person["lastName"] = "Smith";
person["age"] = 19;
person["employed"] = true;

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.employed);

var Person = function (name, age) {
  this.name = name;
  this.age = age;
  this.describe = function () {
    return `${this.name},${this.age} years old`;
  };
};
var jack = new Person("Jack", 25);
var jill = new Person("Jill", 24);

console.log(jack.describe());
console.log(jill.describe());

const person1 = {
  head: {
    eyes: "x",
    mouth: {
      teeth: "x",
      tongue: "x",
    },
  },
  body: {
    shoulders: "x",
    chest: "x",
    arms: "x",
    hands: "x",
    legs: "4",
  },
};

const {
  head: {
    mouth: { teeth, tongue },
  },
} = person1;
console.log(teeth, tongue);

const {
  body: { legs: mylegs },
} = person1;
console.log(mylegs);

const numbers = ["2", "3", "4"];
let [, , c] = numbers;
console.log(c);
console.log(numbers[numbers.length - 1]);
let x = 10;
let y = 20;
[x, y] = [y, x];
console.log(x, y);

const user = { name1: "Sam", age1: 25 };
const { name1, age1 } = user;
console.log(name1, age1);

const person2 = {
  info: {
    address: {
      city: "London",
    },
  },
};

const {
  info: {
    address: { city: userCity },
  },
} = person2;
console.log(userCity);

const data = {
  users: [{ name: "A" }, { name: "B" }],
};

const {
  users: [, { name }],
} = data;
console.log(name);

const response = {
  status: 200,
  data: {
    user: {
      names: "Alice",
      skills: ["JS", "React"],
    },
  },
};

const {
  data: {
    user: {
      names,
      skills: [firstSkill],
    },
  },
} = response;
console.log(names, firstSkill);

const arr = [1, [2, 3], 4];
const [a, [b, c1]] = arr;
console.log(a, b, c1);

function replaceSmiley(input) {
  return input.replaceAll(":)", ":(");
}
console.log(replaceSmiley(":) :) :) All smiles :)"));

function countFrequency(str) {
  const result = str.split("").reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 0;
    }
    acc[curr]++;
    return acc;
  }, {});

  const values = Object.values(result);
  const maxKey = Math.max(...values);
  return maxKey;
}
console.log(countFrequency("swatisharma"));

function getRandomArray(arr) {
  // for (let i = 0; i < num; i++) {
  //   console.log(Math.floor(Math.random() * num));
  // }

  // console.log(randomIndex);
  let result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
//console.log(getRandomArray([1, 2, 3]));

function countLongestStringLength(str) {
  return str.split(" ").reduce((acc, curr) => {
    return acc.length > curr.length ? acc : curr;
  }, "");
}

console.log(countLongestStringLength("swati sharma is fool"));

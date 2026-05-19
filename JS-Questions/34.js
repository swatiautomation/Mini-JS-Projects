const str = 'hello';
function reverseArray(arr) {
  const emptyArr = [];

  // for (let i = arr.length - 1; i >= 0; i--) {
  //   emptyArr.push(arr[i]);
  //   console.log(emptyArr);
  // }

  let i = arr.length - 1;
  while (i >= 0) {
    emptyArr.push(arr[i]);
    i--;
  }
  console.log(emptyArr);
}

//reverseArray(arr);

const arr = [1, 2, 3, 4, 5]; //

function reverseUsingTemp(arr) {
  for (let i = 0; i < arr.length / 2; ++i) {
    let temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
    console.log(arr);
  }
}

//reverseUsingTemp(arr);
function reverseString(str) {
  let emptyStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    emptyStr += str[i];
  }
  console.log(emptyStr);
}

//reverseString(str);

function test(arr) {
  let min = arr[0];
  let max = arr[0];

  for (const num of arr) {
    if (num < min) {
      min = num;
      console.log(`Min: ${min}`);
    } else if (num > max) {
      max = num;
      console.log(`Max: ${max}`);
    }
  }
  return console.log(`Min: ${min}, Max: ${max}`);
}
//test([15, 4, 3, 20, 1]);

function average(arr) {
  return arr.reduce((acc, curr) => {
    return acc + curr / arr.length;
  }, 0);
}

//console.log(average([1, 2, 3, 4, 5]));

function older(people) {
  return people.filter((p) => {
    return new Date().getFullYear() - new Date(p.dob).getFullYear() > 39;
  });
}

const people = [
  { dob: '10 / 10 / 2000', firstName: 'John', lastName: 'Doe' },
  { dob: '07 / 03 / 1987', firstName: 'Jane', lastName: 'Smith' },
  { dob: '12 / 12 / 2006', firstName: 'Emily', lastName: 'Johnson' },
  { dob: '12 / 12 / 1982', firstName: 'Michael', lastName: 'Brown' },
  { dob: '12 / 12 / 2000', firstName: 'Chris', lastName: 'Davis' },
];
//console.log(older(people));

function fullName(people) {
  return people.map((p) => {
    return (p.fullName = `${p.firstName} ${p.lastName}`);
  });
  // people.map(({ firstName, lastName } = `${firstName} ${lastName}`));
}
//console.log(fullName(people));

function sort(people) {
  return people.sort((a, b) => {
    return new Date(b.dob) - new Date(a.dob);
  });
}
//console.log(sort(people));

const order = [
  {
    orderId: 1,
    customerId: 250,
    deliveryDate: '2023-10-01',
    delivery: true,
    items: [
      {
        productId: 1,
        price: 100,
      },
      {
        productId: 2,
        price: 200,
      },
    ],
  },

  {
    orderId: 2,
    customerId: 250,
    deliveryDate: '2023-09-15',
    delivery: false,
    items: [
      {
        productId: 2,
        price: 150,
      },
    ],
  },
  {
    orderId: 3,
    customerId: 100,
    deliveryDate: '2023-08-20',
    delivery: true,
    items: [
      {
        productId: 4,
        price: 300,
      },
      {
        productId: 5,
        price: 400,
      },
    ],
  },

  {
    orderId: 4,
    customerId: 250,
    deliveryDate: '2023-11-05',
    delivery: true,
    items: [
      {
        productId: 2,
        price: 250,
      },
    ],
  },
];

function test2(arr) {
  return arr.filter((a) => {
    return !a.delivery && a.customerId == 250;
  });
}

//console.log(test2(order));

function test3(arr) {
  return arr.map((a) => ({
    ...a,
    totalPrice: a.items.reduce((acc, curr) => acc + curr.price, 0),
  }));
}
const result = test3(order);

//console.log(JSON.stringify(result, null, 2));

function test4(arr) {
  return arr.every((order) => {
    return order.delivery;
  });
}
console.log(test4(order));

function test5(arr) {
  return arr.some((order) => {
    return order.customerId === 100 && order.delivery;
  });
}
console.log(test5(order));

function test6(arr) {
  return arr.find((order) => {
    return order.items.some((item) => {
      return item.productId === 2;
    });
  });
}

console.log(test6(order));

function test7(arr) {
  return arr.reduce((acc, curr) => {
    return acc + curr.items.reduce((a, c) => a + (c.productId === 2), 0);
  }, 0);
}

console.log(test7(order));

const users = [
  { id: '88f2-888jj3-993md', firstName: 'John', lastName: 'Doe' },
  { id: '77g3-777kk4-884ne', firstName: 'Jane', lastName: 'Smith' },
  { id: '66h4-666ll5-775of', firstName: 'Mike', lastName: 'Johnson' },
  { id: '55i5-555mm6-666pg', firstName: 'Emily', lastName: 'Davis' },
];

const comments = [
  {
    userId: '88f2-888jj3-993md',
    text: 'This is a great post!',
  },
  {
    userId: '77g3-777kk4-884ne',
    text: 'Thanks for sharing this information.',
  },
  {
    userId: '55i5-555mm6-666pg',
    text: 'I found this very helpful.',
  },
];

function test12(users, comments) {
  return users.filter((user) => !comments.find((c) => c.userId === user.id));
}

//console.log(test12(users, comments));

function test11(users, comments) {
  return comments.map((comment) => {
    const { firstName, lastName } = users.find(
      (user) => user.id === comment.userId,
    );
    return { ...comment, firstName, lastName };
  });
}

//console.log(test11(users, comments));

function test8(users) {
  return users.find((user) => {
    return user.firstName === 'Emily' && user.lastName === 'Davis';
  });
}

//console.log(test8(users));

function test9(users, comments) {
  return users.find((user) => {
    return user.id === comments[0].userId;
  });
}
//console.log(test9(users, comments));

function test10(users, comments) {
  // const c = comments.find(
  //   (comment) => comment.text === 'I found this very helpful.',
  // );
  // // console.log(c);
  // return users.find((user) => user.id == c.userId);
  return users.find(
    (user) =>
      user.id ===
      comments.find(
        (comment) => comment.text === 'Thanks for sharing this information.',
      ).userId,
  );
}
//console.log(test10(users, comments));

const str1 =
  'hello world.This is new line for testing purposes!This is me again.Swati! Here';
const str2 = 'hello world.This is! new line for testing purposes.';

function test13(str) {
  const words = str.split(' ');
  words.map((w) => (w.length > 8 ? console.log(w) : null));
}

//test13(str1);

function sorting(str) {
  // const result = str.split(' ').sort();
  // const result1 = str1.split(' ').sort();
  // console.log(result.join(' '));
  // console.log(result1.join(' '));
  // return result.join(' ') === result1.join(' ');
  // const result = str.split('.').join('\n');
  // console.log(result);
  //  const wordsLen = str.split(' ').length;
  // console.log(wordsLen);

  const s = str.replace(/\./g, '?').replace(/\!/g, '$');
  return s;
}
//console.log(sorting(str1, str2));
console.log('---');
//console.log(sorting(str1));

//=== IGNORE ===

const users1 = [
  {
    id: 'e0aafb31-8ac6-48d4-99ee-12af8ddcbdae',
    email: 'tcasaletto0@soundcloud.com',
    ip_address: '53.215.156.73',
  },
  {
    id: 'a7b0221d-5228-4992-a964-b5f3e3d7a022',
    email: 'nmoffett1@paginegialle.it',
    ip_address: '34.81.219.4',
  },
  {
    id: '1019b52c-db9d-45a2-975f-404455925a6a',
    email: 'rcrampin2@yale.edu',
    ip_address: '65.181.114.151',
  },
  {
    id: 'e8637c3b-645d-4742-a463-d2006742606f',
    email: 'ddreinan3@smugmug.com',
    ip_address: '136.171.217.116',
  },
  {
    id: 'a20803f2-c372-4f39-97b1-d8e948151c8c',
    email: 'gdorkin4@taobao.com',
    ip_address: '220.228.4.97',
  },
  {
    id: '63f8e789-009d-4e7b-ad6b-cc8c8a1d1248',
    email: 'vhucquart5@typepad.com',
    ip_address: '101.212.0.49',
  },
  {
    id: '74120248-03b5-4888-84c0-d1a459c6273b',
    email: 'vsircombe6@marriott.com',
    ip_address: '28.180.205.167',
  },
  {
    id: '412a0669-7171-48b4-95eb-e898993ec1dc',
    email: 'kdesouza7@t.co',
    ip_address: '61.44.195.62',
  },
  {
    id: '6cd04ecc-8316-4542-9faa-b8438e82b4ad',
    email: 'sbehnke8@booking.com',
    ip_address: '1.176.238.27',
  },
  {
    id: 'cfdf5009-84d3-4599-88c0-048c4fcae2ed',
    email: 'clindsell9@soundcloud.com',
    ip_address: '44.37.119.76',
  },
];

/**
 * Exercise 01
 *
 * Check whether every email address in the list of users is valid (get a true or false value)
 */

function validateEmail(email) {
  const emailRegex = /[^@]+@[^\.]+\..+/;

  return email.every((item) => item.email.match(emailRegex));
}

//console.log(validateEmail(users1));

/**
 * Exercise 02
 *
 * Find out how many users have an IP address in a Class A network
 * https://en.wikipedia.org/wiki/Classful_network
 */

function validateIP(user) {
  return user.filter((item) => item.ip_address.split('.')[0] < 128).length;
}

//console.log(validateIP(users1));
//

/**
 * Exercise 03
 *
 * Find the position in the array of the first  user object that has a Class B IP address
 */

function findIndex(user) {
  return user.findIndex((item) => {
    const firstOctet = item.ip_address.split('.')[0];
    return firstOctet >= 128 && firstOctet <= 191;
  });
}

//console.log(findIndex(users1));

/**
 * Exercise 04
 *
 * Find the user object that has the 'soundcloud' email address
 */
function matchingEmail(user) {
  return user.filter(({ email }) => email.includes('soundcloud'));
}
//console.log(matchingEmail(users1));

/**
 * Exercise 05
 *
 * Replace all the items in the array with a string value of 'deleted'
 */
function deletedItems(users) {
  return users.fill({ id: 'deleted', email: 'deleted', ip_address: 'deleted' });
  // return users.map((user) => {
  //   return (user.id = 'deleted');
  //   // user.email = 'deleted';
  //   // user.ip_address = 'deleted';
  // });
}

console.log(deletedItems(users1));

//=========================================================================================

const accounts = [
  {
    _id: '5e56d5f5c00d45b8f1125ef4',
    index: 0,
    guid: '955310d3-45df-47e7-bc9c-92504d5e92d2',
    isActive: true,
    balance: '$3,926',
    picture: 'http://placehold.it/32x32',
    age: 26,
    eyeColor: 'green',
    name: 'George Bond',
    gender: 'male',
    company: 'GEEKOL',
    email: 'georgebond@geekol.com',
    phone: '+1 (862) 591-2584',
    address: '677 Rost Place, Brandermill, Virgin Islands, 854',
    about:
      'Est deserunt incididunt incididunt et. Et reprehenderit labore officia fugiat deserunt et non consequat velit et laboris duis. Reprehenderit dolore dolor reprehenderit culpa. Nulla duis do dolore magna cupidatat mollit quis ullamco duis.',
    registered: '2014-05-31T09:59:01 -01:00',
    latitude: -30.600915,
    longitude: -83.795214,
    tags: [
      'nostrud',
      'aliquip',
      'est',
      'laboris',
      'voluptate',
      'do',
      'dolor',
      ['deserunt', 'ipsum'],
      ['consectetur', 'quis', 'commodo'],
    ],
    friends: [
      { id: 0, name: 'Alisa Ford' },
      { id: 1, name: 'Hess Howell' },
      { id: 2, name: 'Gwendolyn Hendrix' },
    ],
    greeting: 'Hello, George Bond! You have 2 unread messages.',
    favoriteFruit: 'banana',
  },
  {
    _id: '5e56d5f51837c78c32ed16ef',
    index: 1,
    guid: '416d3864-dc91-45e3-817c-07562b04b512',
    isActive: false,
    balance: '$1,273',
    picture: 'http://placehold.it/32x32',
    age: 25,
    eyeColor: 'green',
    name: 'Fay Carlson',
    gender: 'female',
    company: 'SIGNIDYNE',
    email: 'faycarlson@signidyne.com',
    phone: '+1 (922) 529-2437',
    address: '786 Belvidere Street, Carbonville, South Dakota, 3020',
    about:
      'Ullamco deserunt nostrud minim consectetur ad enim ipsum consectetur. Excepteur ad eiusmod ut quis in magna cillum qui commodo ad do eu. Nulla aliquip Lorem excepteur laboris elit.',
    registered: '2017-04-18T02:00:02 -01:00',
    latitude: 74.274128,
    longitude: -119.604152,
    tags: ['et', 'ut', 'mollit', 'occaecat', 'ipsum', 'mollit', 'pariatur'],
    friends: [
      { id: 0, name: 'Miranda Little' },
      { id: 1, name: 'Ellen Burks' },
      { id: 2, name: 'Shanna Logan' },
    ],
    greeting: 'Hello, Fay Carlson! You have 10 unread messages.',
    favoriteFruit: 'strawberry',
  },
  {
    _id: '5e56d5f54b9a9491ba37fec9',
    index: 2,
    guid: '46839c30-0b7e-4009-98f1-9b8d770a0c88',
    isActive: false,
    balance: '$3,455',
    picture: 'http://placehold.it/32x32',
    age: 35,
    eyeColor: 'blue',
    name: 'French Bennett',
    gender: 'male',
    company: 'PASTURIA',
    email: 'frenchbennett@pasturia.com',
    phone: '+1 (883) 501-3963',
    address: '856 Hemlock Street, Alfarata, Nevada, 5261',
    about:
      'Nulla sunt ea sunt labore id excepteur elit incididunt et irure. Ut pariatur ad eu ut qui est consectetur labore enim fugiat. Occaecat incididunt ex sunt cillum Lorem in aliquip est voluptate aliquip pariatur reprehenderit ad. Aute nisi et enim enim. In voluptate eu minim duis.',
    registered: '2015-04-16T11:53:33 -01:00',
    latitude: 85.491905,
    longitude: 90.342252,
    tags: ['laboris', 'reprehenderit', 'est', 'in', 'duis', 'voluptate', 'non'],
    friends: [
      { id: 0, name: 'Mayer Sullivan' },
      { id: 1, name: 'Wiggins Hudson' },
      { id: 2, name: 'Jacqueline Gibbs' },
    ],
    greeting: 'Hello, French Bennett! You have 10 unread messages.',
    favoriteFruit: 'apple',
  },
  {
    _id: '5e56d5f55dd72bb06144c70c',
    index: 3,
    guid: '52b94117-bd93-4d8f-b8e3-f2fd1c3988fc',
    isActive: false,
    balance: '$1,733',
    picture: 'http://placehold.it/32x32',
    age: 30,
    eyeColor: 'blue',
    name: 'Shannon Mitchell',
    gender: 'male',
    company: 'DECRATEX',
    email: 'shannonmitchell@decratex.com',
    phone: '+1 (876) 447-3381',
    address: '870 Tillary Street, Aurora, Vermont, 8055',
    about:
      'Occaecat adipisicing tempor ut enim consectetur enim sit ea qui consequat sint anim sint. Sint elit occaecat eiusmod consectetur veniam ad do. Voluptate reprehenderit pariatur id deserunt sunt reprehenderit eiusmod. Aute incididunt aliquip ad aliquip. Commodo cupidatat nisi velit eiusmod qui quis tempor eiusmod sit velit ex. Ad tempor cillum incididunt aliqua labore eu voluptate voluptate cillum aute amet veniam. Velit elit occaecat esse fugiat minim deserunt sit amet et non ea sit cupidatat.',
    registered: '2014-01-29T04:55:04 -00:00',
    latitude: 77.845921,
    longitude: -137.754911,
    tags: ['consequat', 'non', 'dolore', 'cupidatat', 'irure', 'ipsum', 'quis'],
    friends: [
      { id: 0, name: 'Isabelle Luna' },
      { id: 1, name: 'Marissa Beach' },
      { id: 2, name: 'Sarah Simmons' },
    ],
    greeting: 'Hello, Shannon Mitchell! You have 4 unread messages.',
    favoriteFruit: 'banana',
  },
  {
    _id: '5e56d5f5bb33b3df103cbfb9',
    index: 4,
    guid: '2fc0bb48-ad7f-4c91-a655-6fcb761a1e8f',
    isActive: true,
    balance: '$1,839',
    picture: 'http://placehold.it/32x32',
    age: 35,
    eyeColor: 'brown',
    name: 'Johns Hooper',
    gender: 'male',
    company: 'ZENTHALL',
    email: 'johnshooper@zenthall.com',
    phone: '+1 (868) 432-2105',
    address: '446 Emmons Avenue, Tyro, South Carolina, 3627',
    about:
      'Ipsum ullamco reprehenderit nulla sint. Deserunt reprehenderit excepteur dolore quis et culpa in. Adipisicing consectetur amet reprehenderit ex velit incididunt quis ipsum reprehenderit in irure. Adipisicing Lorem minim eu laborum ex ullamco nostrud reprehenderit ullamco minim minim non. Magna id fugiat duis officia deserunt ullamco est esse.',
    registered: '2017-09-06T09:24:11 -01:00',
    latitude: -33.444624,
    longitude: 99.697197,
    tags: ['et', 'minim', 'sunt', 'irure', 'et', 'esse', 'consectetur'],
    friends: [
      { id: 0, name: 'Cynthia Hays' },
      { id: 1, name: 'Estela Walton' },
      { id: 2, name: 'Christy Ball' },
    ],
    greeting: 'Hello, Johns Hooper! You have 1 unread messages.',
    favoriteFruit: 'apple',
  },
];

function oneDArray(arr) {
  // const result = [];

  // for (const item of arr) {
  //   if (Array.isArray(item)) {
  //     const flattenedItems = oneDArray(item);
  //     result.push(...flattenedItems);
  //   } else {
  //     result.push(item);
  //   }
  // }
  // return result;
  // return arr.flat();
  return arr.flat().includes('consectetur');
}

console.log(oneDArray(accounts[0].tags));

/**
 * Exercise 03
 *
 * Get a list of all the tags for all the accounts and join them together as a string separated by commas.
 */
function getAllTags(users) {
  return users.map(({ tags }) => tags.join(', ')).join(', ');
}
//console.log(getAllTags(accounts));

/**
 * Exercise 04
 *
 * Get a list of all the friends for all the user's accounts as an array (don't worry about duplicates)
 */

function getAllFriends(users) {
  return users.map(({ friends }) => friends.map(({ name }) => name)).flat();
}

console.log(getAllFriends(accounts));

/**
 * Exercise 05
 *
 * Get a list of all the friends for all users who are younger than 30 AND have a balance more than $1500
 */
function getFriendsOfYoungRichUsers(users) {
  return users
    .filter(
      ({ age, balance }) =>
        age < 30 && parseFloat(balance.replace(/[$,]/g, '')) > 1500,
    )
    .map(({ friends }) => friends)
    .flat();
}

console.log(getFriendsOfYoungRichUsers(accounts));

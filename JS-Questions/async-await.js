// const fetchData = async () => {
//   return 'Data';
// };
// //console.log(fetchData()); // Promise { 'Data' }
// fetchData();

// const result = fetchData();
// result.then((value) => {
//   console.log(value); // Data
// });

// const useData = async () => {
//   const data = await fetchData();
//   console.log(data); // Data
// };

// useData();

//////-==========================================
// function fetchPokemon() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // resolve({ data: { name: 'Pikachu', power: 20 } });
//       reject(new Error('Failed to fetch Pokemon data'));
//     }, 2000);
//   });
// }

// console.log('program start');

// const usePokemon = async () => {
//   try {
//     const data = await fetchPokemon();
//     console.log(data);
//     console.log('Pokemon data fetched');
//   } catch (error) {
//     console.log(error);
//   }
// };
// usePokemon();
// console.log('Program complete');

//==========================================

/*function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { name: 'Swati', admin: true } });
    }, 3000);
  });
}

function login(a) {
  if (a.admin === true) {
    console.log('Successfully log out');
  } else {
    console.log('Login failed');
  }
}
console.log('Program starting...');

const asfu = async () => {
  const result = await fetchUser();
  login(result.data);
};
asfu();
console.log('Program ended...');*/
//==========================================

function goGetCandy() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ candy: 'sour keys', quantity: 5 });
    }, 2000);
  });
}

function sellCandy(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a.quantity * 25);
    }, 3000);
  });
}

const getCandy = async () => {
  const object = await goGetCandy();
  const response = await sellCandy(object);
  console.log('Total cost: Rs', response);
};

getCandy();

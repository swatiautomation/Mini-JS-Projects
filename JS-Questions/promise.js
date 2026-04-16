// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Hello');
//     resolve('Hello, i am here');
//     // reject('Sorry, no ice cream for you');
//   }, 1000);
// });

// promise
//   .then((resolveValue) => {
//     console.log('promised seems to be resolved');
//     console.log(resolveValue);
//     return 'yo!';
//   })
//   .then((anotherValue) => {
//     console.log(anotherValue);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// console.log('swati');
// console.log(promise);

//////////////////////////////////////////////////////////////////

// console.log('program started');
// const promise2v = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('program completed');
//   }, 3000);
// }).then((message) => {
//   console.log(message);
// });
// console.log(promise2v);
// console.log('program in progress...');

//////////////////////////////////////////////////////////////////////

// console.log('Program started');

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Program completed');
//   }, 3000);

//   setTimeout(() => {
//     reject('Program failure');
//   }, 2000);
// });

// console.log(promise);
// console.log('Program in progress...');

// promise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

///////////////////////////////////////////

/*console.log('program started');
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ data: 'Hello friends', error: null });
  }, 5000);
});

console.log(promise);
console.log('Program in progress...');

promise
  .then((message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('First promise change completed');
      }, 2000);
    });
  })
  .then((thenMessage) => {
    console.log(thenMessage);
  });

promise
  .then((val) => {
    console.log(val);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Second promise resolved');
      }, 10000);
    });
  })
  .then((val) => {
    console.log(val);
  });*/

///////////////////////////////////////////////////////////
/*const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3000);
});

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 5000);
});

Promise.all([promise, myPromise]).then((values) => {
  const total = values[0] + values[1];
  console.log('Total : ' + total);
});*/
/////////////////////////////////////////////////////////////////////

// const p1 = new Promise((resolve, reject) => {
//   //  resolve('resolved');
//   reject('rejected');
// });
// console.log(p1);

// p1.then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });

console.log('-----------------------');
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: 'swati' });
  }, 5000);
});
console.log(p2);
p2.then((res) => {
  console.log(res);
}).catch((err) => {
  console.error(err);
});
console.log(p2);

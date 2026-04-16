// try {
//   throw new Error('This is an error');
// } catch (error) {
//   console.log(error);
// }

//==============================================================

// try {
//   console.log('Program started');
//   throw new Error('uh No!!');
// } catch (error) {
//   console.log('program completed');
//   console.log(error);
// }
//==============================================================

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
//   if (i === 5) {
//     try {
//       throw new Error('Boom');
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }
//==============================================================

// const user = {
//   name: 'John',
//   age: 30,
//   setting: { colour: 'blue' },
// };

// console.log('Creating users');
// try {
//   console.log(user.profile.colour);
//   //  throw new Error('Profile not found');
// } catch (error) {
//   console.log(error);
// }

// console.log('user created');

//==============================================================

const num = 1337;
let random_number = Math.round(Math.random() * 1001);
let result = num + random_number;
try {
  //console.log(result);
  if (result < 2000) {
    throw new Error('You lose!!');
  } else {
    console.log('You win!!');
  }
} catch (error) {
  console.log(error);
  console.log(result);
}

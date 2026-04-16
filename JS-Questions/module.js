function greet() {
  console.log('hello');
}
module.exports = greet; // for single item
// module.exports = {  // for multiple items to export
//   name,
//   greet,
// };

//in another file how to invoke above function
//let greet = require('filename')

//ES6 syntax

//default export syntax
// export default;
//import sum from './filepath.js'

//named export syntax
// export { sum, subtract };

// import { sum, subtract } from './filename.js';
//import { sum as func } from './file.js';

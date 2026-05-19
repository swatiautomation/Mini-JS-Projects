/*

Write javascript program to find the first not repeating character in a string

**/

function firstNonRepeatingChar(str) {
  let char = [];
  for (let i = 0; i < str.length; i++) {
    // let char = str[i];

    // console.log(`char = ${str[i]}`);
    // console.log(`indexOf = ${str.indexOf(str[i])}`);
    // console.log(`lastIndexOf = ${str.lastIndexOf(str[i])}`);
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      char.push(str[i]);
      const len = char.length;
      //console.log(len);
      console.log(char.push(str[i]));
      return char;
    }
  }

  // console.log(null);
}

firstNonRepeatingChar('hello worldd');

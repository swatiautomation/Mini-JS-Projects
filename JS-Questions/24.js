/*


Write javascript program to extract unique characters from a string
**/

function uniqueCharacters(str) {
  let uniqueStr = '';

  for (let i = 0; i < str.length; i++) {
    if (uniqueStr.indexOf(str[i]) === -1) {
      uniqueStr += str[i];
    }
  }
  console.log(uniqueStr);
}

uniqueCharacters('thequickbrownfoxjumpsoverthelazydog');
uniqueCharacters('javascriptprogramming');
uniqueCharacters('hello world');
uniqueCharacters('aaabbbcc');

//Another approach using Set
function uniqueCharSet(str) {
  const uniqueStr = [...new Set(str)].join('');
  console.log(uniqueStr);
}

uniqueCharSet('hello world');

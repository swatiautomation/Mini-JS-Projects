/*

Write javascript program to return string in alphabetical order

**/
function alphabeticalOrder(str) {
  const result = str.split('').sort().join('');
  console.log(result);
}

alphabeticalOrder('webmaster');
alphabeticalOrder('javascript');

const i = 'Swati';
typeof i === 'string' ? console.log('String') : console.log('Not a string');
console.log(typeof i);

function stringSplit(str) {
  const result = str.split(/\s*·\s*/);
  const length = result.length;
  console.log(result[length - 1]);
}

//console.log(stringSplit('ACES READING  ·  2 BLAGRAVE STREET  ·  BERKSHIRE'));

const str =
  'https://search.doctors.net.uk/keyword?q=abus&original=abuse&contentCategories=news&section=news';
function toExtractkeywork(str) {
  // const newStr = str.match(/[?&]q=([^&]+)/);
  // console.log(newStr);

  const keyword = new URL(str).searchParams.get('q');

  console.log(keyword); // "abus"
}

console.log(toExtractkeywork(str));

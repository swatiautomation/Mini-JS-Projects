/*
Write a javascript program to convert a comma-separated values (CSV) string to a 2D array.A new line indicates a new row in the array.

**/

function csvTo2DArray(csvString) {
  // Split the CSV string into rows using newline character
  const rows = csvString.split('\n');
  console.log(rows);
  // Map each row to an array of values by splitting on commas
  const array2D = rows.map((row) => row.split(','));
  return array2D;
}

console.log(
  csvTo2DArray(`abc,def,ghi
  jkl,mno,pqr
  stu,vwx,yza`)
);

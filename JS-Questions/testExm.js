function test(number) {
  let total = 0;
  if (number === 1) return 1;

  console.log(number);
  return number * test(number - 1);
}
const res = test(5);
console.log(res);

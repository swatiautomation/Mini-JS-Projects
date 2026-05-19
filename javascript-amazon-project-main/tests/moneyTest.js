import { formatMoney } from '../scripts/utils/money.js';

formatMoney(2095);

if (formatMoney(2095) !== '20.95') {
  throw new Error('formatMoney(2095) should be "20.95"');
} else {
  console.log('formatMoney(2095) is correct');
}

if (formatMoney(100) !== '1.00') {
  throw new Error('formatMoney(100) should be "1.00"');
} else {
  console.log('formatMoney(100) is correct');
}

if (formatMoney(0) !== '0.00') {
  throw new Error('formatMoney(0) should be "0.00"');
} else {
  console.log('formatMoney(0) is correct');
}

if (formatMoney(2000.5) === '20.05') {
  console.log('Passed');
} else {
  console.log('Failed');
}

if (formatMoney(2000.4) === '20.00') {
  console.log('Passed');
} else {
  console.log('Failed');
}

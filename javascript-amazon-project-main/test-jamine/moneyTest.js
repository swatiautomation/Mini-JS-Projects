import { formatMoney } from '../scripts/utils/money.js';

describe('test-suite:formatCurrency', () => {
  it('converts cents into dollar', () => {
    expect(formatMoney(2095)).toEqual('20.95');
  });

  it('works with 0', () => {
    expect(formatMoney(0)).toEqual('0.00');
  });

  it('round upto nearest cent', () => {
    expect(formatMoney(2000.5)).toEqual('20.01');
  });
});

export function formatMoney(cents) {
  return (Math.round(cents) / 100).toFixed(2);
}

/*


Write javascript program to convert amount to coins
**/

function convertToCoins(amount, coins) {
  let result = [];

  for (let i = 0; i < coins.length; i++) {
    console.log(`coints = ${coins[i]}`);
    while (amount >= coins[i]) {
      amount -= coins[i];
      console.log(`amount = ${amount}`);
      result.push(coins[i]);
    }
  }
  console.log(result);
}

convertToCoins(46, [25, 10, 5, 2, 1]);
convertToCoins(100, [50, 20, 10, 5, 2, 1]);

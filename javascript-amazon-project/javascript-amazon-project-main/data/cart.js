export const cart = [];

export function addToCart(productId, quantity) {
  let matchingItem;
  cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
    }
  });
  if (matchingItem) {
    matchingItem.quantity += Number(quantity);
  } else {
    cart.push({
      productId,
      quantity,
    });
  }
}

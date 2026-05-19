class Cart {
  cartItems;
  #localStorageKey;

  constructor(localStorageKey) {
    this.localStorageKey = localStorageKey;

    this.#loadFromLocalStorage();
  }

  #loadFromLocalStorage() {
    this.cartItems = JSON.parse(
      localStorage.getItem(this.#localStorageKey)
    ) || [
      {
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1',
      },
      {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2',
      },
    ];
  }

  saveToLocalStorage() {
    localStorage.setItem(this.locslStorageKey, JSON.stringify(this.cartItems));
  }

  addToCart(productId) {
    let matchingItem;
    this.cartItems.forEach((cartItem) => {
      if (productId == cartItem.productId) {
        matchingItem = cartItem;
      }
    });
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      this.cartItems.push({
        productId: productId,
        // productPrice: productPrice,
        quantity: 1,
        deliveryOptionId: '1',
      });
    }
    this.saveToLocalStorage();
  }

  removeFromCart(productId) {
    let newCart = [];

    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });
    this.cartItems = newCart;
    this.saveToLocalStorage();
  }

  updateDeliveryOptions(productId, deliveryOptionId) {
    let matchingItem;
    this.cartItems.forEach((cartItem) => {
      if (productId == cartItem.productId) {
        matchingItem = cartItem;
      }
    });

    if (!matchingItem) {
      console.error('No matching cart item for productId:', productId);
      return;
    }
    matchingItem.deliveryOptionId = deliveryOptionId;
    this.saveToLocalStorage();
  }
}

const cart = new Cart('cart-oop');
const cart1 = new Cart('cart-oop1');

console.log(cart);
console.log(cart1);

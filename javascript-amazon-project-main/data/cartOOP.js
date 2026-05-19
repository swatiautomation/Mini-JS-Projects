function Cart(locslStorageKey) {
  const cart = {
    cartItems: undefined,

    loadFromLocalStorage() {
      this.cartItems = JSON.parse(
        localStorage.getItem(`${locslStorageKey}`)
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
    },

    saveToLocalStorage() {
      localStorage.setItem(
        `${locslStorageKey}`,
        JSON.stringify(this.cartItems)
      );
    },
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
    },
    removeFromCart(productId) {
      let newCart = [];

      this.cartItems.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
          newCart.push(cartItem);
        }
      });
      this.cartItems = newCart;
      this.saveToLocalStorage();
    },

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
    },
  };

  return cart;
}

const cart = Cart('cart-oops');
const cart1 = Cart('cart-oop1');

cart.loadFromLocalStorage();
cart1.loadFromLocalStorage();

console.log(cart);
console.log(cart1);

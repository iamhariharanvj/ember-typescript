import Service from '@ember/service';
import type CartItem from 'ember-ts/models/CartItem';
import type Product from 'ember-ts/models/Product';
import { tracked } from '@glimmer/tracking';
export default class CartService extends Service {
  @tracked cartItems: CartItem[] = [];

  addToCart(item: Product) {
    const existingItem = this.cartItems.find(
      (cartItem) => item.id == cartItem.product.id,
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems = [...this.cartItems, { product: item, quantity: 1 }];
    }
    console.log(this.cartItems);
  }

  removeFromCart(product: Product): void {
    this.cartItems = this.cartItems.filter(
      (item) => item.product.id !== product.id,
    );
  }

  get totalPrice(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );
  }

  get itemCount(): number {
    return this.cartItems.reduce((count, item) => count + item.quantity, 0);
  }
}

declare module '@ember/service' {
  interface Registry {
    cart: CartService;
  }
}

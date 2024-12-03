import Controller from '@ember/controller';
import { service } from '@ember/service';
import CartService from 'ember-ts/services/cart';
import { action } from '@ember/object';
import type Product from 'ember-ts/models/Product';
import type CartItem from 'ember-ts/models/CartItem';

export default class CartController extends Controller {
  @service('cart') cart!: CartService;

  get total(): number {
    return this.cart.totalPrice;
  }
  get cartItems(): CartItem[] {
    return this.cart.cartItems;
  }

  get isEmpty(): boolean {
    console.log(this.cart.itemCount);
    return this.cart.itemCount === 0;
  }

  @action
  removeFromCart(product: Product): void {
    this.cart.removeFromCart(product);
  }
}

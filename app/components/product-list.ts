import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import type Product from 'ember-ts/models/Product';
import type CartService from 'ember-ts/services/cart';

interface ProductListSignature {
  Args: {
    cart: CartService;
    products: Product[];
  };
}

export default class ProductListComponent extends Component<ProductListSignature> {
  @tracked productList: Product[] = [];

  get products(): Product[] {
    return this.args.products;
  }

  @action
  addToCart(product: Product): void {
    this.args.cart.addToCart(product);
  }
}

import Route from '@ember/routing/route';
import { service } from '@ember/service';
import ProductService from 'ember-ts/services/product';
import CartService from 'ember-ts/services/cart';
import type Product from 'ember-ts/models/Product';

interface IndexModel {
  getAllProducts: Product[];
  cartService: CartService;
}
export default class IndexRoute extends Route {
  @service('product') product!: ProductService;
  @service('cart') cart!: CartService;

  model(): IndexModel {
    return {
      getAllProducts: this.product.allProducts,
      cartService: this.cart,
    };
  }
}

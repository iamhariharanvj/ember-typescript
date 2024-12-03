import Route from '@ember/routing/route';
import { service } from '@ember/service';
import ProductService from 'ember-ts/services/product';
import CartService from 'ember-ts/services/cart';
export default class IndexRoute extends Route {
  @service('product') product!: ProductService;
  @service('cart') cart!: CartService;

  model() {
    console.log(this.cart);
    return {
      getAllProducts: this.product.allProducts,
      cartService: this.cart,
    };
  }
}

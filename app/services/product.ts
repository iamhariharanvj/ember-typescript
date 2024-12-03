import Service from '@ember/service';
import type Product from 'ember-ts/models/Product';

export default class ProductService extends Service {
  get allProducts(): Product[] {
    return [
      {
        id: '1',
        name: 'Laptop',
        description: 'High performance laptop',
        price: 999.99,
        imageUrl: 'https://placehold.co/200',
      },
      {
        id: '2',
        name: 'Headphones',
        description: 'Noise-canceling headphones',
        price: 199.99,
        imageUrl: 'https://placehold.co/200',
      },
      {
        id: '3',
        name: 'Smartphone',
        description: 'Latest model smartphone',
        price: 799.99,
        imageUrl: 'https://placehold.co/200',
      },
    ];
  }
}

declare module '@ember/service' {
  interface Registry {
    product: ProductService;
  }
}

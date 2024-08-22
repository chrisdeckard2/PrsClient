import { Product } from "../products/Product";


export class Requestline {
  id: number | undefined = undefined;
  productId: number | undefined = undefined;
  requestId: number | undefined = undefined;
  quantity: number | undefined = undefined;
  products: Product | undefined;
  request: Request | undefined;

  get isNew(): boolean {
    return this.id === undefined;
  }

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.productId) this.productId = initializer.productId;
    if (initializer.requestId) this.requestId = initializer.requestId;
    if (initializer.quantity) this.quantity = initializer.quantity;
    if (initializer.products) this.products = initializer.products;
  }
}

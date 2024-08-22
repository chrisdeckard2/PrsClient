import { Product } from "../products/Product";


export class Requestline {
  id: number | undefined = undefined;
  productId: number | undefined = undefined;
  actorId: number | undefined = undefined;
  quantity: number | undefined = undefined;
  product: Product | undefined;

  get isNew(): boolean {
    return this.id === undefined;
  }

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.productId) this.productId = initializer.productId;
    if (initializer.actorId) this.actorId = initializer.actorId;
    if (initializer.quantity) this.quantity = initializer.quantity;
    if (initializer.product) this.product = initializer.product;
  }
}

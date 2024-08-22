export class Product {
  id: number | undefined;
  partnbr = "";
  name = "";
  price: number | undefined;
  unit = "";
  vendorid = "";
  // phone: string | undefined;
  // email: string | undefined;
  

  get isNew(): boolean {
    return this.id === undefined;
  }

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.partnbr) this.partnbr = initializer.partnbr;
    if (initializer.name) this.name = initializer.name;
    if (initializer.price) this.price = initializer.price;
    if (initializer.unit) this.unit = initializer.unit;
    if (initializer.vendorid) this.vendorid = initializer.vendorid;
    
    
  }
}


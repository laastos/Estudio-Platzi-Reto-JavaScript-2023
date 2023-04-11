import { Product } from "./product.js";

export class WarrantyDecorator extends Product {
  WARRANTY_CHARGE = 20;
  constructor(product) {
    super(product.getPrice());
    this.description = product.getDescription();
  }

  getPrice() {
    return this.price + this.WARRANTY_CHARGE;
  }

  getDescription() {
    return `${this.description} con garantía`;
  }
}
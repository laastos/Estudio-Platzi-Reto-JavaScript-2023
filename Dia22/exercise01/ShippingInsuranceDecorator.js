
import { Product } from "./product.js";

export class ShippingInsuranceDecorator extends Product {
  INSURANCE_CHARGE = 20;
  constructor(product) {
    super(product.getPrice());
    this.description = product.getDescription();
  }

  getPrice() {
    return this.price + this.INSURANCE_CHARGE;
  }

  getDescription() {
    return `${this.description} con seguro de envío`;
  }
}
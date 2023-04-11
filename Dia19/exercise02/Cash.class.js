import { Pay } from "./Pay.class.js";

export class Cash extends Pay {
  constructor() {
    super();
  }
  makePay(quantity) {
    return super.makePay(quantity);
  }
}

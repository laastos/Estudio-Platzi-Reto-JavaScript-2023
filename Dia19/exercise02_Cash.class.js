import { Pay } from "./exercise02_Pay.class.js";

export class Cash extends Pay {
  constructor() {
    super();
  }
  makePay(quantity) {
    return super.makePay(quantity);
  }
}

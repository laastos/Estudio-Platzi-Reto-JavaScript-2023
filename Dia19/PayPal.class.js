import { Pay } from "./exercise02_Pay.class.js";

export class PayPal extends Pay {
  constructor(email) {
    super();
    this._email = email;
  }
  // Getters
  get email() { return this._email; }

  makePay(quantity) {
    return {
      ...super.makePay(quantity),
      platform: "PayPal",
      email: this._email,
    }
  }
}

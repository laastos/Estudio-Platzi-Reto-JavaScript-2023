import { Pay } from "./exercise02_Pay.class.js";

export class Card extends Pay {
  CARD_SIZE = 16;
  constructor(cardNumber) {
    super();
    this._cardNumber = cardNumber;
  }
  get cardNumber() {
    return this._cardNumber;
  }
  makePay(quantity) {
    if (this._cardNumber.length == this.CARD_SIZE) {
      return {
        ...super.makePay(quantity),
        lastCardNumbers: this._cardNumber.slice(-4),
      }
    } else {
      throw new Error("Card number size invalid")
    }
  }
}
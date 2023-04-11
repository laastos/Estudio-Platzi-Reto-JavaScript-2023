export class Pay {
  constructor() {
    this._realized = false;
    this._quantity = 0;
  }
  // Getters
  get realized() { return this._realized; }
  get quantity() { return this._quantity; }
  makePay(quantity) {
    this._realized = true;
    this._quantity = quantity;
    return {
      realized: this._realized,
      quantity: this._quantity,
    }
  }
}

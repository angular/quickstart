export class Rate {
  currency: string;
  code: string;
  mid: Number;

  constructor(currency: string, code: string, mid: Number) {
    this.currency = currency;
    this.code = code;
    this.mid = mid;
  }
}

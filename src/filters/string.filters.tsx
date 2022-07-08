export class StringFilters {
  static formatMoney(money: number, suffix = "&#8358;"): string {
    let currency = `${suffix}0.00`;

    if (money) {
      const money$1 = Number(money);
      currency = `${suffix}${money$1
        .toFixed(0)
        .replace(/\d(?=(\d{3})+$)/g, "$&,")}`;
    }

    return currency;
  }

  static formatCount(count: number | string | undefined) {
    if (!count) {
      return "0";
    }
    const count$1 = Number(count);
    return `${count$1.toFixed(0).replace(/\d(?=(\d{3})+$)/g, "$&,")}`;
  }
}

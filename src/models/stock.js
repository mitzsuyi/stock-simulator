export class StockModel {
  constructor(raw) {
    let {bidPrice, askPrice, name, symbol} = raw
    this.bidPrice = bidPrice
    this.askPrice = askPrice
    this.name = name
    this.symbol = symbol
    this.raw = raw
  }
}
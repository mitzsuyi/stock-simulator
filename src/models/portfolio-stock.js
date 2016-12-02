export class PortfolioStockModel {
  constructor({stock, quantity, paid}) {
    this.stock = stock 
    this.quantity = parseInt(quantity)
    this.paid = parseFloat(paid)
  }
  add({stock, quantity, paid}) {
    if (this.stock.symbol == stock.symbol) {
      this.stock = stock 
      this.quantity += parseInt(quantity) 
      this.paid += paid
      return true
    } 
  }
  remove({stock, quantity, deduct}) {
    if (this.stock.symbol == stock.symbol && this.quantity >= quantity) {
      this.quantity -= quantity
      if (this.paid >= deduct) {
        this.paid -= deduct
        return true
      }
    } 
  }
}
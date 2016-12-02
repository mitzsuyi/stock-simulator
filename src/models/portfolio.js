let INITIAL_CASH = 100000

import {PortfolioStockModel} from 'models/portfolio-stock'

export class PortfolioModel {
  constructor({cash=INITIAL_CASH, stocks=new Map()}) {
    this.cash = cash
    this.stocks = new Map()
    stocks.forEach((value, key) => {
      this.stocks.set(key, new PortfolioStockModel(value))
    })
  }
  canBuy(stock, quantity) {
    return this.cash >= quantity * stock.askPrice
  }
  canSell(stock, quantity) {
    if (this.hasStock(stock)) {
      if (this.getStock(stock).quantity >= quantity) {
        return true
      }
    }
    return false
  }
  hasStock(stock) {
    return this.stocks.has(stock.symbol)
  }
  buyStock(stock, quantity) {
    let paid = stock.askPrice * quantity
    let params = {stock:stock, quantity:quantity, paid:paid}
    let added = false
    if (this.hasStock(stock)) {
      added = this.getStock(stock).add(params)
    } else {
      let portfolioStock = new PortfolioStockModel(params)
      this.stocks.set(stock.symbol, portfolioStock)
      added = true
    }
    if (added) {
      this.cash -= paid
    }
    return added
  }
  getStock(stock) {
    return this.stocks.get(stock.symbol)
  }
  sellStock(stock, quantity) {
    let deduct = stock.bidPrice * quantity
    let params = {stock:stock, quantity:quantity, deduct: deduct}
    let removed = false
    let portFolioStock 
    if (this.hasStock(stock)) {
      portFolioStock = this.getStock(stock)
      removed = portFolioStock.remove(params)
    }
    if (removed) {
      this.cash += deduct
      if (portFolioStock.quantity == 0) {
        this.stocks.delete(stock.symbol)
      }
    }
    return removed
  }
}
import {computedFrom} from 'aurelia-framework'
import {AppBase} from 'app-base'

export class Stock extends AppBase{

  @computedFrom("app.currentStock")
  get hasCurrentStock() {
    return !this.app.currentStock == false 
  } 

  @computedFrom("quantity")
  get quantityValid() {
    return this.quantity > 0
  } 

  @computedFrom("quantityValid", "app.currentStock", "app.currentPortolio", "app.currentPortfolio.cash")
  get quantityValidAndHasStock() {
    return this.quantityValid && this.app.currentPortfolio && this.portfolioHasStock()
  } 

  @computedFrom("quantityValid", "app.currentStock", "app.currentPortolio", "app.currentPortfolio.cash")
  get quantityValidAndHasEnoughCash() {
    return this.quantityValid && this.app.currentStock && this.app.currentPortfolio && this.portfolioHasEnoughCash()
  } 

  buyStock() {
    if (this.portfolioHasEnoughCash()) {
      if (this.app.currentPortfolio.buyStock(this.app.currentStock, this.quantity)) {
        this.app.savePortfolio()
          .then(() => this.app.notifier.notification.success("stock bought successfully"))
      } else {
        this.app.notifier.notification.error("stock could not be purchased")
      }
    } else {
      this.app.notifier.notification.error("Not enough cash in your portfolio")
    }
  }

  sellStock() {
     if (this.portfolioHasEnoughStock()) {
      if (this.app.currentPortfolio.sellStock(this.app.currentStock, this.quantity)) {
        this.app.savePortfolio()
          .then(() => this.app.notifier.notification.success("stock sold successfully"))
      } else {
        this.app.notifier.notification.error("stock could not be sold")
      }
    } else {
      this.app.notifier.notification.error("Stock quantity not enough in portfolio")
    } 
  }
  portfolioHasEnoughCash() {
    return this.app.currentPortfolio.canBuy(this.app.currentStock, this.quantity) 
  }
  portfolioHasEnoughStock() {
    return this.app.currentPortfolio.canSell(this.app.currentStock, this.quantity) 
  }
  portfolioHasStock() {
    return this.app.currentPortfolio.hasStock(this.app.currentStock) 
  }
}
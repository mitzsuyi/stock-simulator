import {bindable} from 'aurelia-framework'
import {computedFrom} from 'aurelia-framework'
import {StockApi} from 'stock-api'
import {App} from 'app'
import {StockModel} from 'models/stock'

@bindable("klass")
export class Lookup {
  symbol = undefined
  static inject() {return [StockApi, App]}
  constructor(stockApi, app) {
    this.stockApi = stockApi
    this.app = app
  }
  @computedFrom("symbol")
  get disableLookup() {
    return !(this.symbol && this.symbol.length > 0)
  }
  isLoading = false
  lookupSymbol() {
    this.isLoading = true
    this.stockApi.getStock(this.symbol).then((result)=> {
      let response = result.response
      let error =  response['null']
      if (error) {
        this.app.notifier.notification.error(error.error.message);
      } else {
        this.app.currentStock = new StockModel(response[this.symbol])
      }
      this.isLoading = false
    }).catch((error) => {
      console.log('error', error)
      this.isLoading = false
      this.app.notifier.notification.error('Yikes, lookup error');
    }) 
  }
}
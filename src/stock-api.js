let STOCK_API_URL="https://data.benzinga.com/rest/richquoteDelayed"
import {inject} from 'aurelia-framework'
import {App} from 'app'

@inject(App)
export class StockApi {
  constructor(app) {
    this.netClient = app.net.client() 
  }
  getStock(symbol) {
    let stock = `${STOCK_API_URL}?symbols=${symbol}`
    return this.netClient.jsonp(
      stock,
      'callback'
    )
      
  } 
}
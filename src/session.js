import localForage from 'localforage'

let PORTFOLIO_KEY = 'simple:exchange:portfolio'

import {PortfolioModel} from 'models/portfolio'

export class Session {
  newPortfolio() {
    return localForage.setItem(PORTFOLIO_KEY, new PortfolioModel({}))
  }
  getPortfolio() {
    return localForage.getItem(PORTFOLIO_KEY)
  }
  setPortfolio(portfolio) {
    return localForage.setItem(PORTFOLIO_KEY, portfolio)
  }
  clear() {
    return localForage.clear()
  }
}
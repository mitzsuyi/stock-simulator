import {computedFrom} from 'aurelia-framework'
import {Session} from 'session'
import {Net} from 'net'
import {Notifier} from 'notifier'
import {PortfolioModel} from 'models/portfolio'

export class App {
  static inject() {return [Session, Net, Notifier]}
  
  constructor(session, net, notifier) {
    this.session=session
    this.net = net
    this.notifier = notifier
  }

  configureRouter(config, router) {
    config.title = 'Simple Stock Exchange'
    config.options.pushState = true;    
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
    ]);
    config.mapUnknownRoutes('not-found');
    this.router = router;
  }
  newPortfolio() {
    this.session.newPortfolio().then((portfolio) => this.setPortfolio(portfolio))
  }
  activate() {
    this.session.getPortfolio().then((portfolio) => this.setPortfolio(portfolio))
  }
  savePortfolio() {
    return this.session.setPortfolio(this.currentPortfolio)
  }
  setPortfolio(portfolio) {
    if (portfolio) {
      this.currentPortfolio = new PortfolioModel(portfolio)
    } else {
      this.currentPortfolio = portfolio
    }
  }
  restart() {
    this.session.clear().then(() => this.setPortfolio())
  }
  @computedFrom("currentPortfolio")
  get justLanded() {
    return !this.currentPortfolio 
  }
}

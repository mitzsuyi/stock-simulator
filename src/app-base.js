import {App} from 'app'

export class AppBase {
  static inject() {
  return [App]
 }
 constructor(app) {
  this.app = app
 }
}
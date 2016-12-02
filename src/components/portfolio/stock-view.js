import {bindable} from 'aurelia-framework'

export class StockView {
   @bindable stock
   openModal() {
    this.modal.open()
   }
}


export class KeysValueConverter {
  toView(obj) {
    return Reflect.ownKeys(obj)
  }
}
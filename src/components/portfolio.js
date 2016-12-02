import {AppBase} from 'app-base'

export class Portfolio extends AppBase {
}

import accounting from 'accounting'

export class CurrencyFormatValueConverter {
  toView(value) {
    return accounting.formatMoney(value)      
   }
}

export class NumberFormatValueConverter {
  toView(value) {
    return accounting.formatNumber(value, 2)      
   }
}
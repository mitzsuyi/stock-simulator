import {inject} from 'aurelia-framework'
import {Notification} from 'aurelia-notification';

 import "humane-js/themes/libnotify.css!";

@inject(Notification)
export class Notifier {
  constructor(notification) {
    this.notification = notification
  }
}
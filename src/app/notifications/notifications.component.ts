import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  template: `<div class="alert alert-danger" [hidden]="displayNotification">
                <p>This website uses cookies for better user experience.</p>
                <div class="close">
                  <button class="btn" (click)="closeNotification()">X</button>
                </div>
              </div>`,
  styles: ['div{margin: 10px 0; padding: 10px 20px; background-color: #fad7a0; text-align: center}', 'p{font-size: 14px}', '.close{float: right; margin-top: -48px;}']
})
export class NotificationsComponent {
  displayNotification: boolean = false;

  closeNotification() {
    this.displayNotification = true;
  }
}

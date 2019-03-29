import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NotificationService } from '@progress/kendo-angular-notification';

@Component({
    selector: 'my-app',
    template: `
       <button class="k-button" (click)="show()">Save data</button>
    `,
    styles: [`
        .button-notification {
            padding: 10px 5px;
            color: #313536;
        }
    `],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    constructor(
        private notificationService: NotificationService
    ) {}

    public show(): void {
        this.notificationService.show({
            content: 'Your data has been saved. Time for tea!',
            cssClass: 'button-notification',
            animation: { type: 'slide', duration: 400 },
            position: { horizontal: 'center', vertical: 'bottom' },
            type: { style: 'success', icon: true },
            closable: true
        });
    }
}

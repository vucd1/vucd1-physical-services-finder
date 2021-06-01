import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AccessibilityPopoverComponent } from '../accessibility-popover/accessibility-popover.component';

@Component({
  selector: 'app-accessibility-toggle',
  templateUrl: './accessibility-toggle.component.html',
  styleUrls: ['./accessibility-toggle.component.scss'],
})
export class AccessibilityToggleComponent implements OnInit {
  checked
  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}
  onClick(event: Event){
    console.log(event);
  };
    async presentPopover(event: Event) {
      if (true){
        const popover = await this.popoverController.create({
          component: AccessibilityPopoverComponent,
          cssClass: 'my-custom-class',
          event: event,
          translucent: true
        });
        await popover.present();

        const { role } = await popover.onDidDismiss();
      }
    }
}

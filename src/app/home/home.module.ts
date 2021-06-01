import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { NavbarComponent } from '../navbar/navbar.component';
import { PopoverComponent } from '../popover/popover.component';
import { AccessibilityToggleComponent} from '../accessibility-toggle/accessibility-toggle.component';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,
    NavbarComponent, 
    PopoverComponent,
    AccessibilityToggleComponent
  ]
})
export class HomePageModule {}

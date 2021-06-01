import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';
import {AccessibilityToggleComponent} from '../accessibility-toggle/accessibility-toggle.component';
import {PopoverComponent} from '../popover/popover.component';
import { SearchPage } from './search.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
  ],
  declarations: [SearchPage,
  AccessibilityToggleComponent,
  PopoverComponent]
})
export class SearchPageModule {}

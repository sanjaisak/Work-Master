import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewWorkPageRoutingModule } from './view-work-routing.module';

import { ViewWorkPage } from './view-work.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewWorkPageRoutingModule
  ],
  declarations: [ViewWorkPage]
})
export class ViewWorkPageModule {}

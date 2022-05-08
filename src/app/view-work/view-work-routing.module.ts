import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewWorkPage } from './view-work.page';

const routes: Routes = [
  {
    path: '',
    component: ViewWorkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewWorkPageRoutingModule {}

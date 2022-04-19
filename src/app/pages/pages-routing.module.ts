import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasePageWrapperComponent } from './templates/base-page-wrapper';

const routes: Routes = [
  {
    path: '',
    component: BasePageWrapperComponent,
    loadChildren: () => import('./top').then((mod) => mod.TopModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

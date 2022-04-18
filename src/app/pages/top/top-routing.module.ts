import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopPageComponent } from './components';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TopPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopRoutingModule {}

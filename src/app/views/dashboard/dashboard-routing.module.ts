import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Routeguard } from 'src/app/routeguard.guard';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: $localize`Dashboard`
    },
    canActivate:[Routeguard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}

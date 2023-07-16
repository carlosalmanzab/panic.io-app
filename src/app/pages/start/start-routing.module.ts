import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { startPage } from './start.page';

const routes: Routes = [
  {
    path: '',
    component: startPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartPageRoutingModule {}

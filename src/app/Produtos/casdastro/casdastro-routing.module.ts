import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasdastroPage } from './casdastro.page';

const routes: Routes = [
  {
    path: '',
    component: CasdastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasdastroPageRoutingModule {}

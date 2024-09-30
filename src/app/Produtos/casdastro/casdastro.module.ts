import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasdastroPageRoutingModule } from './casdastro-routing.module';

import { CasdastroPage } from './casdastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasdastroPageRoutingModule
  ],
  declarations: [CasdastroPage]
})
export class CasdastroPageModule {}

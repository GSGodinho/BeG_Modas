import { NgModule } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PreloadAllModules, RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'casdastro/:id',
    loadChildren: () => import('./Produtos/casdastro/casdastro.module').then( m => m.CasdastroPageModule)
  },
  {
    path: 'listagem',
    loadChildren: () => import('./Produtos/listagem/listagem.module').then( m => m.ListagemPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [
    FormBuilder, {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ]
})
export class AppRoutingModule { }

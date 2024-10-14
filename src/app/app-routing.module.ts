import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: 'casdastro',
    loadChildren: () => import('./Produtos/casdastro/casdastro.module').then( m => m.CasdastroPageModule)
  },  {
    path: 'listagem',
    loadChildren: () => import('./Produtos/listagem/listagem.module').then( m => m.ListagemPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

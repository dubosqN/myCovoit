import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '', redirectTo: 'connexion', pathMatch: 'full', },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'utilisateur-ajouter',
    loadChildren: () => import('./utilisateur-ajouter/utilisateur-ajouter.module').then( m => m.UtilisateurAjouterPageModule)
  },
  {
    path: 'utilisateur-modifier',
    loadChildren: () => import('./utilisateur-modifier/utilisateur-modifier.module').then( m => m.UtilisateurModifierPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

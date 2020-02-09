import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'recipe/:id',
    loadChildren: () => import('./recipe/recipe/recipe.module').then( m => m.RecipePageModule)
  },
  {
    path: 'bookmarks',
    loadChildren: () => import('./recipe/bookmarks/bookmarks.module').then( m => m.BookmarksPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

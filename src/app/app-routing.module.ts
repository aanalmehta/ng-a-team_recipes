import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeCellComponent } from './recipe-cell/recipe-cell.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './services/auth-guard.service'
import { RecipeResolver } from './recipe-list/recipe-resolver.service';

const appRoute: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add-new', component: AddRecipeComponent, canActivate: [AuthGuard] },
  {
    path: 'recipes', component: RecipeListComponent, canActivateChild: [AuthGuard], children: [
      { path: ':id', component: RecipeCellComponent, resolve: { recipe: RecipeResolver } }
    ]
  },
  { path: 'recipe/:id', component: RecipeCellComponent },
  { path: 'not-found', component: PageNotFoundComponent, data: { message: 'Page not found!' } },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

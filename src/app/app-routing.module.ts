import {RouterModule, Routes} from '@angular/router';
import {RecipeComponent} from './components/recipe/recipe.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: '', component: RecipeComponent },
  { path: '*', component: RecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

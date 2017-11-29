import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {RecipeService} from '../../services/recipe/recipe.service';
import {AppState} from '../../statemanagement/state/app.state';
import {Recipe} from '../../model/recipe/recipe.model';
import {SetAllRecipes} from '../../statemanagement/actions/data/recipe.action';

@Injectable()
export class RecipeSandbox {

  recipes$ = this.store.select(state => state.data.recipes);

  constructor(private store: Store<AppState>,
              private recipeService: RecipeService) {
  }

  public setAllRecipes(): void {
    this.recipeService.getAllRecipes(this.handleSetAllRecipes);
  }

  private handleSetAllRecipes = (recipes: Array<Recipe>) => {
    this.store.dispatch(new SetAllRecipes(recipes));
  };
}


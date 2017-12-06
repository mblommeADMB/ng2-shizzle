import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {RecipeService} from '../services/recipe.service';
import {AppState} from '../statemanagement/state/app.state';
import {Recipe} from '../model/recipe.model';
import {SetAllRecipes} from '../statemanagement/actions/data/recipe.action';
import {Label} from '../model/label.model';
import {LabelSandbox} from './label.sandbox';

@Injectable()
export class RecipeSandbox {
  recipes$ = this.store.select(state => state.data.recipes);

  constructor(private store: Store<AppState>,
              private recipeService: RecipeService,
              private labelSandbox: LabelSandbox) {
  }

  public setAllRecipes(): void {
    this.recipeService
      .getAll()
      .then(this.handleSetAllRecipes);
  }

  public attachLabel(recipe: Recipe, newLabel: Label) {
    if (!recipe.labels[newLabel.id]) {
      this.recipeService.attachLabel(recipe, newLabel);
    }
  }

  private handleSetAllRecipes = (recipes: Array<Recipe>) => {
   this.store.dispatch(new SetAllRecipes(recipes));
  };

}

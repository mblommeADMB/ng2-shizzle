import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {RecipeService} from '../services/recipe.service';
import {AppState} from '../statemanagement/state/app.state';
import {Recipe} from '../model/recipe.model';
import {SetAllRecipes} from '../statemanagement/actions/data/recipe.action';
import {Label} from "../model/label.model";
import {LabelSandbox} from "./label.sandbox";

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

  public attachLabel(recipe: Recipe, newLabel: Label): void {
    if (!recipe.labels.find((label: Label) => label.key === newLabel.key)) {
      this.recipeService.attachLabel(recipe, newLabel);
    }
  }

  private handleSetAllRecipes = (recipes: Array<Recipe>) => {
    this.labelSandbox
      .getAllLabels()
      .then((labels: Array<Label>) => {
        recipes.forEach((recipe: Recipe) => {
          labels.forEach((label) => {
            this.attachLabel(recipe, label);
          })
        });
      });

    this.store.dispatch(new SetAllRecipes(recipes));
  };
}


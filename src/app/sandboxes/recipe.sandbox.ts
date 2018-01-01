import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {RecipeService} from '../services/recipe.service';
import {AppState} from '../statemanagement/state/app.state';
import {Recipe} from '../model/recipe.model';
import {SetAllRecipes} from '../statemanagement/actions/data/recipe.action';
import {Label} from '../model/label.model';
import {RecipeSummary} from '../components/recipe/recipe-summary/recipe-summary.viewmodel';
import {AddRecipeSummary} from '../statemanagement/actions/data/recipe-summary.action';

@Injectable()
export class RecipeSandbox {
    recipes$ = this.store.select(state => state.data.recipes);
    recipeSummaries$ = this.store.select(state => state.data.recipeSummaries)

    constructor(private store: Store<AppState>,
                private recipeService: RecipeService) {
    }

    public setAllRecipes(): void {
        this.recipeService
            .getAll()
            .then(this.handleSetAllRecipes);
    }

    public addRecipeSummary(recipeSummary: RecipeSummary) {
        this.store.dispatch(new AddRecipeSummary(recipeSummary));
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

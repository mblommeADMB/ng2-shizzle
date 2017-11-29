import { isActionUnique } from '../util';
import { Action } from '@ngrx/store';
import { Recipe } from '../../../model/recipe/recipe.model';

export const RecipeActionType = {
    'SET_ALL_RECIPES': isActionUnique<'SET_ALL_RECIPES'>('SET_ALL_RECIPES')
};

export class SetAllRecipes implements Action {
    type = RecipeActionType.SET_ALL_RECIPES;
    payload: Readonly<Array<Recipe>>;

    constructor(recipes: Array<Recipe>) {
        this.payload = recipes;
    }
}

export type RecipeAction = SetAllRecipes;

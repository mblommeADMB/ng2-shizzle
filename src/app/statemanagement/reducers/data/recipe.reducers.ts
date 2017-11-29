import {Recipe} from '../../../model/recipe/recipe.model';
import {ActionReducer} from '@ngrx/store/store';
import {RecipeAction, RecipeActionType} from '../../actions/data/recipe.action';

export const recipesReducer: ActionReducer<Recipe[]> = (state: Recipe[], action: RecipeAction) => {

  switch(action.type) {
    case (RecipeActionType.SET_ALL_RECIPES):
      return [].concat(action.payload);
    default:
      return state;
  }
};

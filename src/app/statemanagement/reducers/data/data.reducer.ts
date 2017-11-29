import {DataState, initialDataState} from '../../state/data/data.state';
import { combineReducers, Action } from '@ngrx/store';
import {recipesReducer} from './recipe.reducers';

export function dataReducer(state: DataState, action: Action) {
  return combineReducers({
    recipes: recipesReducer
  }, initialDataState)(state, action);
}

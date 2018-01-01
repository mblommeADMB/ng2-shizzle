import {DataState, initialDataState} from '../../state/data/data.state';
import {combineReducers, Action} from '@ngrx/store';
import {recipesReducer} from './recipe.reducers';
import {recipeSummariesReducer} from './recipe-summary.reducer';

export function dataReducer(state: DataState, action: Action) {
    return combineReducers({
        recipes: recipesReducer,
        recipeSummaries: recipeSummariesReducer,
    }, initialDataState)(state, action);
}

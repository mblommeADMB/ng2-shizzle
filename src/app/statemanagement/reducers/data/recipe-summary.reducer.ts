import {ActionReducer} from '@ngrx/store/store';
import {RecipeSummary} from '../../../components/recipe/recipe-summary/recipe-summary.viewmodel';
import {RecipeSummaryAction, RecipeSummaryActionType} from '../../actions/data/recipe-summary.action';

export const recipeSummariesReducer: ActionReducer<RecipeSummary[]> = (state: RecipeSummary[], action: RecipeSummaryAction) => {

    switch(action.type) {
        case (RecipeSummaryActionType.ADD_RECIPE_SUMMARY):
            return [...state, action.payload];
        default:
            return state;
    }
};

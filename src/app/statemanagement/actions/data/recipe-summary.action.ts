import {isActionUnique} from '../util';
import {RecipeSummary} from '../../../components/recipe/recipe-summary/recipe-summary.viewmodel';
import {Action} from '@ngrx/store';

export const RecipeSummaryActionType = {
    'ADD_RECIPE_SUMMARY': isActionUnique<'ADD_RECIPE_SUMMARY'>('ADD_RECIPE_SUMMARY')
};

export class AddRecipeSummary implements Action {
    type = RecipeSummaryActionType.ADD_RECIPE_SUMMARY;
    payload: Readonly<RecipeSummary>;

    constructor(recipeSummary: RecipeSummary) {
        this.payload = recipeSummary;
    }
}

export type RecipeSummaryAction = AddRecipeSummary;

import { Recipe } from '../../../model/recipe.model';
import { RecipeSummary } from "../../../components/recipe/recipe-summary/recipe-summary.viewmodel";

export type DataState = Readonly<{
    recipes: Array<Recipe>,
    recipeSummaries: Array<RecipeSummary>,
}>;

export const initialDataState: DataState = {
    recipes : [],
    recipeSummaries: [],
};


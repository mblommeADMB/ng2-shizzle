import { Recipe } from "../../../model/recipe/recipe.model";

export type DataState = Readonly<{
    recipes: Array<Recipe>
}>;

export const initialDataState: DataState = {
    recipes : []
}


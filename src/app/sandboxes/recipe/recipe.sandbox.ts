import { Injectable } from "@angular/core";
import { RecipeService } from "../../services/recipe/recipe.service";

@Injectable()
export class RecipeSandbox {

    constructor(private recipeService: RecipeService) { }

    public getAllRecipes() :void {
        this.recipeService
            .getAllRecipes()
            .then(function (snapshot) {
                console.log(snapshot.val());
            });
    }

}
import {Injectable} from '@angular/core';
import {Recipe} from '../model/recipe.model';
import {RecipeConverter} from '../model/converters/recipe.converter';
import {AbstractService} from './abstract.service';
import {Collection} from './generic.service';
import {FireBaseService} from './firebase.service';
import {Label} from "../model/label.model";

export const RECIPES = 'recipes';

@Injectable()
@Collection(RECIPES)
export class RecipeService extends AbstractService<Recipe> {

  constructor(private fireBaseService: FireBaseService,
              private recipeConverter: RecipeConverter) {
    super(fireBaseService, recipeConverter);
  }

  attachLabel(recipe: Recipe, label: Label) {
    this.modify(recipe, {labels: [...recipe.labels, label]});
  }
}

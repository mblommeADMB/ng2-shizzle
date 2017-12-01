import { RecipeSandbox } from '../../sandboxes/recipe.sandbox';
import {Component, OnInit} from '@angular/core';
import {RecipeSummary} from './recipe-summary/recipe-summary.viewmodel';
import {Recipe} from '../../model/recipe.model';
import {RecipeSummaryConverter} from './recipe-summary/recipe-summary.converter';
import {LabelSandbox} from '../../sandboxes/label.sandbox';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  recipeSummaries: Array<RecipeSummary> = [];

  constructor(private recipeSandbox: RecipeSandbox,
              private labelSandbox: LabelSandbox,
              private recipeSummaryConverter: RecipeSummaryConverter) {
    recipeSandbox.setAllRecipes();
  }

  ngOnInit() {
    this.recipeSandbox.recipes$.subscribe(
      (recipes: Array<Recipe>) => {
      			recipes.forEach((recipe: Recipe) => {
          		this.recipeSummaries.push(this.recipeSummaryConverter.to(recipe));
      		})
    })
  }

}

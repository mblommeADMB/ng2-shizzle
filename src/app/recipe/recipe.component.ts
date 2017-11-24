import {Component, OnInit} from '@angular/core';
import {createRecipeSummary, RecipeSummary} from "./recipe-summary/recipe-summary.model";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipeSummaries: Array<RecipeSummary> = [];

  constructor() { }

  ngOnInit() {
    let recipeSummary: RecipeSummary = createRecipeSummary();
    recipeSummary.title = 'Wortelpuree met kip';
    recipeSummary.description = 'Gestoofde worteltjes in puree met gebakken kip.';
    recipeSummary.pictureUrl = 'https://radio2.be/sites/default/files/styles/1200x630/public/images/articles/wortelsla.jpg?itok=OGg_0XsT';
    recipeSummary.pictureCap = 'Heerlijke worteltjes';

    this.recipeSummaries.push(recipeSummary);
    this.recipeSummaries.push(recipeSummary);
    this.recipeSummaries.push(recipeSummary);
    this.recipeSummaries.push(recipeSummary);
    this.recipeSummaries.push(recipeSummary);
    this.recipeSummaries.push(recipeSummary);
  }

}

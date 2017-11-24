import {Component, OnInit} from '@angular/core';
import {createRecipeSummary, RecipeSummary} from "./recipe-summary/recipe-summary.model";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipeSummary: RecipeSummary = createRecipeSummary();

  constructor() { }

  ngOnInit() {
    this.recipeSummary.title = 'Wortelpuree met kip';
    this.recipeSummary.description = 'Gestoofde worteltjes in puree met gebakken kip.';
    this.recipeSummary.pictureUrl = 'https://radio2.be/sites/default/files/styles/1200x630/public/images/articles/wortelsla.jpg?itok=OGg_0XsT';
    this.recipeSummary.pictureCap = 'Heerlijke worteltjes';
  }

}

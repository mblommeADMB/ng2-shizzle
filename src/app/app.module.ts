import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RecipeComponent} from "./recipe/recipe.component";
import {RecipeSummaryComponent} from "./recipe/recipe-summary/recipe-summary.component";


@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeSummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

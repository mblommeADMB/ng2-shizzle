import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RecipeComponent} from "./components/recipe/recipe.component";
import {RecipeSummaryComponent} from "./components/recipe/recipe-summary/recipe-summary.component";
import { RecipeService } from './services/recipe/recipe.service';
import { RecipeSandbox } from './sandboxes/recipe/recipe.sandbox';


@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeSummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    RecipeService,
    RecipeSandbox,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

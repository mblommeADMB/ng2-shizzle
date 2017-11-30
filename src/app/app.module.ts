import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RecipeComponent} from "./components/recipe/recipe.component";
import {RecipeSummaryComponent} from "./components/recipe/recipe-summary/recipe-summary.component";
import { RecipeService } from './services/recipe/recipe.service';
import { RecipeSandbox } from './sandboxes/recipe/recipe.sandbox';
import {rootReducer} from './statemanagement/reducers/root.reducer';
import {initialAppState} from './statemanagement/state/app.state';
import {StoreModule} from "@ngrx/store";
import {RecipeSummaryConverter} from './components/recipe/recipe-summary/recipe-summary.converter';

// Dev tools
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {RecipeConverter} from "./model/recipe/recipe.converter";
import { HeaderComponent } from './components/header/header.component';

const DEV_TOOLS = (environment.production) ? [] : [StoreDevtoolsModule.instrument({ maxAge: 5 })];

const STORE = StoreModule.forRoot(rootReducer, {
    initialState: initialAppState
  });

const CONVERTERS = [
  RecipeSummaryConverter,
  RecipeConverter,
];

const COMPONENTS = [
  AppComponent,
  RecipeComponent,
  RecipeSummaryComponent
];

const SERVICES = [
  RecipeService,
];

const SANDBOXES = [
  RecipeSandbox,
];

@NgModule({
  declarations: [
    COMPONENTS,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    STORE,
    DEV_TOOLS,
  ],
  providers: [
    CONVERTERS,
    SERVICES,
    SANDBOXES,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

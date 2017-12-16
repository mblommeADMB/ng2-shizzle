import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RecipeComponent} from './components/recipe/recipe.component';
import {RecipeSummaryComponent} from './components/recipe/recipe-summary/recipe-summary.component';
import {RecipeService} from './services/recipe.service';
import {RecipeSandbox} from './sandboxes/recipe.sandbox';
import {rootReducer} from './statemanagement/reducers/root.reducer';
import {initialAppState} from './statemanagement/state/app.state';
import {StoreModule} from '@ngrx/store';
import {RecipeSummaryConverter} from './components/recipe/recipe-summary/recipe-summary.converter';
// Dev tools
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {RecipeConverter} from './model/converters/recipe.converter';
import {HeaderComponent} from './components/header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {LabelConverter} from './model/converters/label.converter';
import {LabelService} from './services/label.service';
import {LabelSandbox} from './sandboxes/label.sandbox';
import {FireBaseService} from './services/firebase.service';
import {IconsComponent} from './components/icons/icons.component';
import {ActionIconComponent} from './components/icons/action-icon/action-icon.component';
import {EmotionService} from './services/emotion.service';
import {EmotionReferenceConverter} from './model/converters/emotion-reference.converter';
import {EmotionsSandbox} from './sandboxes/emotions.sandbox';
import {ComponentLoaderService} from './services/component-loader.service';

const DEV_TOOLS = (environment.production) ? [] : [StoreDevtoolsModule.instrument({maxAge: 5})];

const STORE = StoreModule.forRoot(rootReducer, {
    initialState: initialAppState
});

const CONVERTERS = [
    RecipeSummaryConverter,
    RecipeConverter,
    LabelConverter,
    EmotionReferenceConverter,
];

const COMPONENTS = [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeSummaryComponent,
    IconsComponent,
    ActionIconComponent,
];

const SERVICES = [
    FireBaseService,
    RecipeService,
    LabelService,
    EmotionService,
    ComponentLoaderService,
];

const SANDBOXES = [
    RecipeSandbox,
    LabelSandbox,
    EmotionsSandbox,
];

const MODULES = [
    AppRoutingModule,
];

@NgModule({
    declarations: [
        COMPONENTS,
    ],
    imports: [
        BrowserModule,
        STORE,
        DEV_TOOLS,
        MODULES,
    ],
    providers: [
        CONVERTERS,
        SERVICES,
        SANDBOXES,
    ],
    entryComponents: [
        ActionIconComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

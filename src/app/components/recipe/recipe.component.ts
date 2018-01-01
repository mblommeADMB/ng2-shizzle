import {RecipeSandbox} from '../../sandboxes/recipe.sandbox';
import {Component, OnInit} from '@angular/core';
import {RecipeSummary} from './recipe-summary/recipe-summary.viewmodel';
import {Recipe} from '../../model/recipe.model';
import {RecipeSummaryConverter} from './recipe-summary/recipe-summary.converter';
import {ActionIcon} from "../icons/action-icon/action-icon.model";
import {ActionIconBuilder} from "../icons/action-icon/action-icon.builder";
import {ActionBarComponent} from "../icons/action-bar/action-bar.component";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

    recipeSummaries$: Observable<Array<RecipeSummary>> = this.recipeSandbox.recipeSummaries$;

    constructor(private recipeSandbox: RecipeSandbox,
                private recipeSummaryConverter: RecipeSummaryConverter) {
        recipeSandbox.setAllRecipes();
    }

    ngOnInit() {
        this.recipeSandbox.recipes$.subscribe(
            (recipes: Array<Recipe>) => {
                recipes.forEach((recipe: Recipe) => {
                    const recipeSummary: RecipeSummary = this.recipeSummaryConverter.to(recipe);
                    this.recipeSandbox.addRecipeSummary(recipeSummary);
                    recipeSummary.actionBarItems$ = Observable.of(this.createActionBarItems());
                })
            })
    }

    private createActionBarItems(): Array<ActionIcon> {
        const likeAction: ActionIcon = ActionIconBuilder.createActionIcon('#emoticon')
            .withAction(null)
            .withLabel('')
            .withSvgStyle('icon--lg')
            .withMenu(ActionBarComponent)
            .withMenuData({actionIcons$: Observable.of(this.createLikeActions())})
            .build();

        const starAction: ActionIcon = ActionIconBuilder.createActionIcon('#star')
            .withAction(null)
            .withLabel('')
            .withSvgStyle('icon--lg')
            .build();

        const rateAction: ActionIcon = ActionIconBuilder.createActionIcon('#like')
            .withAction(null)
            .withLabel('')
            .withSvgStyle('icon--lg')
            .build();
        const shareAction: ActionIcon = ActionIconBuilder.createActionIcon('#share')
            .withAction(null)
            .withLabel('')
            .withSvgStyle('icon--lg')
            .build();
        return [likeAction, starAction, rateAction, shareAction];
    }

    private createLikeActions(): Array<ActionIcon> {
        const sadAction: ActionIcon = ActionIconBuilder.createActionIcon('#sad')
            .withSvgStyle('icon--lg')
            .withAction(() => {
                console.log('sad action')
            })
            .build();

        const inLoveAction: ActionIcon = ActionIconBuilder.createActionIcon('#sad')
            .withSvgStyle('icon--lg')
            .withAction(() => {
                console.log('in love action')
            })
            .build();

        const scaredAction: ActionIcon = ActionIconBuilder.createActionIcon('#sad')
            .withSvgStyle('icon--lg')
            .withAction(() => {
                console.log('scared action')
            })
            .build();

        return [sadAction, inLoveAction, scaredAction];
    }
}

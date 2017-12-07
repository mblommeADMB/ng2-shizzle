import {Converter} from '../../../model/converters/converter';
import {Recipe} from '../../../model/recipe.model';
import {createRecipeSummary, RecipeSummary} from './recipe-summary.viewmodel';
import {Injectable} from '@angular/core';
import {LabelSandbox} from '../../../sandboxes/label.sandbox';
import {Label} from '../../../model/label.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class RecipeSummaryConverter implements Converter<Recipe, RecipeSummary> {

  constructor(private labelSandBox: LabelSandbox) {}

  to(source: Recipe): RecipeSummary {
    let recipeSummary: RecipeSummary = createRecipeSummary();
    recipeSummary.title = source.name;
    recipeSummary.pictureUrl = source.picture;
    recipeSummary.description = source.description;
    recipeSummary.pictureCap = 'some pic';
    recipeSummary.totalTime = source.totalTime;
    recipeSummary.labels$ = Observable.of(this.fetchLabels(source));

    return recipeSummary;
  }

  from(target: RecipeSummary): Recipe {
    throw new Error('Method not implemented.');
  }

  private fetchLabels(recipe: Recipe): Array<Label> {
    const labels: Array<Label> = [];
    for(let labelId of Object.keys(recipe.labels)) {
      if (recipe.labels[labelId]) {
        this.labelSandBox
          .getLabel(labelId)
          .then((label:Label) => {
            labels.push(label);
          })
      }
    }
    return labels;
  }
}

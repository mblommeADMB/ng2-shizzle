import {Converter} from '../../../model/converters/converter';
import {Recipe} from '../../../model/recipe.model';
import {createRecipeSummary, RecipeSummary} from './recipe-summary.viewmodel';
import {Injectable} from '@angular/core';

@Injectable()
export class RecipeSummaryConverter implements Converter<Recipe, RecipeSummary> {

  to(source: Recipe): RecipeSummary {
    let recipeSummary: RecipeSummary = createRecipeSummary();
    recipeSummary.title = source.name;
    recipeSummary.pictureUrl = source.picture;
    recipeSummary.description = source.description;
    recipeSummary.pictureCap = 'some pic';

    return recipeSummary;
  }

  from(target: RecipeSummary): Recipe {
    throw new Error('Method not implemented.');
  }

}

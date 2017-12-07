import {Observable} from 'rxjs/Observable';
import {ActionIcon} from '../../icons/action-icon/action-icon.model';

export interface RecipeSummary {
  title: string;
  description: string;
  pictureUrl: string;
  pictureCap: string;
  totalTime$: Observable<number>
  categoryIcons$?: Observable<Array<ActionIcon>>;
}

export function createRecipeSummary() : RecipeSummary {
  return {
    title: '',
    description: '',
    pictureUrl: '',
    pictureCap: '',
    totalTime$: Observable.of(0),
    categoryIcons$: Observable.of([]),
  };
}

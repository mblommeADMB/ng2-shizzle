import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {LabelService} from '../services/label.service';
import {AppState} from '../statemanagement/state/app.state';
import {Label} from '../model/label.model';

@Injectable()
export class LabelSandbox {
  labels$ = this.store.select(state => state.data.recipes);

  constructor(private store: Store<AppState>,
              private labelService: LabelService) {
  }

  public getAllLabels(): Promise<Array<Label>> {
    return this.labelService.getAll();
  }

}

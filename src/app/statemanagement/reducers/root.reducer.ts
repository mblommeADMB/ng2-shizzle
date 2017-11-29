import { ActionReducerMap } from '@ngrx/store';
import { dataReducer } from './data/data.reducer';
import {AppState} from '../state/app.state';

export const rootReducer: ActionReducerMap<AppState> = {
  data: dataReducer
};

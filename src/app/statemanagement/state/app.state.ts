import {DataState, initialDataState} from './data/data.state';

export type AppState= Readonly<{
  data: DataState;
}>;

export const initialAppState: AppState = {
  data: initialDataState
};

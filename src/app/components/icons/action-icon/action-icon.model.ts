import {Observable} from 'rxjs/Observable';

export interface ActionIcon {
  icon: string;
  label$?: Observable<string>;
  do?: () => void;
}

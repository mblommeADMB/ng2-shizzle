import {Label} from "../../../model/label.model";
import {Observable} from "rxjs/Observable";

export interface RecipeSummary {
  title: string;
  description: string;
  pictureUrl: string;
  pictureCap: string;
  totalTime: number
  labels$?: Observable<Array<Label>>;
}

export function createRecipeSummary() : RecipeSummary {
  return {
    title: '',
    description: '',
    pictureUrl: '',
    pictureCap: '',
    totalTime: 0,
  };
}

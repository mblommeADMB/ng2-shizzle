import {ActionIcon} from '../../icons/action-icon/action-icon.model';

export interface RecipeSummary {
  title: string;
  description: string;
  pictureUrl: string;
  pictureCap: string;
  totalTime: number;
  categoryIcons?: Array<ActionIcon>;
}

export function createRecipeSummary() : RecipeSummary {
  return {
    title: '',
    description: '',
    pictureUrl: '',
    pictureCap: '',
    totalTime: 0,
    categoryIcons: [],
  };
}

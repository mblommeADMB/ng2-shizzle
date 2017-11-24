export interface RecipeSummary {
  title: string;
  description: string;
  pictureUrl: string;
  pictureCap: string;
}

export function createRecipeSummary() : RecipeSummary {
  return {
    title: '',
    description: '',
    pictureUrl: '',
    pictureCap: ''
  };
}

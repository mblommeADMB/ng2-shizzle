export interface Entity {
  id: string;
  dateCreated?: Date;
  dateModified?: Date;
}

export function createEntity() : Entity {
  return {
   id: '',
   dateCreated: new Date(),
   dateModified: null
  };
}


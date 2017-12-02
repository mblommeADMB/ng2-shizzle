import {Entity, createEntity} from './entity.model';

export interface Label extends Entity {
  key: string;
}

export function createLabel(): Label {
  return <Label> Object.assign(createEntity(), {key: ''});
}

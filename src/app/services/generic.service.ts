import {Entity} from '../model/entity.model';

export type CollectionHandler<T> = (collection: Array<T>) => void;
export type EntityHandler<T> = (entity: T) => void;

export function Collection(name: string) {
  return (ctor: Function) => {
    ctor.prototype.collectionName = name;
  }
}

export interface GenericService<T extends Entity> {

  findById(id: string): T;

  modify(entity: T, modification: any): T;

  getAll();

}

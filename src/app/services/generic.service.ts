export type CollectionHandler<T> = (collection: Array<T>) => void;
export type EntityHandler<T> = (entity: T) => void;

export function Collection(name: string) {
  return (ctor: Function) => {
    ctor.prototype.collectionName = name;
  }
}

export interface GenericService<T> {

  findById(id: string): T;

  getAll(collectionHandler: CollectionHandler<T>);

}

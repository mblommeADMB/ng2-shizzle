import {Entity} from '../model/entity.model';
import * as firebase from 'firebase';
import DocumentReference = firebase.firestore.DocumentReference;

export type CollectionHandler<T> = (collection: Array<T>) => void;
export type EntityHandler<T> = (entity: T) => void;

export function Collection(name: string) {
    return (ctor: Function) => {
        ctor.prototype.collectionName = name;
    }
}

export interface GenericService<T extends Entity> {

    findById(id: string): Promise<T>;

    modify(entity: T, modification: any): Promise<T>;

    getAll(): Promise<Array<T>>;

    saveOrUpdate(entity: T): Promise<T>;

    save(entity: T): Promise<T>;

    findByReference(reference: DocumentReference);

}

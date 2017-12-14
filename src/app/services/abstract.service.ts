import * as firebase from 'firebase';
import 'firebase/firestore';
import {Converter} from '../model/converters/converter';
import {GenericService} from './generic.service';
import {FireBaseService} from './firebase.service';
import {Entity} from '../model/entity.model';
import QuerySnapshot = firebase.firestore.QuerySnapshot;
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;
import {cloneObject} from '../model/util.model';
import DocumentReference = firebase.firestore.DocumentReference;

export abstract class AbstractService<T extends Entity> implements GenericService<T> {
    protected collectionName: string;

    constructor(protected firebaseService: FireBaseService,
                private converter: Converter<DocumentSnapshot, T>) {
    }

    findById(id: string): Promise<T> {
        return this.firebaseService
            .firebaseDAO
            .collection(this.collectionName)
            .doc(id)
            .get()
            .then(this.convertToEntity);
    }

    findByReference(reference: DocumentReference): Promise<T> {
        if (reference) {
            return reference
                .get()
                .then(this.convertToEntity);
        }

        return Promise.resolve(null);
    }

    getAll(): Promise<Array<T>> {
        return this.firebaseService.firebaseDAO
            .collection(this.collectionName)
            .get()
            .then(this.convertQuerySnapshot);
    }

    modify(entity: T, modification: any): Promise<T> {
        return this.firebaseService
            .firebaseDAO
            .collection(this.collectionName)
            .doc(entity.id)
            .set(modification, {merge: true})
            .then(() => {
                return this.findById(entity.id);
            })
    }

    save(entity: T): Promise<T> {
        delete entity.id;
        const newEmotionReference = this.firebaseService.firebaseDAO.collection(this.collectionName).doc();
        return newEmotionReference
            .set(entity)
            .then(() => {
                return this.findByReference(newEmotionReference);
            })
    }

    saveOrUpdate(entity: T): Promise<T> {
        if (!entity) {
            return Promise.resolve(null);
        } else if (entity.id) {
            const modification = cloneObject(entity);
            delete modification.id;
            return this.modify(entity, modification);
        } else {
            return this.save(entity);
        }
    }

    protected convertQuerySnapshot: (snapshot: QuerySnapshot) => Promise<Array<T>> =
        (snapshot) => {
            return new Promise((resolve) => {
                let entries: T[] = [];

                snapshot.forEach((doc) => {
                    entries.push(this.converter.to(doc));
                });

                resolve(entries);
            });
        };

    protected convertToEntity: (doc: DocumentSnapshot) => Promise<T> =
        (doc) => {
            return new Promise((resolve) => {
                let entity: T = null;

                if (doc) {
                    entity = this.converter.to(doc);
                }
                resolve(entity);
            });
        }
}

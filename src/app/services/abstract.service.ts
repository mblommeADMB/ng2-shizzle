import * as firebase from 'firebase';
import 'firebase/firestore';
import QuerySnapshot = firebase.firestore.QuerySnapshot;
import { Converter } from '../model/converters/converter';
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;
import { CollectionHandler, GenericService } from './generic.service';
import { FireBaseService } from './firebase.service';
import { Entity } from '../model/entity.model';

export abstract class AbstractService<T extends Entity> implements GenericService<T> {
  protected collectionName: string;

  constructor(private firebaseService: FireBaseService,
    private converter: Converter<DocumentSnapshot, T>) { }

  findById(id: string): Promise<T> {
    return this.firebaseService
      .firebaseDAO
      .collection(this.collectionName)
      .doc(id)
      .get()
      .then(this.convertToEntity);
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
      .set(modification, { merge: true })
      .then(() => {
        return this.findById(entity.id);
      })
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

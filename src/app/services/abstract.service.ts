import * as firebase from 'firebase';
import 'firebase/firestore';
import QuerySnapshot = firebase.firestore.QuerySnapshot;
import {Converter} from '../model/converters/converter';
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;
import {CollectionHandler, GenericService} from './generic.service';
import {FireBaseService} from './firebase.service';

export abstract class AbstractService<T> implements GenericService<T> {

  protected collectionName: string;

  constructor(private firebaseService: FireBaseService,
              private converter: Converter<DocumentSnapshot, T>) {}

  findById(id: string): T {
    throw new Error('Method not implemented.');
  }

  getAll(collectionHandler: CollectionHandler<T>) {
    this.firebaseService.firebaseDAO
      .collection(this.collectionName)
      .get()
      .then(this.convertQuerySnapshot)
      .then(collectionHandler);
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
    }
}

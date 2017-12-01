import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {firebaseConfig} from './firebase.config';

@Injectable()
export class FireBaseService {
  firebaseDAO: firebase.firestore.Firestore;

  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.firebaseDAO = firebase.firestore();
  }
}

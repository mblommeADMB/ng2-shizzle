import {Converter} from './converter';
import * as firebase from 'firebase';
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;
import {Label} from '../label.model';
import {Injectable} from '@angular/core';

@Injectable()
export class LabelConverter implements Converter<DocumentSnapshot, Label> {

  to(source: DocumentSnapshot): Label {
    return <Label> Object.assign({id: source.id}, source.data())
  }

  from(target: Label): DocumentSnapshot {
    return undefined;
  }

}

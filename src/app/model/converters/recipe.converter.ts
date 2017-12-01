import {Converter} from './converter';
import * as firebase from 'firebase';
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;
import {Recipe} from '../recipe.model';
import {Injectable} from '@angular/core';

@Injectable()
export class RecipeConverter implements Converter<DocumentSnapshot, Recipe> {

  to(source: DocumentSnapshot): Recipe {
    return <Recipe> Object.assign({id: source.id}, source.data())
  }

  from(target: Recipe): DocumentSnapshot {
    throw new Error('Method not implemented.');
  }

}

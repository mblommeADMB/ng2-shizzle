import {Converter} from './converter';
import * as firebase from 'firebase';
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;
import {Recipe} from '../recipe.model';
import {Injectable} from '@angular/core';

@Injectable()
export class RecipeConverter implements Converter<DocumentSnapshot, Recipe> {

  to(source: DocumentSnapshot): Recipe {
    let recipe: Recipe =  <Recipe> Object.assign({id: source.id}, source.data())
    if (!recipe.labels) {
      recipe.labels = [];
    }

    return recipe;
  }

  from(target: Recipe): DocumentSnapshot {
    throw new Error('Method not implemented.');
  }

}

import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/firestore';
import {firebaseConfig} from './recipe.service.config';
import {Recipe} from '../../model/recipe/recipe.model';
import {RecipeConverter} from '../../model/recipe/recipe.converter';
import QuerySnapshot = firebase.firestore.QuerySnapshot;

export const RECIPES = 'recipes';

@Injectable()
export class RecipeService {
  firebaseDAO: firebase.firestore.Firestore;

  constructor(private recipeConverter: RecipeConverter) {
    firebase.initializeApp(firebaseConfig);
    this.firebaseDAO = firebase.firestore();
  }

  getAllRecipes(handle: (recipes: Array<Recipe>) => void ) {
    this.firebaseDAO
      .collection(RECIPES)
      .get()
      .then(this.convertRecipesSnapshot)
      .then(handle);
  }

  private convertRecipesSnapshot: (snapshot: QuerySnapshot) => Promise<Array<Recipe>> =
    (snapshot) => {
      return new Promise((resolve) => {
        let recipes: Recipe[] = [];

        snapshot.forEach((doc) => {
          recipes.push(this.recipeConverter.to(doc));
        });

        resolve(recipes);
      });
    }
}

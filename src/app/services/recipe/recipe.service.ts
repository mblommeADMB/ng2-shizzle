import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { firebaseConfig } from "./recipe.service.config";

export const RECIPES = '/recipes';
export const FB_EVENT_VALUE = 'value';

@Injectable()
export class RecipeService {
    firebaseDAO: firebase.database.Database;

    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.firebaseDAO = firebase.database();
    }

    public getAllRecipes() : Promise<any> {
        return this.firebaseDAO
            .ref(RECIPES)
            .once(FB_EVENT_VALUE);
    }
    
}
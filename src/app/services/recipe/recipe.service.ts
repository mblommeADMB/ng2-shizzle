import { Injectable } from "@angular/core";
import * as firebaseDAO from "firebase";
import { firebaseConfig } from "./recipe.service.config";

@Injectable()
export class RecipeService{

    constructor() {
        firebaseDAO.initializeApp(firebaseConfig);
    }

}
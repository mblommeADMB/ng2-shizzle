import { Label } from './label.model';
import { Entity, createEntity } from './entity.model';

export interface Recipe extends Entity {
    description: string,
    name: string,
    picture: string,
    labels: { [id: string]: boolean }
}

export function createRecipe(): Recipe {
    return <Recipe>Object.assign({
        description: '',
        name: '',
        picture: '',
        labels: {}
    }, createEntity());
}

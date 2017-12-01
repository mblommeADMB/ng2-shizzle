import {Label} from './label.model';
import {Entity} from "./entity.model";

export interface Recipe extends Entity {
    description : string,
    name: string,
    picture : string,
    labels: Array<Label>,
}

import {Label} from './label.model';

export interface Recipe {
    id: string;
    dateCreated : Date,
    description : string,
    name: string,
    picture : string,
    labels: Array<Label>,
}

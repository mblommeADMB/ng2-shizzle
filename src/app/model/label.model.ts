import {createEntity, Entity} from './entity.model';

export interface Label extends Entity {
    key: string;
    svgId: string;
}

export function createLabel(): Label {
    return <Label> Object.assign(createEntity(), {key: '', svgId: ''});
}

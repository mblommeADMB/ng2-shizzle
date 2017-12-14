import {createEntity, Entity} from '../entity.model';
import {ReferenceType} from '../enums/reference-type.enum';
import {Emotions} from './emotions.model';

export interface EmotionReference extends Entity {
    reference: string;
    referenceType: ReferenceType;
    emotions: Emotions;
}

export function createEmotionReference(): EmotionReference {
    return <EmotionReference> Object.assign(createEntity(), {reference: '', referenceType: null, emotions: {}});
}

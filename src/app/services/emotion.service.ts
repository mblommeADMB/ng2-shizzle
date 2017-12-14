import {AbstractService} from './abstract.service';
import {EmotionReference} from '../model/emotions/EmotionReference';
import {Injectable} from '@angular/core';
import {Collection} from './generic.service';
import {ReferenceType} from '../model/enums/reference-type.enum';
import {FireBaseService} from './firebase.service';
import {EmotionReferenceConverter} from '../model/converters/emotion-reference.converter';

const EMOTIONS: string = 'emotionReferences';

@Injectable()
@Collection(EMOTIONS)
export class EmotionService extends AbstractService<EmotionReference> {

    constructor(private fireBaseService: FireBaseService,
                private emotionReferenceConverter: EmotionReferenceConverter) {
        super(fireBaseService, emotionReferenceConverter);
    }

    findAllByType(referenceType: ReferenceType): Promise<Array<EmotionReference>> {
        return this.firebaseService
            .firebaseDAO
            .collection(this.collectionName)
            .where('referenceType', '==', referenceType)
            .get()
            .then(this.convertQuerySnapshot);
    }

}

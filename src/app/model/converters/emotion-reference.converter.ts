import * as firebase from 'firebase';
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;
import {createEmotionReference, EmotionReference} from '../emotions/EmotionReference';
import {Converter} from './converter';

export class EmotionReferenceConverter implements Converter<DocumentSnapshot, EmotionReference> {

    to(source: DocumentSnapshot): EmotionReference {
        return <EmotionReference> Object.assign(createEmotionReference(), {id: source.id}, source.data());
    }

    from(target: EmotionReference): DocumentSnapshot {
        return undefined;
    }

}

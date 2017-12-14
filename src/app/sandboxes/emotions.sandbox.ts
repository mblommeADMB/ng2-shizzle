import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../statemanagement/state/app.state';
import {EmotionService} from '../services/emotion.service';

@Injectable()
export class EmotionsSandbox {

    constructor(private store: Store<AppState>,
                private emotionService: EmotionService) {
    }

}

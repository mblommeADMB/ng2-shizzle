import {Injectable} from '@angular/core';
import {LabelConverter} from '../model/converters/label.converter';
import {AbstractService} from './abstract.service';
import {Label} from '../model/label.model';
import {Collection} from './generic.service';
import {FireBaseService} from './firebase.service';

export const LABELS = 'labels';

@Injectable()
@Collection(LABELS)
export class LabelService extends AbstractService<Label> {

  constructor(private fireBaseService: FireBaseService,
              private labelConverter: LabelConverter) {
    super(fireBaseService, labelConverter);

  }

}

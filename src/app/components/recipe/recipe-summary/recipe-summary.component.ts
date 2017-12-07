import {Component, Input, OnInit} from '@angular/core';
import {RecipeSummary} from './recipe-summary.viewmodel';
import {ActionIcon} from '../../icons/action-icon/action-icon.model';
import 'rxjs/add/observable/of';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-recipe-summary',
    templateUrl: './recipe-summary.component.html',
    styleUrls: ['./recipe-summary.component.scss']
})
export class RecipeSummaryComponent implements OnInit {

    @Input() recipeSummary: RecipeSummary;

    eggTimer: ActionIcon;

    constructor() {
    }

    ngOnInit() {
        this.eggTimer = this.getTotalTimeActionIcon();
    }

    private getTotalTimeActionIcon(): ActionIcon {
        return {
            icon: '#kitchen-timer',
            label$: this.recipeSummary.totalTime$
                .pipe(map(time => String(time)))
        }
    }
}

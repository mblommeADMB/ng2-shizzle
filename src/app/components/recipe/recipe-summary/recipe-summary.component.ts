import {Component, Input, OnInit} from '@angular/core';
import {RecipeSummary} from './recipe-summary.viewmodel';
import {ActionIcon} from '../../icons/action-icon/action-icon.model';
import {ActionIconComponent} from '../../icons/action-icon/action-icon.component';

@Component({
    selector: 'app-recipe-summary',
    templateUrl: './recipe-summary.component.html',
    styleUrls: ['./recipe-summary.component.scss']
})
export class RecipeSummaryComponent implements OnInit {

    @Input() recipeSummary: RecipeSummary;

    eggTimer: ActionIcon;

    constructor() {}

    ngOnInit() {
        this.eggTimer = this.getTotalTimeActionIcon();
    }

    private getTotalTimeActionIcon(): ActionIcon {
        return {
            icon: '#kitchen-timer',
            svgStyle: 'icon--md',
            label: String(this.recipeSummary.totalTime),
            menu: ActionIconComponent,
            menuData: { actionIcon: {icon: '#kitchen-timer', svgStyle: 'icon--md'}},
        }
    }
}

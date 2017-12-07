import {Component, Input, OnInit} from '@angular/core';
import {ActionIcon} from './action-icon.model';

@Component({
    selector: 'app-action-icon',
    templateUrl: './action-icon.component.html',
    styleUrls: ['./action-icon.component.css']
})
export class ActionIconComponent implements OnInit {

    @Input() actionIcon: ActionIcon;
    @Input() svgClasses: string;

    constructor() {}

    ngOnInit() {
    }

    doAction(event: Event) {
        event.stopPropagation();
        this.actionIcon.do();
    }

}

import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ActionIcon} from "../action-icon/action-icon.model";

@Component({
    selector: 'app-action-bar',
    templateUrl: './action-bar.component.html',
    styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {

    @Input() actionIcons$: Observable<Array<ActionIcon>>;

    constructor() {
    }

    ngOnInit() {
    }

}

import {
    Component, ComponentRef, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef
} from '@angular/core';
import {ActionIcon} from './action-icon.model';
import {ComponentLoaderService} from '../../../services/component-loader.service';

@Component({
    selector: 'app-action-icon',
    templateUrl: './action-icon.component.html',
    styleUrls: ['./action-icon.component.css']
})
export class ActionIconComponent implements OnInit, OnDestroy {
    @ViewChild('menuContainer', {read: ViewContainerRef}) menuContainer;

    @Input() actionIcon: ActionIcon;

    componentRef: ComponentRef<any>;

    constructor(private componentLoader: ComponentLoaderService) {
    }

    ngOnDestroy() {
        if (this.componentRef) {
            this.componentRef.destroy()
        }
    }

    ngOnInit() {
    }

    createMenu() {
        if (this.actionIcon.menu) {
            this.componentRef = this.componentLoader.loadComponent(this.menuContainer,
                this.actionIcon.menu, this.actionIcon.menuData);
        }
    }

    doAction(event: Event) {
        event.stopPropagation();
    }
}

import {Type} from "@angular/core";
import {ActionIcon} from "./action-icon.model";

export class ActionIconBuilder {
    private icon: string;
    private label: string;
    private do: () => void;
    private menu: Type<any>;
    private menuData: Object;
    private svgStyle: string;

    constructor(icon: string) {
        this.icon = icon;
    }

    static createActionIcon(icon: string): ActionIconBuilder {
        return new ActionIconBuilder(icon);
    }

    public withLabel(label: string): ActionIconBuilder {
        this.label = label;
        return this;
    }

    public withSvgStyle(svgStyle: string): ActionIconBuilder {
        this.svgStyle = svgStyle;
        return this;
    }

    public withAction(action: () => void): ActionIconBuilder {
        this.do = action;
        return this;
    }

    public withMenu<T>(menu: Type<T>): ActionIconBuilder{
        this.menu = menu;
        return this;
    }

    public withMenuData(data: Object): ActionIconBuilder {
        this.menuData = data;
        return this;
    }

    public build(): ActionIcon {
        return {
            icon: this.icon,
            svgStyle: this.svgStyle,
            do: this.do,
            menu: this.menu,
            menuData: this.menuData,
            label: this.label,
        }
    }
}

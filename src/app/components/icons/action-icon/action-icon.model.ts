import {Type} from '@angular/core';

export interface ActionIcon {
  icon: string;
  label?: string;
  do?: () => void;
  menu?: Type<any>;
  menuData?: Object;
  svgStyle?: string;
}

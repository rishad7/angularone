import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Layout',
    main: [
      {
        state: '',
        name: 'PROVISIONING',
        type: 'sub',
        icon: 'ti-arrows-corner',
        children: [
          {
            state: '',
            name: 'Add Data Center'
          }
        ]
      },
      {
        state: 'basic',
        name: 'DATA CENTERS',
        type: 'sub',
        icon: 'ti-world',
        children: [
          {
            state: '',
            name: 'Data Center ZETA'
          },
          {
            state: '',
            name: 'Data Center 2'
          },
          {
            state: '',
            name: 'Data Center 3'
          }
        ]
      }
    ]
  },
  {
    label: 'FORMS & TABLES',
    main: [
      {
        state: '',
        name: 'ALERT',
        type: 'link',
        icon: 'ti-alert'
      }
    ],
  },
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}

import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: '首页',
    icon: 'nb-home',
    link: '/app/dashboard',
    home: true
  },
  {
    title: '生成业务',
    group: true
  },
  {
    title: 'Forms',
    icon: 'nb-compose',
    children: [
      {
        title: 'Form Inputs',
        link: '/app/forms/inputs'
      },
      {
        title: 'Form Layouts',
        link: '/app/forms/layouts'
      }
    ]
  }
];

import { ROUTES_CONFIG } from './routes.config';

export interface IMenuItem {
  title: string;
  path: string;
  icon?: string;
  children?: IMenuItem[];
}

export const MENU_CONFIG: IMenuItem[] = [
  {
    title: 'Главная',
    path: ROUTES_CONFIG.MAIN,
    icon: 'icon-point',
  },
  {
    title: 'NewFolder1',
    path: '',
    children: [
      {
        title: 'ClassTestL',
        path: ROUTES_CONFIG.CLASS_TEST_L,
        icon: 'icon-point',
      },
      {
        title: 'AggregationClassL',
        path: ROUTES_CONFIG.AGGREGATION_CLASS_L,
        icon: 'icon-point',
      },
      {
        title: 'AssosiationClassL',
        path: ROUTES_CONFIG.ASSOSIATION_CLASS_L,
        icon: 'icon-point',
      },
    ],
  },
];

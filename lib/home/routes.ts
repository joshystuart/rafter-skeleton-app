import { IRouteConfig, METHODS } from 'rafter';

export default (): IRouteConfig[] => [
  {
    endpoint: `/`,
    controller: 'homeController',
    action: 'index',
    method: METHODS.get,
  },
];

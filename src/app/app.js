import { myAppConfig } from './app.config';
import { componentsModules } from './components/components.modules';
import { sharedModules } from './shared/shared.modules';
import { appController } from './app.controller';

angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'myApp.components',
  'myApp.shared'
])
.config(['$routeProvider',myAppConfig])
.controller('appController',appController);

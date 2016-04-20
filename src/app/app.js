import { myAppConfig } from './app.config';
import { myAppRoutes } from './app.routes';
import './components/components.modules';
import './shared/shared.modules';
import './app.routes.js';
import { appController } from './app.controller';

angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'myApp.components',
  'myApp.shared'
])
.config(['$routeProvider',myAppRoutes])
.config(['$httpProvider','spinerConfigProvider',myAppConfig])
.controller('appController',appController);

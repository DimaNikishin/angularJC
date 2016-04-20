import { mainController } from './main.controller';
import { modal } from './modal.directive';

angular.module('myApp.main', [
  'ngRoute'
])
.controller('mainController', mainController)
.directive('modal', modal);

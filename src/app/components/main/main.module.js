import { mainController } from './main.controller';
import { modal } from './modal.directive';

var mainModule =  angular.module('myApp.main', [
  'ngRoute'
])
.controller('mainController', mainController)
.directive('modal', modal);

export { mainModule };

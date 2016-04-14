import { mainController } from './main.controller';
import { userCard } from './user.directive';

var mainModule =  angular.module('myApp.main', [
  'ngRoute'
])
.controller('mainController', mainController)
.directive('userCard', userCard);

export { mainModule };

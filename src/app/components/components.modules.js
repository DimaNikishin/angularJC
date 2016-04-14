import { mainModule } from './main/main.module';
import { userService } from './users.service.js';

var componentsModules =  angular.module('myApp.components', [
  'ngRoute',
  'myApp.main'
])
.factory('userService', userService);

export { componentsModules };

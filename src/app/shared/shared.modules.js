import { spiner } from './spiner.directive';

var sharedModules =  angular.module('myApp.shared', [
  'ngRoute'
])
.directive('spiner', spiner);

export { sharedModules };

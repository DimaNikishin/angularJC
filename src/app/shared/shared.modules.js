import { spiner } from './spiner.directive';
import { navigationToMain } from './navigation.directive';

var sharedModules =  angular.module('myApp.shared', [
  'ngRoute'
])
.directive('spiner', spiner)
.directive('navigationToMain', navigationToMain);

export { sharedModules };

import { spiner } from './spiner.directive';
import { navigationToMain } from './navigation.directive';
import { spinerConfig } from './spiner.directive';

var sharedModules =  angular.module('myApp.shared', [
  'ngRoute'
])
.provider('spinerConfig', spinerConfig)
.directive('spiner', spiner)
.directive('navigationToMain', navigationToMain);

export { sharedModules };

import { postsController } from './posts.controller';

var postsModule =  angular.module('myApp.posts', [
  'ngRoute'
])
.controller('postsController', postsController);

export { postsModule };

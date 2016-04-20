import { postsController } from './posts.controller';

angular.module('myApp.posts', [
  'ngRoute'
])
.controller('postsController', postsController);

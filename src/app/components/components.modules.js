import './main/main.module';
import './albums/albums.module';
import './todos/todos.module';
import './posts/posts.module';
import { userService } from './users.service.js';

angular.module('myApp.components', [
  'ngRoute',
  'myApp.main',
  'myApp.albums',
  'myApp.todos',
  'myApp.posts'
])
.factory('userService', userService);

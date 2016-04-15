import { mainModule } from './main/main.module';
import { albumsModule } from './albums/albums.module';
import { todosModule } from './todos/todos.module';
import { postsModule } from './posts/posts.module';
import { userService } from './users.service.js';

var componentsModules =  angular.module('myApp.components', [
  'ngRoute',
  'myApp.main',
  'myApp.albums',
  'myApp.todos',
  'myApp.posts'
])
.factory('userService', userService);

export { componentsModules };

import { todosController } from './todos.controller';

angular.module('myApp.todos', [
  'ngRoute'
])
.controller('todosController', todosController);

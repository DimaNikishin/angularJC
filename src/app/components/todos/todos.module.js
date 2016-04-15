import { todosController } from './todos.controller';

var todosModule =  angular.module('myApp.todos', [
  'ngRoute'
])
.controller('todosController', todosController);

export { todosModule };

import { albumsController } from './albums.controller';

var albumsModule =  angular.module('myApp.albums', [
  'ngRoute'
])
.controller('albumsController', albumsController);

export { albumsModule };

import { albumsController } from './albums.controller';

angular.module('myApp.albums', [
  'ngRoute'
])
.controller('albumsController', albumsController);

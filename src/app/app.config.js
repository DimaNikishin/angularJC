
var myAppConfig = function ($routeProvider, $httpProvider, spinerConfigProvider) {
  $routeProvider
    .when('/main', {
      templateUrl: 'src/app/components/main/main-view.html',
      controller: 'mainController',
      controllerAs: 'main'
    })
    .when('/:userId/Albums', {
      templateUrl: 'src/app/components/albums/albums-view.html',
      controller: 'albumsController',
      controllerAs: 'albums'
    })
    .when('/:userId/Todos', {
      templateUrl: 'src/app/components/todos/todos-view.html',
      controller: 'todosController',
      controllerAs: 'todos'
    })
    .when('/:userId/Posts', {
      templateUrl: 'src/app/components/posts/posts-view.html',
      controller: 'postsController',
      controllerAs: 'posts'
    })
    .otherwise({
      redirectTo: '/main'
    });

  $httpProvider.interceptors.push(function($q){
    var counter = 0;
    return {
      'request': function(config) {
        counter++;
        spinerConfigProvider.setLoadedStatus(false)
        return config
      },
      'response': function(response) {
        if(!--counter){
          spinerConfigProvider.setLoadedStatus(true)
        }
        return response
      },
      'responseError': function(rejection) {
      counter--;
      return $q.reject(rejection);
      }
    }
  });
};

export { myAppConfig };

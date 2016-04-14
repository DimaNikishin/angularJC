
var myAppConfig = function ($routeProvider) {
  $routeProvider
    .when('/main', {
      templateUrl: 'src/app/components/main/main-view.html',
      controller: 'mainController',
      controllerAs: 'main'
    })
    .otherwise({
      redirectTo: '/main'
    });
};

export { myAppConfig };

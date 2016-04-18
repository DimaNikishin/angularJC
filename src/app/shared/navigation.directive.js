
navigationToMain.$inject = ['$location'];

function navigationToMain($location){
  return {
    scope: {
      src: '@',
      done: '='
    },
    restrict:'E',
    template: '<div class="navigation-button"><button type="button" class="btn btn-info" ng-click="navigateToMain()">Want home?</button></div>',
    link: function(scope, element, attrs) {
      scope.navigateToMain = function(){
        $location.path('main')
      }
    }
  };
}

export { navigationToMain }

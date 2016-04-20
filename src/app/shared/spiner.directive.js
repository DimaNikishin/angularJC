
spiner.$inject = [];

function spiner(){
  return {
    scope: {
      src: '@'
    },
    restrict:'E',
    template: '<img ng-hide="done" src="{{src}}">',
    controller: function ($scope, spinerConfig) {

      $scope.$watch(function(){return spinerConfig.isLoaded},function(){
        if (spinerConfig.isLoaded === false) {
          $scope.done = false;
        } else {
          $scope.done = true;
        }
      })

    }
  };
}

function spinerConfig(){

  this.setLoadedStatus = function(status){
    this.isLoaded = status;
  }

  this.$get = function(){
    return this;
  }
}

export { spiner }
export { spinerConfig }


spiner.$inject = [];

function spiner(){
  return {
    scope: {
      src: '@'
    },
    restrict:'E',
    template: '<div class="ng-modal-overlay" ng-hide="done"><img ng-hide="done" src="{{src}}"></div>',
    controller: function ($scope, spinerConfig) {

      $scope.$watch(function(){return spinerConfig.isLoaded},function(oldValue,newValue){
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

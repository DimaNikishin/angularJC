
spiner.$inject = [];

function spiner(){
  return {
    scope: {
      src: '@',
      done: '='
    },
    restrict:'E',
    template: '<div class="ng-modal-overlay" ng-hide="done"><img ng-hide="done" src="{{src}}"></div>'
  };
}

export { spiner }

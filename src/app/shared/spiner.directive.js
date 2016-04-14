
spiner.$inject = [];

function spiner(){
  return {
    scope: {
      src: '@',
      done: '='
    },
    restrict:'E',
    template: '<img ng-hide="done" src="{{src}}">'
  };
}

export { spiner }

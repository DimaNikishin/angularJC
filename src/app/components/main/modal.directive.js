
modal.$inject = ['$location'];

function modal($location){
  return {
    restrict: 'E',
    scope: {
      show: '=',
      userName: '@',
      userId: '@'
    },
    link: function(scope, element, attrs) {
      /**
       * hide modal window
       */
      scope.hideModal = function() {
        scope.show = false;
      };
      /**
       * navigates to another route
       * @param  {string} url route url
       */
      scope.navigateTo = function(url){
        $location.path(`/${url}`)
      }
    },
    templateUrl: 'src/app/components/main/modal.directive-template.html'
  };
}

export { modal }

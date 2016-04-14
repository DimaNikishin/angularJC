
userCard.$inject = [];

function userCard(){
  return {
    scope:false,
    restrict:'E',
    templateUrl: 'src/app/components/main/user.directive-template.html'
  };
}

export { userCard }

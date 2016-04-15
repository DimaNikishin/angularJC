
todosController.$inject = ['userService','$routeParams'];

function todosController(userService,$routeParams){

  var that = this;
  that.todos = [];
  that.loaded = false;

  userService.getData.query({dataType:'users',Id:$routeParams.userId, subDataType:'todos'}).$promise.then(function (result) {

    that.todos = result;
    that.loaded = true;
    console.log(result)

  });

}

export { todosController }


todosController.$inject = ['userService','$routeParams'];

function todosController(userService,$routeParams){

  var that = this;
  that.todos = [];

  that.updateToDo = updateToDo;

  /**
   * put updated ToDo
   * @param  {object} toDo ToDo object to put into server
   */
  function updateToDo(toDo){
    userService.putTodos.update(toDo)
  }

  userService.getData.donwload({dataType:'users',Id:$routeParams.userId, subDataType:'todos'}).$promise.then(function (result) {

    that.todos = result;

  });

}

export { todosController }

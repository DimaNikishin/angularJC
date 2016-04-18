
todosController.$inject = ['userService','$routeParams'];

function todosController(userService,$routeParams){

  var that = this;
  that.todos = [];
  that.loaded = false;

  that.updateToDo = updateToDo;

  /**
   * put updated ToDo
   * @param  {object} toDo ToDo object to put into server
   */
  function updateToDo(toDo){
    userService.putTodos.update(toDo)
  }

  userService.getData.query({dataType:'users',Id:$routeParams.userId, subDataType:'todos'}).$promise.then(function (result) {

    that.todos = result;
    that.loaded = true;

  });

}

export { todosController }

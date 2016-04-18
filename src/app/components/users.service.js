
userService.$inject = ['$resource']

function userService($resource){

  var service = {};

  service.getUsers = $resource('http://jsonplaceholder.typicode.com/:dataType').query({dataType:'users'})
  service.getData = $resource('http://jsonplaceholder.typicode.com/:dataType/:Id/:subDataType')
  service.postPosts = $resource('http://jsonplaceholder.typicode.com/posts')
  service.putPosts = $resource('http://jsonplaceholder.typicode.com/posts/:postId', {postId:'@id'}, {'update': { method:'PUT' }})
  service.putTodos = $resource('http://jsonplaceholder.typicode.com/todos/:todoId', {todoId:'@id'}, {'update': { method:'PUT' }})

  return service;
}

export { userService }

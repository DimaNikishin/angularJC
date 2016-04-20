
userService.$inject = ['$resource']

function userService($resource){

  var service = {};

  service.getUsers = $resource('http://jsonplaceholder.typicode.com/:dataType',{},{donwload: {method:'GET',isArray:true, params:{fromJSONPlaceholder:true}}}).donwload({dataType:'users'})
  service.getData = $resource('http://jsonplaceholder.typicode.com/:dataType/:Id/:subDataType',{},{donwload: {method:'GET',isArray:true, params:{fromJSONPlaceholder:true}}})
  service.postPosts = $resource('http://jsonplaceholder.typicode.com/posts',{},{donwload: {method:'GET',isArray:true, params:{fromJSONPlaceholder:true}}})
  service.postPosts = $resource('http://jsonplaceholder.typicode.com/posts',{},{save: {method:'POST', params:{fromJSONPlaceholder:true}}})
  service.putPosts = $resource('http://jsonplaceholder.typicode.com/posts/:postId', {postId:'@id'}, {'update': { method:'PUT', params:{fromJSONPlaceholder:true} }})
  service.putTodos = $resource('http://jsonplaceholder.typicode.com/todos/:todoId', {todoId:'@id'}, {'update': { method:'PUT', params:{fromJSONPlaceholder:true} }})

  return service;
}

export { userService }

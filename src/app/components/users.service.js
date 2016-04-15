
userService.$inject = ['$resource']

function userService($resource){

  var service = {};

  service.getUsers = $resource('http://jsonplaceholder.typicode.com/:dataType').query({dataType:'users'})
  service.getData = $resource('http://jsonplaceholder.typicode.com/:dataType/:Id/:subDataType')

  return service;
}

export { userService }

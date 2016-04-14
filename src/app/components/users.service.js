
userService.$inject = ['$resource']

function userService($resource){

  var service = {};

  service.users = $resource('http://jsonplaceholder.typicode.com/:dataType').query({dataType:'users'})
  service.posts = $resource('http://jsonplaceholder.typicode.com/:dataType').query({dataType:'posts'})
  service.comments = $resource('http://jsonplaceholder.typicode.com/:dataType').query({dataType:'comments'})
  service.albums = $resource('http://jsonplaceholder.typicode.com/:dataType').query({dataType:'albums'})
  service.photos = $resource('http://jsonplaceholder.typicode.com/:dataType').query({dataType:'photos'})
  service.todos = $resource('http://jsonplaceholder.typicode.com/:dataType').query({dataType:'todos'})

  return service;
}

export { userService }

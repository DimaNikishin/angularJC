
mainController.$inject = ['userService'];

function mainController(userService){

  var that = this;
  that.loaded = false;
  that.users = [];

  that.displayUser = displayUser;

  userService.users.$promise.then(function (result) {

    that.users = result;
    that.users.forEach(function(element){
      element.display = false;
    })

    userService.albums.$promise.then(function (result) {

      var _albums = result;
      userService.photos.$promise.then(function (result) {

        that.loaded = true;
        result.forEach(function(element){
          _dataFilling(_albums, element, 'photos','albumId');
        })
      });

      _albums.forEach(function(element){
        _dataFilling(that.users, element, 'albums','userId');
      })

    });

    userService.todos.$promise.then(function (result) {
      result.forEach(function(element){
        _dataFilling(that.users, element, 'todos','userId');
      })
    });

    userService.posts.$promise.then(function (result) {

      var _posts = result;
      userService.comments.$promise.then(function (result) {
        result.forEach(function(element){
          _dataFilling(_posts, element, 'comments','postId');
        })
      });

      _posts.forEach(function(element){
        _dataFilling(that.users, element, 'posts','userId');
      })

    });

  });

  function displayUser(user){
    that.users.forEach(function(element){
      element.display = false;
    })
    user.display = true;
  }

  function _dataFilling(primaryArray, element, propertyToFill, identifier){
    for(var i = 0; i < primaryArray.length; i++){
      if(primaryArray[i].id === element[identifier]){
        if(primaryArray[i][propertyToFill]){
          primaryArray[i][propertyToFill].push(element);
        } else{
          primaryArray[i][propertyToFill] = [];
          primaryArray[i][propertyToFill].push(element);
        }
      }
    }
  }

}

export { mainController }

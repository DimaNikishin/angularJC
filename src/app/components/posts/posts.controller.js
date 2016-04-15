
postsController.$inject = ['userService','$routeParams'];

function postsController(userService,$routeParams){

  var that = this;
  that.posts = [];
  that.loaded = false;

  that.getPostCommentsById = getPostCommentsById;

  /**
   * get comments from server
   * @param  {number} postId post's id to retrieve from server
   */
  function getPostCommentsById(postId){

    for(let i = 0; i < that.posts.length; i++){
      if(that.posts[i].id === postId && !that.posts[i].comments){
        that.loaded = false;

        userService.getData.query({dataType:'posts',Id:postId, subDataType:'comments'}).$promise.then(function (result) {

          that.loaded = true;
          that.posts[i].comments = [...result];

        });
      }
    }
  }

  userService.getData.query({dataType:'users',Id:$routeParams.userId, subDataType:'posts'}).$promise.then(function (result) {

    that.posts = result;
    that.loaded = true;

  });

}

export { postsController }

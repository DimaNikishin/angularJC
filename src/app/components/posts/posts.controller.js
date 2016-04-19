
postsController.$inject = ['userService','$routeParams'];

function postsController(userService,$routeParams){

  var that = this;
  that.posts = [];
  that.newPost = {};

  that.getPostCommentsById = getPostCommentsById;
  that.postNewPost = postNewPost;
  that.editPost = editPost;
  that.savePost = savePost;

  /**
   * get comments from server
   * @param  {number} postId post's id to retrieve from server
   */
  function getPostCommentsById(postId){

    for(let i = 0; i < that.posts.length; i++){
      if(that.posts[i].id === postId && !that.posts[i].isCommentsLoaded){

        that.posts[i].displayComment = true;
        that.posts[i].isCommentsLoaded = true;

        userService.getData.query({dataType:'posts',Id:postId, subDataType:'comments'}).$promise.then(function (result) {

          that.posts[i].comments = result;

        });
      } else if(that.posts[i].id === postId && that.posts[i].isCommentsLoaded){
        that.posts[i].displayComment = !that.posts[i].displayComment;
      }
    }
  }

  /**
   * post data to server and add in to array of posts
   * @param  {object} post object with post's properties
   */
  function postNewPost(post){
    post.userId = $routeParams.userId
    userService.postPosts.save(post, function(data){that.posts.push(data)})
  }

  /**
   * change editing flag for post
   * @param  {object} post post object
   */
  function editPost(post){
    for(var i = 0; i < that.posts.length; i++){
      that.posts[i].edited = false;
    }
    post.edited = true;
    that.newBody = post.body;
  }

  /**
   * put post's body to server and revert it if another value was retrieved from the server
   * @param  {object} post object with post's properties
   */
  function savePost(post){
    var oldValue = post.body;
    post.body = that.newBody;
    userService.putPosts.update(post, function(data){
      post.body = oldValue;
      if(data.body === that.newBody){
        post.body = that.newBody;
      }
      post.edited = false;
    })
  }

  userService.getData.query({dataType:'users',Id:$routeParams.userId, subDataType:'posts'}).$promise.then(function (result) {

    that.posts = result;

  });

}

export { postsController }

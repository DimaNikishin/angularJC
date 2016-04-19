
mainController.$inject = ['userService'];

function mainController(userService){

  var that = this;
  that.users = [];
  that.modalIsDisplaying = false;

  that.showModalWindow = showModalWindow;

  /**
   * shows modal window and saves user data into main controller
   * @param  {string} userName user's name
   * @param  {number} userId   user's id
   */
  function showModalWindow(userName,userId){
    that.userName = userName;
    that.userId = userId;
    that.modalIsDisplaying = true;
  }

  userService.getUsers.$promise.then(function (result) {

    that.users = result;

  });

}

export { mainController }

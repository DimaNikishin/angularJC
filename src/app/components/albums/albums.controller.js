
albumsController.$inject = ['userService','$routeParams'];

function albumsController(userService,$routeParams){

  var that = this;
  that.albums = [];
  that.loaded = false;

  that.getAlbumPhotosById = getAlbumPhotosById;

  /**
   * get photos from server
   * @param  {number} albumId album's id to retrieve from server
   */
  function getAlbumPhotosById(albumId){

    for(let i = 0; i < that.albums.length; i++){
      if(that.albums[i].id === albumId && !that.albums[i].isLoadedPhotos){
        that.loaded = false;
        that.albums[i].isLoadedPhotos = true;

        userService.getData.query({dataType:'albums',Id:albumId, subDataType:'photos'}).$promise.then(function (result) {

          that.loaded = true;
          that.albums[i].photos = [...result];
          that.albums[i].limit = 4;

        });
      }else if(that.albums[i].id === albumId && that.albums[i].isLoadedPhotos){
          if(that.albums[i].photos.length - that.albums[i].limit >= 4){
            that.albums[i].limit +=4;
          }else if(that.albums[i].photos.length - that.albums[i].limit < 4){
            that.albums[i].limit = that.albums[i].limit + ((that.albums[i].photos.length - that.albums[i].limit) % 4)
          }
      }
    }
  }

  userService.getData.query({dataType:'users',Id:$routeParams.userId, subDataType:'albums'}).$promise.then(function (result) {

    that.albums = result;
    that.loaded = true;

  });

}

export { albumsController }

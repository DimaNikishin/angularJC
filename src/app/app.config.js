
var myAppConfig = function ($httpProvider, spinerConfigProvider) {

  $httpProvider.interceptors.push(function($q){
    var counter = 0;
    return {
      'request': function(config) {
          console.log(config)
        if(config.params && config.params.fromJSONPlaceholder){
          counter++;
          spinerConfigProvider.setLoadedStatus(false)
          return config
        }else{
          return config
        }
      },
      'response': function(response) {
        console.log(response)
        if(response.config.params && response.config.params.fromJSONPlaceholder){
          if(!--counter){
            spinerConfigProvider.setLoadedStatus(true)
          }
          return response
        }else{
          return response
        }
      },
      'responseError': function(rejection) {
      counter--;
      return $q.reject(rejection);
      }
    }
  });
};

export { myAppConfig };

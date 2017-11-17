angular.module('sgbd')
  .service('LoginService', function(
    $resource,
    APIserver
  ){
    var resource = $resource(APIserver + 'user/', {}, {
      getByUsername : {
        method : 'GET',
        isArray : true
      }
    });

    this.findByUserAndPassword = findByUserAndPassword;

    function findByUserAndPassword (username, password) {
      return resource.getByUsername(
        {
          where : {
            userName: username,
            password: password
          }
        }).$promise
    }

  });

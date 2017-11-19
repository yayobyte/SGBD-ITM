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

    var vm = this;

    vm.loginData = {};

    vm.findByUserAndPassword = findByUserAndPassword;

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

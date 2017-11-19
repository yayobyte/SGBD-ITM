angular.module('sgbd')
  .service('ListDocumentsService', function(
    $resource,
    APIserver,
    LoginService
  ){
    var resource = $resource(APIserver + 'package/', {}, {
      search: {
        method: 'GET',
        isArray : true
      }
    });

    this.search = search;

    function search () {
      var idUser = LoginService.loginData.id;
      var body = {
        where : {
          idUser : idUser
        }
      };
      return resource.search(body).$promise
    }

  });

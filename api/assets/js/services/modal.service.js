angular.module('sgbd')
  .service('ModalService', function(
    $resource,
    APIserver
  ){
    var resource = $resource(APIserver + 'documents/', {}, {
      search: {
        method: 'GET',
        isArray : true
      }
    });

    this.search = search;

    function search (idPackage) {
      var body = {
        where : {
          package : idPackage
        }
      };
      return resource.search(body).$promise
    }

  });

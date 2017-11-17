angular.module('sgbd')
  .service('HomeService', function(
    $resource,
    APIserver
  ){
    var resource = $resource(APIserver + 'package/', {}, {
      search: {
        method: 'POST'
      }
    });

    this.search = search;

    function search (query) {
      return resource.search({query : query}).$promise
    }

  });

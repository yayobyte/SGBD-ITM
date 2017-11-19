angular.module('sgbd')
  .service('HomeService', function(
    $resource,
    APIserver
  ){
    var resource = $resource(APIserver + 'package/', {}, {
      search: {
        method: 'GET',
        isArray : true
      }
    });

    this.search = search;

    function search (query, field) {
      var body = {};
      switch (field) {
        case "title":
          body = {
            where : {
              title : {
                contains : query
              }
            }
          };
          break;
        case "abstract":
          body = {
            where : {
              abstract : {
                contains : query
              }
            }
          };
          break;
        case "label":
          body = {
            where : {
              label : {
                contains : query
              }
            }
          };
          break;
      }
      return resource.search(body).$promise
    }

  });

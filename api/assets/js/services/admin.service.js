angular.module('sgbd')
  .service('AdminService', function(
    $resource,
    APIserver
  ){
    var resource = $resource(APIserver + 'documents/:id', {id : "@id"}, {
      search: {
        method: 'GET',
        isArray : true
      },
      delete: {
        method: 'DELETE'
      },
      update: {
        method: 'PUT'
      }
    });

    this.search = search;
    this.approveDocument = approveDocument;
    this.deleteDocument = deleteDocument;

    function search () {
      var body = {
        where : {
          approved : false
        }
      };
      return resource.search(body).$promise;
    }

    function approveDocument (id) {
      var body = {
        approved: true,
        id : id
      };
      return resource.update(body).$promise;
    }

    function deleteDocument (idDocument) {
      var body = {
        id: idDocument
      };
      return resource.delete(body).$promise;
    }

  });

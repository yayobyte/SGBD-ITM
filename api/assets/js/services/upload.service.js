angular.module('sgbd')
  .service('UploadService', function(
    $resource,
    APIserver
  ){
    var documentsResource = $resource(APIserver + 'documents/', {}, {
      search: {
        method: 'GET',
        isArray : true
      },
      delete: {
        method: 'DELETE'
      },
      upload: {
        method: 'POST'
      }
    });

    var packageResource = $resource(APIserver + 'package/', {}, {
      search: {
        method: 'GET',
        isArray : true
      },
      create: {
        method: 'POST'
      }
    });

    this.documentSearch = documentSearch;
    this.documentsDelete = documentsDelete;
    this.documentsUpload = documentsUpload;

    this.packageSearch = packageSearch;
    this.packageCreate = packageCreate;


    function documentSearch () {
      var body = {
        where : {
          approved : false
        }
      };
      return documentsResource.search(body).$promise;
    }

    function documentsDelete (id) {
      var body = {
        id : id
      };
      return documentsResource.delete(body).$promise;
    }

    function documentsUpload (document) {
      var body = document;
      return documentsResource.upload(body).$promise;
    }

    function packageSearch (id) {
      var body = {
        where : {
          id : id
        }
      };
      return packageResource.search(body).$promise;
    }

    function packageCreate (package) {
      var body = package;
      return packageResource.create(body).$promise;
    }

  });

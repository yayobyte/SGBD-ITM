angular.module('sgbd')
.controller('uploadDocumentsController', UploadDocumentsController);

function UploadDocumentsController (
  UploadService,
  LoginService,
  $scope
) {
  var vm = this;
  vm.addPackage = addPackage;
  vm.init = init;
  vm.addDocument = addDocument;
  vm.deleteDocument = deleteDocument;
  vm.created = false;
  vm.adminPermissions = true;
  vm.formModels = {};
  vm.init();

  function init () {
    //vm.adminPermissions = LoginService.loginData.userType ==='admin';
    vm.formModels.user = LoginService.loginData.userName;
    vm.formModels.idUser = parseInt(LoginService.loginData.id);
  }

  function addPackage () {
    var body = angular.copy(vm.formModels);
    delete body.user;
    UploadService.packageCreate (body)
        .then(function (data) {
          vm.tableData = data;
          vm.created = true;
          alert ('Documento agregado');
        })
      .catch(function () {
        alert ('Ocurrio un error al realizar la busqueda')
      });

  }

  function deleteDocument (document) {
    var idDocument = document.id;
    UploadService.deleteDocument (idDocument)
      .then(function (data) {
        vm.tableData = data;
        vm.search();
      })
      .catch(function () {
        alert ('Ocurrio un error al realizar la busqueda')
      });
  }

  function addDocument () {
    $scope.$broadcast('updatePackage', vm.tableData);
    $('#myModalCreate').modal('show');
  }
}

angular.module('sgbd')
  .component('modalCreateComponent', {
    templateUrl: 'views/modal-create.ejs',
    controller : modalCreateController,
    bindings : {
      package : "="
    }
  });

function modalCreateController (
  UploadService,
  $state,
  $scope
) {
  var vm = this;
  vm.addDocument = addDocument;
  vm.state = $state.current.name;
  $scope.$on('updatePackage', addPackage);
  vm.modalFormModels = {};

  function addPackage (event, package) {
    vm.modalFormModels.package = package.id;
    vm.modalFormModels.author = 1;
  }

  function addDocument () {
    UploadService.documentsUpload (vm.modalFormModels)
      .then(function (data) {
        alert ('Documento agregado');
        $state.go('list');
      })/*
      .catch(function () {
        alert ('Ocurrio un error al agregar el documento')
      });*/
  }
}

angular.module('sgbd')
  .component('modalComponent', {
    templateUrl: 'views/modal.ejs',
    controller : modalController,
    bindings : {
      package : "="
    }
  });

function modalController (
  ModalService,
  $scope,
  $state
) {
  var vm = this;
  vm.download = download;
  $scope.$on('queryDocuments', search);
  vm.state = $state.current.name;

  function search (event, package) {
      var idPackage = package.id;
      ModalService.search(idPackage)
        .then(function (data) {
          vm.tableData = data
        });

  }

  function download (document) {
    alert('Downloading')
  }
}

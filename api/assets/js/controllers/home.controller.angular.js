angular.module('sgbd')
.controller('homeController', HomeController);

function HomeController (
  HomeService,
  $scope
) {
  var vm = this;
  vm.search = search;
  vm.init = init;
  vm.seePackage = seePackage;
  vm.init();

  function init () {
    /*
    if (!LoginService.loginData.id){
      $state.go('login');
    }
    */
    vm.searched = false;
    vm.radio = "title";
  }

  function search () {
    var query = vm.searchBox;
    var field = vm.radio;

    HomeService.search (query, field)
      .then(function (data) {
        vm.tableData = data;
        vm.searched = true;
      })
      .catch(function () {
        alert ('Ocurrio un error al realizar la busqueda')
      });
  }

  function seePackage (package) {
    vm.actualPackageToModal = package;
    $scope.$broadcast('queryDocuments', vm.actualPackageToModal);
    $('#myModal').modal('show');
  }
}

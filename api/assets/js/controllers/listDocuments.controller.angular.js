angular.module('sgbd')
.controller('listDocumentsController', HomeController);

function HomeController (
  $state,
  ListDocumentsService
) {
  var vm = this;
  vm.search = search;
  vm.init = init;

  vm.init();
  vm.search();

  function init () {
    /*
    if (!LoginService.loginData.id){
      $state.go('login');
    }
    */
  }

  function search () {
    ListDocumentsService.search ()
      .then(function (data) {
        vm.tableData = data;
      })
      .catch(function () {
        alert ('Ocurrio un error al realizar la busqueda')
      });
  }

}

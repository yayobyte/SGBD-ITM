angular.module('sgbd')
.controller('homeController', HomeController);

function HomeController (
  HomeService,
  LoginService,
  $state
) {
  var vm = this;
  vm.search = search;
  vm.init = init;
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
}

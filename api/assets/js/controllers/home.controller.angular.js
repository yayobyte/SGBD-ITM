angular.module('sgbd')
.controller('homeController', HomeController);

function HomeController (
  HomeService
) {
  var vm = this;

  vm.search = search;

  function search () {
    var query = this.searchBox;

    vm.queryData = [
      {
        id : '1',
        idUser : ''
      }
    ];


    HomeService.search (query)
      .then(function (data) {

      })
      .catch();

  }
}

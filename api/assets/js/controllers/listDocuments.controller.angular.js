angular.module('sgbd')
.controller('listDocumentsController', HomeController);

function HomeController () {
  var vm = this;

  vm.search = search;

  function search () {
    alert('estoy buscando')
  }
}

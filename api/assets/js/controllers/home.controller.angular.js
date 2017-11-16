angular.module('sgbd')
.controller('homeController', HomeController);

function HomeController () {
  var vm = this;

  vm.search = search;

  function search () {
    alert('estoy buscando')
  }
}

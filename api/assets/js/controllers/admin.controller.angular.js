angular.module('sgbd')
.controller('adminController', AdminController);

function AdminController (
  AdminService,
  $scope,
  $state,
  LoginService
) {
  var vm = this;
  vm.search = search;
  vm.init = init;
  vm.approveDocument = approveDocument;
  vm.deleteDocument = deleteDocument;
  vm.adminPermissions = true;
  vm.init();

  function init () {
    //vm.adminPermissions = LoginService.loginData.userType ==='admin';
    vm.search();
  }

  function search () {
      AdminService.search ()
        .then(function (data) {
          vm.tableData = data;
        })
      .catch(function () {
        alert ('Ocurrio un error al realizar la busqueda')
      });

  }

  function approveDocument (document) {
    var idDocument = document.id;
    AdminService.approveDocument (idDocument)
      .then(function (data) {
        vm.tableData = data;
        vm.search();
      })
      .catch(function () {
        alert ('Ocurrio un error al realizar la busqueda')
      });
  }

  function deleteDocument (document) {
    var idDocument = document.id;
    AdminService.deleteDocument (idDocument)
      .then(function (data) {
        vm.tableData = data;
        vm.search();
      })/*
      .catch(function () {
        alert ('Ocurrio un error al realizar la busqueda')
      });*/
  }
}

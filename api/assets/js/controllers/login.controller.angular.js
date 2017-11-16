angular.module('sgbd')
.controller('loginController', LoginController);

function LoginController ($state) {
  var vm = this;
  vm.createUser = createUser;
  vm.login = login;

  function createUser () {
    $state.go('signup')
  }

  function login () {
    $state.go('home');
  }
}

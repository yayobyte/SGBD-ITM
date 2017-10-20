angular.module('sgbd')
.controller('signupController', SignupController);

function SignupController () {
  var vm = this;
  vm.login = login;

  function login () {
    $state.go('login');
  }
}

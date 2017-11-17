angular.module('sgbd')
.controller('loginController', LoginController);

function LoginController (
  $state,
  LoginService
) {
  var vm = this;
  vm.createUser = createUser;
  vm.login = login;
  vm.formModels = {};

  function createUser () {
    $state.go('signup')
  }

  function login () {
    LoginService.findByUserAndPassword(vm.username, vm.password)
      .then(function (data) {
        if (data && data[0]) {
          $state.go('home');
        }else{
          alert('invalid username')
        }
      });

  }
}

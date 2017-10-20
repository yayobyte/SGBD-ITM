angular.module('sgbd')
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('user', {
      url: '/user',
      title : 'User',
      views: {
        'main' : {
          controller : 'userController',
          controllerAs : '$ctrl',
          templateUrl: '/views/user.ejs'
        }
      }
    })
    .state('login', {
      url: '/login',
      title : 'Login',
      views: {
        'main' : {
          controller : 'loginController',
          controllerAs : '$ctrl',
          templateUrl: '/views/login.ejs'
        }
      }
    })
    .state('signup', {
      url: '/signup',
      title : 'Sign Up',
      views: {
        'main' : {
          controller : 'signUpController',
          controllerAs : '$ctrl',
          templateUrl: '/views/signup.ejs'
        }
      }
    });


  $urlRouterProvider.otherwise('/login')
});

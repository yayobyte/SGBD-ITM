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
    .state('home', {
      url: '/home',
      title : 'Home',
      views: {
        'main' : {
          controller : 'homeController',
          controllerAs : '$ctrl',
          templateUrl: '/views/home.ejs'
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
    .state('list', {
      url: '/list',
      title : 'List Documents',
      views: {
        'main' : {
          controller : 'listDocumentsController',
          controllerAs : '$ctrl',
          templateUrl: '/views/listDocuments.ejs'
        }
      }
    })
    .state('upload', {
      url: '/upload',
      title : 'Upload Documents',
      views: {
        'main' : {
          controller : 'uploadDocumentsController',
          controllerAs : '$ctrl',
          templateUrl: '/views/uploadDocuments.ejs'
        }
      }
    })
    .state('admin', {
      url: '/admin',
      title : 'Administraci&oacute;n',
      views: {
        'main' : {
          controller : 'adminController',
          controllerAs : '$ctrl',
          templateUrl: '/views/admin.ejs'
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

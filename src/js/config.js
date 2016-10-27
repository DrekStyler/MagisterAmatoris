(function() {
  console.log('config.js');
  'use strict';

  angular
    .module('myApp.config', ['ngRoute'])
    .config(appConfig)
    .run(function($templateCache) {
      $templateCache.removeAll();
    });
    function appConfig($routeProvider) {
      $routeProvider
        .when('/', {
          template: '<teacher></teacher>'
        })
        .when('/login', {
          templateUrl: 'login.html'
        })
        .when('/register', {
          templateUrl: 'register.html'
        })
        .when('/members', {
          templateUrl: 'members.html'
        })
        .otherwise({
          redirectTo: '<teacher></teacher>'
        });
    }
})();

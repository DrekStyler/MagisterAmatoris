(function() {
  console.log('config.js');
  'use strict'; //jshint ignore:line
  angular
    .module('myApp.config', ['ngRoute'])
    .config(appConfig)
    .run(function($templateCache) {
      $templateCache.removeAll();
    });
  function appConfig($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<teacher></teacher>',
        controller:'mainController',
        controllerAs: 'mc'
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
    //May want to move these back to tags so that the tags can be reused
  }
})();

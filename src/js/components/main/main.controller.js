(function() {
  console.log('main.controller.js');
  'use strict';
  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);
  mainController.$inject = ['$scope', 'getMembers', '$http'];

function mainController($scope, getMembers, $http) {
    const vm = this; //jshint ignore:line
    console.log('mainController',getMembers);
  }
})();



//jshint ignore:line
//jshint ignore:line

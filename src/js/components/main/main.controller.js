(function() {
  console.log('main.controller.js');
  'use strict'; //jshint ignore:line
  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);
  mainController.$inject = ['$scope', '$http'];

  function mainController($scope, $http) {
    const vm = this; //jshint ignore:line
    // console.log('mainController',getMembers);
    vm.getAllMembers = () => {
      $http.get('https://galvanize-student-apis.herokuapp.com/gdating/members')
      .then((results) => {
        console.log(results);
      });
    };
  }
})();

//jshint ignore:line
//jshint ignore:line

(function() {

  getMembers.$inject = ['$http'];

  'use strict'; //jshint ignore:line
  angular.module('myApp.services', [])
  .service('teacherService', teacherService);

  teacherService.$inject = ['$http'];

  function teacherService () {
    const baseURL = 'http//:localhost:8888/';
    console.log('teacherService');
  }

  function getMembers($http) {
    $http.get('https://galvanize-student-apis.herokuapp.com/gdating/members')
    .then((data) => {
      console.log(data);
    });
  }
}());

// sample angular code

(function() {
  // console.log('app.js');

  angular
    .module('myApp', [
      'ngRoute',
      'myApp.config',
      'myApp.components.main',
      'myApp.services'
    ]);

})();

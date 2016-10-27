angular.module('myApp').directive('teacher', teacherDirective);


teacherDirective.$inject = ['mainController'];

function teacherDirective (mainController,$location) {
  return {
    restrict: 'E',
    templateUrl: 'main.html',
    controller: mainController,
    controllerAs:'mc'
  };
}

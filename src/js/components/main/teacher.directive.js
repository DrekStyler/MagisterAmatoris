angular.module('myApp').directive('teacher', teacherDirective);

function teacherDirective () {
  return {
    restrict: 'E',
    templateUrl: 'main.html',
    controller: '',
    controllerAs:'mc'
  };
}

'use strict';

/**
 * @ngdoc function
 * @name bmstreamApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bmstreamApp
 */
angular.module('bmstreamApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

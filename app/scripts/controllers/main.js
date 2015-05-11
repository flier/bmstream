'use strict';

/**
 * @ngdoc function
 * @name bmstreamApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bmstreamApp
 */
angular.module('bmstreamApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

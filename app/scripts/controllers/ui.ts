/// <reference path="../types.ts" />

module ui {
  'use strict';

  class NavbarController {
    public static $inject = [
      '$log',
      '$scope',
      '$location'
    ]

    constructor(
      private $log: ng.ILogService,
      private $scope: ng.IScope,
      private $location: ng.ILocationService)
    {
    }
  }

  class ViewController {
    public static $inject = [
      '$log',
      '$scope',
      '$location'
    ]

    constructor(
      private $log: ng.ILogService,
      private $scope: IBookmarkViewScope,
      private $location: ng.ILocationService)
    {
      $scope.location = $location;
    }
  }

  angular.module('app.controllers.ui', [])
    .controller('NavbarCtrl', NavbarController)
    .controller('ViewCtrl', ViewController);
}

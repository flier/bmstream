/// <reference path="../types.ts" />

module ui {
  'use strict';

  export class NavbarController {
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

  export class ViewController {
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
}

/// <reference path="../types.ts" />

module ui {
  'use strict';

  export class NavbarController {
    private log = log4javascript.getLogger("ui.NavbarController");

    public static $inject = [
      '$scope',
      '$location'
    ]

    constructor(
      private $scope: ng.IScope,
      private $location: ng.ILocationService)
    {
      this.log.info("created");
    }
  }

  export class ViewController {
    private log = log4javascript.getLogger("ui.ViewController");

    public static $inject = [
      '$scope',
      '$location'
    ]

    constructor(
      private $scope: IBookmarkViewScope,
      private $location: ng.ILocationService)
    {
      this.log.info("created");

      $scope.location = $location;
    }
  }
}

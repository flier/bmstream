/// <reference path="../types.ts" />

module bookmarks {
  'use strict';

  export class TreeController {
    private log = log4javascript.getLogger("bookmarks.TreeController");

    public static $inject = [
      '$scope',
      '$location'
    ]

    constructor(
      private $scope: IBookmarkCollectionTreeScope,
      private $location: ng.ILocationService)
    {
      this.log.info("created");
    }
  }

  export class TilesController {
    private log = log4javascript.getLogger("bookmarks.TilesController");

    public static $inject = [
      '$scope',
      '$location'
    ]

    constructor(
      private $scope: IBookmarkCollectionViewScope,
      private $location: ng.ILocationService)
    {
      this.log.info("created");

      if ($location.path() === '') $location.path('/');
      $scope.location = $location;
    }
  }

  export class TimelineController {
    private log = log4javascript.getLogger("bookmarks.TimelineController");

    public static $inject = [
      '$scope',
      '$location'
    ]

    constructor(
      private $scope: IBookmarkCollectionViewScope,
      private $location: ng.ILocationService)
    {
      this.log.info("created");

      if ($location.path() === '') $location.path('/');
      $scope.location = $location;
    }
  }

  export class TagCloudController {
    private log = log4javascript.getLogger("bookmarks.TagCloudController");

    public static $inject = [
      '$scope',
      '$location'
    ]

    constructor(
      private $scope: IBookmarkCollectionViewScope,
      private $location: ng.ILocationService)
    {
      this.log.info("created");

      if ($location.path() === '') $location.path('/');
      $scope.location = $location;
    }
  }
}

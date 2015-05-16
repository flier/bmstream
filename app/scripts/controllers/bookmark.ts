/// <reference path="../types.ts" />

module bookmarks {
  'use strict';

  export class TreeController {
    private log = log4javascript.getLogger("bookmarks.TreeController");

    public static $inject = [
      '$scope',
      '$location',
      '$bookmarkProvider'
    ]

    constructor(
      private $scope: IBookmarkCollectionScope,
      private $location: ng.ILocationService,
      private $bookmarkProvider: IBookmarkProvider)
    {
      $scope.bookmarks = $bookmarkProvider.bookmarks;
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
      if ($location.path() === '') $location.path('/');
      $scope.location = $location;
    }
  }
}

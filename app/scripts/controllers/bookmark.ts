/// <reference path="../types.ts" />

module bookmarks {
  'use strict';

  export class TreeController {
    public static $inject = [
      '$log',
      '$location',
      '$scope',
      'bookmarkProvider'
    ]

    constructor(
      private $log: ng.ILogService,
      private $location: ng.ILocationService,
      private $scope: IBookmarkCollectionScope,
      private bookmarkProvider: IBookmarkProvider)
    {
      $scope.bookmarks = bookmarkProvider.bookmarks;
    }
  }

  export class TilesController {
    public static $inject = [
      '$log',
      '$location',
      '$scope'
    ]

    constructor(
      private $log: ng.ILogService,
      private $location: ng.ILocationService,
      private $scope: IBookmarkCollectionViewScope
  )
    {
      if ($location.path() === '') $location.path('/');
      $scope.location = $location;
    }
  }

  export class TimelineController {
    public static $inject = [
      '$log',
      '$location',
      '$scope'
    ]

    constructor(
      private $log: ng.ILogService,
      private $location: ng.ILocationService,
      private $scope: IBookmarkCollectionViewScope
    )
    {
      if ($location.path() === '') $location.path('/');
      $scope.location = $location;
    }
  }

  export class TagCloudController {
    public static $inject = [
      '$log',
      '$location',
      '$scope'
    ]

    constructor(
      private $log: ng.ILogService,
      private $location: ng.ILocationService,
      private $scope: IBookmarkCollectionViewScope
    )
    {
      if ($location.path() === '') $location.path('/');
      $scope.location = $location;
    }
  }
}

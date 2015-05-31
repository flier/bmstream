/// <reference path="../types.ts" />

module bookmarks {
  'use strict';

  class TreeController {
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

  class TilesController {
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

  class TimelineController {
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

  class TagCloudController {
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

  angular.module('app.controllers.bookmark', [])
    .controller('TreeCtrl', TreeController)
    .controller('TilesCtrl', TilesController)
    .controller('TimelineCtrl', TimelineController)
    .controller('TagCloudCtrl', TagCloudController);
}

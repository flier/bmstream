/// <reference path="../types.ts" />

module bookmarks {
  'use strict';

  class BookmarksTreeController {
    private log = log4javascript.getLogger("bookmarks.BookmarksTreeController");

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

  class BookmarksTilesController {
    private log = log4javascript.getLogger("bookmarks.BookmarksTilesController");

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

  class BookmarksTimelineController {
    private log = log4javascript.getLogger("bookmarks.BookmarksTimelineController");

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

  class BookmarksTagCloudController {
    private log = log4javascript.getLogger("bookmarks.BookmarksTagCloudController");

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

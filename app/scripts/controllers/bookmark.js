/// <reference path="../types.ts" />
var bookmarks;
(function (bookmarks) {
    'use strict';
    var BookmarksTreeController = (function () {
        function BookmarksTreeController($scope, $location) {
            this.$scope = $scope;
            this.$location = $location;
            this.log = log4javascript.getLogger("bookmarks.BookmarksTreeController");
            this.log.info("created");
        }
        BookmarksTreeController.$inject = [
            '$scope',
            '$location'
        ];
        return BookmarksTreeController;
    })();
    bookmarks.BookmarksTreeController = BookmarksTreeController;
    var BookmarksTilesController = (function () {
        function BookmarksTilesController($scope, $location) {
            this.$scope = $scope;
            this.$location = $location;
            this.log = log4javascript.getLogger("bookmarks.BookmarksTilesController");
            this.log.info("created");
            if ($location.path() === '')
                $location.path('/');
            $scope.location = $location;
        }
        BookmarksTilesController.$inject = [
            '$scope',
            '$location'
        ];
        return BookmarksTilesController;
    })();
    bookmarks.BookmarksTilesController = BookmarksTilesController;
    var BookmarksTimelineController = (function () {
        function BookmarksTimelineController($scope, $location) {
            this.$scope = $scope;
            this.$location = $location;
            this.log = log4javascript.getLogger("bookmarks.BookmarksTimelineController");
            this.log.info("created");
            if ($location.path() === '')
                $location.path('/');
            $scope.location = $location;
        }
        BookmarksTimelineController.$inject = [
            '$scope',
            '$location'
        ];
        return BookmarksTimelineController;
    })();
    bookmarks.BookmarksTimelineController = BookmarksTimelineController;
    var BookmarksTagCloudController = (function () {
        function BookmarksTagCloudController($scope, $location) {
            this.$scope = $scope;
            this.$location = $location;
            this.log = log4javascript.getLogger("bookmarks.BookmarksTagCloudController");
            this.log.info("created");
            if ($location.path() === '')
                $location.path('/');
            $scope.location = $location;
        }
        BookmarksTagCloudController.$inject = [
            '$scope',
            '$location'
        ];
        return BookmarksTagCloudController;
    })();
    bookmarks.BookmarksTagCloudController = BookmarksTagCloudController;
})(bookmarks || (bookmarks = {}));
//# sourceMappingURL=bookmark.js.map
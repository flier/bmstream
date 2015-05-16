/// <reference path="../types.ts" />
var bookmarks;
(function (bookmarks) {
    'use strict';
    angular.module('app.controllers', []).controller('TreeCtrl', BookmarksTreeController).controller('TilesCtrl', BookmarksTilesController).controller('TimelineCtrl', BookmarksTimelineController).controller('TagCloudCtrl', BookmarksTagCloudController);
})(bookmarks || (bookmarks = {}));
//# sourceMappingURL=module.js.map
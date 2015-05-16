/// <reference path="../types.ts" />

module bookmarks {
  'use strict';

  angular.module('app.controllers', [])
    .controller('TreeCtrl', BookmarksTreeController)
    .controller('TilesCtrl', BookmarksTilesController)
    .controller('TimelineCtrl', BookmarksTimelineController)
    .controller('TagCloudCtrl', BookmarksTagCloudController);
}

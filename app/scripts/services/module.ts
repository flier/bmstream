/// <reference path="../types.ts" />

module app {
  'use strict';

  angular.module('app.services', [])
    .service('bookmarkProvider', bookmarks.BookmarkProvider)
    .service('bookmarkImporter', bookmarks.BookmarkImporter)
    .service('bookmarkStorage', storage.BookmarkStorage)
    .service('screenshotStorage', storage.ScreenshotStorage);
}

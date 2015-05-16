/// <reference path="../types.ts" />

module app {
  'use strict';

  angular.module('app.services', [])
    .service('importer', bookmarks.BookmarkImporter)
    .service('bookmarkStorage', storage.BookmarkStorage)
    .service('screenshotStorage', storage.ScreenshotStorage);
}

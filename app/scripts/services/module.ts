/// <reference path="../types.ts" />

module bookmarks {
  'use strict';

  angular.module('app.services', [])
    .service('importer', BookmarkImporter)
    .service('bookmarkStorage', BookmarkStorage)
    .service('screenshotStorage', ScreenshotStorage);
}

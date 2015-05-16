/// <reference path="../types.ts" />
var bookmarks;
(function (bookmarks) {
    'use strict';
    angular.module('app.services', []).service('importer', bookmarks.BookmarkImporter).service('bookmarkStorage', bookmarks.BookmarkStorage).service('screenshotStorage', bookmarks.ScreenshotStorage);
})(bookmarks || (bookmarks = {}));
//# sourceMappingURL=module.js.map
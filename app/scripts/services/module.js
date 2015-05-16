/// <reference path="../types.ts" />
var app;
(function (app) {
    'use strict';
    angular.module('app.services', []).service('importer', bookmarks.BookmarkImporter).service('bookmarkStorage', storage.BookmarkStorage).service('screenshotStorage', storage.ScreenshotStorage);
})(app || (app = {}));
//# sourceMappingURL=module.js.map
/// <reference path="../types.ts" />
var bookmarks;
(function (bookmarks) {
    'use strict';
    var BookmarkStorage = (function () {
        function BookmarkStorage() {
            this.log = log4javascript.getLogger("storage.BookmarkStorage");
        }
        return BookmarkStorage;
    })();
    bookmarks.BookmarkStorage = BookmarkStorage;
    var ScreenshotStorage = (function () {
        function ScreenshotStorage() {
            this.log = log4javascript.getLogger("storage.ScreenshotStorage");
        }
        return ScreenshotStorage;
    })();
    bookmarks.ScreenshotStorage = ScreenshotStorage;
})(bookmarks || (bookmarks = {}));
//# sourceMappingURL=storage.js.map
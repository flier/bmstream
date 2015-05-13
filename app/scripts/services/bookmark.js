/// <reference path="../types.ts" />
var bookmarks;
(function (bookmarks) {
    'use strict';
    var BookmarkImporter = (function () {
        function BookmarkImporter(visitor) {
            this.visitor = visitor;
            this.log = log4javascript.getLogger("bookmarks.BookmarkImporter");
        }
        BookmarkImporter.prototype.imports = function () {
            var _this = this;
            chrome.bookmarks.getTree(function (nodes) { return _this.import(nodes); });
        };
        BookmarkImporter.prototype.import = function (nodes) {
            for (var node in nodes) {
                this.visitor.visit(node);
                if (node.children) {
                    this.import(node.children);
                }
            }
        };
        return BookmarkImporter;
    })();
    bookmarks.BookmarkImporter = BookmarkImporter;
})(bookmarks || (bookmarks = {}));
//# sourceMappingURL=bookmark.js.map
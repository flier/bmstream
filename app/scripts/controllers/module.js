/// <reference path="../types.ts" />
var app;
(function (app) {
    'use strict';
    angular.module('app.controllers', []).controller('NavbarCtrl', ui.NavbarController).controller('ViewCtrl', ui.ViewController).controller('TreeCtrl', bookmarks.TreeController).controller('TilesCtrl', bookmarks.TilesController).controller('TimelineCtrl', bookmarks.TimelineController).controller('TagCloudCtrl', bookmarks.TagCloudController);
})(app || (app = {}));
//# sourceMappingURL=module.js.map
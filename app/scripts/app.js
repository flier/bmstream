/// <reference path="types.ts" />
var bookmarks;
(function (bookmarks) {
    'use strict';
    var bmstreamApp = angular.module('bmstreamApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ]).controller('TreeCtrl', bookmarks.BookmarksTreeController).controller('TilesCtrl', bookmarks.BookmarksTilesController).controller('TimelineCtrl', bookmarks.BookmarksTimelineController).controller('TagCloudCtrl', bookmarks.BookmarksTagCloudController).service('importer', bookmarks.BookmarkImporter).service('bookmarkStorage', bookmarks.BookmarkStorage).config(function ($routeProvider) {
        $routeProvider.when('/tiles', {
            templateUrl: 'views/tiles.html',
            controller: 'TilesCtrl'
        }).when('/timeline', {
            templateUrl: 'views/timeline.html',
            controller: 'TimelineCtrl'
        }).when('/tagcloud', {
            templateUrl: 'views/tagcloud.html',
            controller: 'TagCloudCtrl'
        }).otherwise({
            redirectTo: '/'
        });
    });
})(bookmarks || (bookmarks = {}));
//# sourceMappingURL=app.js.map
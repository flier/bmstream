/// <reference path="types.ts" />

module bookmarks {
  'use strict';

  var bmstreamApp = angular.module('bmstreamApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'])
    .controller('TreeCtrl', BookmarksTreeController)
    .controller('TilesCtrl', BookmarksTilesController)
    .controller('TimelineCtrl', BookmarksTimelineController)
    .controller('TagCloudCtrl', BookmarksTagCloudController)
    //.directive('bookmark', BookmarkDirective)
    .service('importer', BookmarkImporter)
    .service('bookmarkStorage', BookmarkStorage)
    .config(function ($routeProvider) {
      $routeProvider
        .when('/tiles', {
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
}

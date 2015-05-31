/// <reference path="types.ts" />

module bookmarks {
  'use strict';

  var app = angular.module('app', [
    'ngAnimate', 'ngAria', 'ngCookies', 'ngMessages', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'ngMaterial',
    'app.services', 'app.directives', 'app.controllers.ui',  'app.controllers.bookmark'
  ]).config(function ($routeProvider:angular.route.IRouteProvider) {
      $routeProvider
        .when('/tiles', {templateUrl: 'views/tiles.html', controller: 'TilesCtrl'})
        .when('/timeline', {templateUrl: 'views/timeline.html', controller: 'TimelineCtrl'})
        .when('/tagcloud', {templateUrl: 'views/tagcloud.html', controller: 'TagCloudCtrl'})
        .otherwise({redirectTo: '/tiles'});
    });
}

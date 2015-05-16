/// <reference path="../types.ts" />

module app {
  'use strict';

  angular.module('app.controllers', [])
    .controller('NavbarCtrl', ui.NavbarController)
    .controller('ViewCtrl', ui.ViewController)
    .controller('TreeCtrl', bookmarks.TreeController)
    .controller('TilesCtrl', bookmarks.TilesController)
    .controller('TimelineCtrl', bookmarks.TimelineController)
    .controller('TagCloudCtrl', bookmarks.TagCloudController);
}

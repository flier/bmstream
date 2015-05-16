/// <reference path="../types.ts" />

module bookmarks {
  'use strict';

  function BookmarkDirective(): ng.IDirective {
    return {
      link: ($scope: ng.IScope, element: JQuery, attributes: any) => {

      }
    }
  }

  angular.module('app.directives', [])
    .directive('bookmark', BookmarkDirective);
}

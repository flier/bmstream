/// <reference path="../types.ts" />

module ui {
  'use strict';

  export interface IBookmarkViewScope extends ng.IScope {
    location: ng.ILocationService;
  }
}

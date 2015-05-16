/// <reference path="../types.ts" />

module storage {
  'use strict';

  export class BookmarkStorage implements IBookmarkStorage {
    public static $inject = [
      '$log'
    ]

    constructor(
      private $log: ng.ILogService
    ) {

    }
  }

  export class ScreenshotStorage implements IScreenshotStorage {
    public static $inject = [
      '$log'
    ]

    constructor(
      private $log: ng.ILogService
    ) {

    }
  }
}
